import subprocess
import re
from pathlib import Path


def run_doxygen(path: Path, config_file: Path):
    p = subprocess.Popen([
        "doxygen",
        str(config_file),
    ], cwd=path, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    p.communicate()


_re_safe_enum = re.compile(r"typedef\s+dds::core::safe_enum<([a-zA-Z0-9_]+)>\s+([a-zA-Z0-9]+)")
def _cxx_replacer(path: Path):
    # Rename the struct to the typedef and remove the typedef from the sources
    # for readability.
    data = path.read_text()
    typedefs = _re_safe_enum.findall(data)
    for match in typedefs:
        data = data.replace(match[0], match[1])
    data = _re_safe_enum.sub("", data)

    for template in [
        "TBuiltinTopic" "TDomainParticipant" "TEntity" "TInstanceHandle"
        "TQosProvider" "TCondition" "TGuardCondtion" "TStatusCondition"
        "TWaitSet" "TCorePolicy" "TQosPolicy" "TStatus" "TDomainParticipant"
        "TCoherentSet" "TPublisher" "TSuspendedPublication" "TCoherentAccess"
        "TDataReader" "TGenerationCount" "TQuery" "TRank" "TSample" "TSubscriber"
        "TReadCondition" "TFilter" "TGuardCondition" "THolder" "TDHolder"
        "TAnyDataReader" "TAnyTopic" "TAnyDataWriter"
        # XTypes
        "TAnnotation" "TCollectionTypes" "TDynamic" "TMember" "TStruct" "TType"
        "TCollectionType" "TExtensibilityAnnotation" "TidAnnotation"
        "TKeyAnnotation" "TPrimitiveType" "TSequenceType" "TStringType"
        "TUnionForwardDeclaration" "TVerbatimAnnotation" "TBitBoundAnnotation"
        "TBitsetAnnotation" "TMapType" "TMustUnderstandAnnotation"
        "TNestedAnnotation" "TIdAnnotation" "TUnionForwardDeclaration"
        # QoS
        "TUserData" "TGroupData" "TTopic" "TTransportPriority" "TLifespan"
        "TDeadline" "TLatencyBudget" "TTimeBasedFilter" "TPartition" "TOwnership"
        "TWriterDataLifecycle" "TReaderDataLifecycle" "TDurability" "TPresentation"
        "TReliability" "TDestinationOrder" "THistory" "TResourceLimits"
        "TLiveliness" "TDurabilityService" "TShare" "TProductData"
        "TSubscriptionKey" "TDataRepresentation" "TRequestedDeadlineMissedStatus"
        "TInconsistentTopicStatus" "TOffered" "TRequested"
        # TBuiltinStuff
        "TSubscription" "TPublication" "TParticipant" "TTopicBuiltinTopicData"
        "TCM" "TBuiltinTopicTypes" "TBytesTopicType" "TKeyedBytesTopicType"
        "TKeyedStringTopicType" "TStringTopicType"
        # Streams
        "TStreamDataReader" "TStreamDataWriter" "TCorePolicy" "TStreamSample"
        "TStreamFlush"
    ]:
        data = data.replace(template, template[1:])

    # Sequences with DELAGATE that must be removed.
    for delegate in [
        "template <typename DELEGATE>" "<typename DELEGATE>" "<D>" "<DELEGATE>"
        "< DELEGATE >" "template <typename D>" "< DELEGATE<T> >"
        ", template <typename Q> class DELEGATE" ", DELEGATE"
    ]:
        data = data.replace(delegate, "")

    path.write_text(data)


def cxx_preprocess_headers(include_path: Path):
    for file in include_path.rglob("*.hpp"):
        # Templates are documented. e.g. dds/sub/TQuery.hpp contains the code
        # and documentation for a the dds::sub::Query class which is a typedef of
        # dds::sub::detail::Query, which itself is a typedef to the delegate that
        # implements the template. This must be hidden from the user, so replace
        # the original header by that of the template and replace the typenames in
        # the source file.
        if file.name.startswith("T") and not any(file.name.startswith(pre) for pre in ["Topic", "Time", "Type"]):
            # Strip the leading T
            non_template = file.with_name(file.name[1:])
            if non_template.exists():
                non_template.unlink()
            file.rename(non_template)
        # Use file located in detail for Qoses (filename ends with Qos.hpp).
        # Except TEntityQos.hpp, EntityQos container is not a real Qos and must
        # not be treated as such.
        elif file.name.endswith("Qos.hpp") and (file.parent / "detail" / file.name).exists():
            file.unlink()
            (file.parent / "detail" / file.name).rename(file)

    for file in include_path.rglob("*.hpp"):
        _cxx_replacer(file)
