Search.setIndex({docnames:["api","cyclonedds.builtin","cyclonedds.core","cyclonedds.domain","cyclonedds.dynamic","cyclonedds.idl","cyclonedds.internal","cyclonedds.pub","cyclonedds.qos","cyclonedds.sub","cyclonedds.topic","cyclonedds.util","dds","idl","index","intro","tools","tools.ddsls","tools.pubsub","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","cyclonedds.builtin.rst","cyclonedds.core.rst","cyclonedds.domain.rst","cyclonedds.dynamic.rst","cyclonedds.idl.rst","cyclonedds.internal.rst","cyclonedds.pub.rst","cyclonedds.qos.rst","cyclonedds.sub.rst","cyclonedds.topic.rst","cyclonedds.util.rst","dds.rst","idl.rst","index.rst","intro.rst","tools.rst","tools.ddsls.rst","tools.pubsub.rst","usage.rst"],objects:{"cyclonedds.core":[[2,0,1,"","DDSException"],[2,0,1,"","DDSStatus"],[2,0,1,"","Entity"],[2,0,1,"","GuardCondition"],[2,0,1,"","InstanceState"],[2,0,1,"","Listener"],[8,0,1,"","Policy"],[8,0,1,"","Qos"],[2,0,1,"","QueryCondition"],[2,0,1,"","ReadCondition"],[2,0,1,"","SampleState"],[2,0,1,"","ViewState"],[2,0,1,"","WaitSet"]],"cyclonedds.core.DDSException":[[2,1,1,"","DDS_RETCODE_ALREADY_DELETED"],[2,1,1,"","DDS_RETCODE_BAD_PARAMETER"],[2,1,1,"","DDS_RETCODE_ERROR"],[2,1,1,"","DDS_RETCODE_ILLEGAL_OPERATION"],[2,1,1,"","DDS_RETCODE_IMMUTABLE_POLICY"],[2,1,1,"","DDS_RETCODE_INCONSISTENT_POLICY"],[2,1,1,"","DDS_RETCODE_NOT_ALLOWED_BY_SECURITY"],[2,1,1,"","DDS_RETCODE_NOT_ENABLED"],[2,1,1,"","DDS_RETCODE_NO_DATA"],[2,1,1,"","DDS_RETCODE_OK"],[2,1,1,"","DDS_RETCODE_OUT_OF_RESOURCES"],[2,1,1,"","DDS_RETCODE_PRECONDITION_NOT_MET"],[2,1,1,"","DDS_RETCODE_TIMEOUT"],[2,1,1,"","DDS_RETCODE_UNSUPPORTED"],[2,1,1,"","code"],[2,1,1,"","error_message_mapping"],[2,1,1,"","msg"]],"cyclonedds.core.DDSStatus":[[2,1,1,"","DataAvailable"],[2,1,1,"","DataOnReaders"],[2,1,1,"","InconsistentTopic"],[2,1,1,"","LivelinessChanged"],[2,1,1,"","LivelinessLost"],[2,1,1,"","OfferedDeadlineMissed"],[2,1,1,"","OfferedIncompatibleQos"],[2,1,1,"","PublicationMatched"],[2,1,1,"","RequestedDeadlineMissed"],[2,1,1,"","RequestedIncompatibleQos"],[2,1,1,"","SampleLost"],[2,1,1,"","SampleRejected"],[2,1,1,"","SubscriptionMatched"]],"cyclonedds.core.Entity":[[2,2,1,"","__init__"],[2,2,1,"","begin_coherent"],[2,1,1,"","children"],[2,1,1,"","datareader"],[2,1,1,"","domain_id"],[2,2,1,"","end_coherent"],[2,2,1,"","get_children"],[2,2,1,"","get_datareader"],[2,2,1,"","get_domain_id"],[2,2,1,"","get_entity"],[2,2,1,"","get_guid"],[2,2,1,"","get_instance_handle"],[2,2,1,"","get_listener"],[2,2,1,"","get_parent"],[2,2,1,"","get_participant"],[2,2,1,"","get_publisher"],[2,2,1,"","get_qos"],[2,2,1,"","get_status_changes"],[2,2,1,"","get_status_mask"],[2,2,1,"","get_subscriber"],[2,1,1,"","guid"],[2,3,1,"","instance_handle"],[2,1,1,"","parent"],[2,1,1,"","participant"],[2,1,1,"","publisher"],[2,2,1,"","read_status"],[2,2,1,"","set_listener"],[2,2,1,"","set_qos"],[2,2,1,"","set_status_mask"],[2,1,1,"","status_mask"],[2,1,1,"","subscriber"],[2,2,1,"","take_status"]],"cyclonedds.core.GuardCondition":[[2,2,1,"","__init__"],[2,2,1,"","read"],[2,2,1,"","set"],[2,2,1,"","take"]],"cyclonedds.core.InstanceState":[[2,1,1,"","Alive"],[2,1,1,"","Any"],[2,1,1,"","NotAliveDisposed"],[2,1,1,"","NotAliveNoWriters"]],"cyclonedds.core.Listener":[[2,2,1,"","__init__"],[2,2,1,"","copy"],[2,2,1,"","copy_to"],[2,2,1,"","merge"],[2,2,1,"","on_data_available"],[2,2,1,"","on_data_on_readers"],[2,2,1,"","on_inconsistent_topic"],[2,2,1,"","on_liveliness_changed"],[2,2,1,"","on_liveliness_lost"],[2,2,1,"","on_offered_deadline_missed"],[2,2,1,"","on_offered_incompatible_qos"],[2,2,1,"","on_publication_matched"],[2,2,1,"","on_requested_deadline_missed"],[2,2,1,"","on_requested_incompatible_qos"],[2,2,1,"","on_sample_lost"],[2,2,1,"","on_sample_rejected"],[2,2,1,"","on_subscription_matched"],[2,2,1,"","reset"],[2,2,1,"","set_on_data_available"],[2,2,1,"","set_on_data_on_readers"],[2,2,1,"","set_on_inconsistent_topic"],[2,2,1,"","set_on_liveliness_changed"],[2,2,1,"","set_on_liveliness_lost"],[2,2,1,"","set_on_offered_deadline_missed"],[2,2,1,"","set_on_offered_incompatible_qos"],[2,2,1,"","set_on_publication_matched"],[2,2,1,"","set_on_requested_deadline_missed"],[2,2,1,"","set_on_requested_incompatible_qos"],[2,2,1,"","set_on_sample_lost"],[2,2,1,"","set_on_sample_rejected"],[2,2,1,"","set_on_subscription_matched"]],"cyclonedds.core.Policy":[[8,0,1,"","BinaryProperty"],[8,0,1,"","DataRepresentation"],[8,0,1,"","Deadline"],[8,0,1,"","DestinationOrder"],[8,0,1,"","Durability"],[8,0,1,"","DurabilityService"],[8,0,1,"","EntityName"],[8,0,1,"","Groupdata"],[8,0,1,"","History"],[8,0,1,"","IgnoreLocal"],[8,0,1,"","LatencyBudget"],[8,0,1,"","Lifespan"],[8,0,1,"","Liveliness"],[8,0,1,"","Ownership"],[8,0,1,"","OwnershipStrength"],[8,0,1,"","Partition"],[8,0,1,"","PresentationAccessScope"],[8,0,1,"","Property"],[8,0,1,"","ReaderDataLifecycle"],[8,0,1,"","Reliability"],[8,0,1,"","ResourceLimits"],[8,0,1,"","TimeBasedFilter"],[8,0,1,"","Topicdata"],[8,0,1,"","TransportPriority"],[8,0,1,"","TypeConsistency"],[8,0,1,"","Userdata"],[8,0,1,"","WriterDataLifecycle"]],"cyclonedds.core.Policy.Deadline":[[8,1,1,"","deadline"]],"cyclonedds.core.Policy.DurabilityService":[[8,1,1,"","cleanup_delay"],[8,1,1,"","history"],[8,1,1,"","max_instances"],[8,1,1,"","max_samples"],[8,1,1,"","max_samples_per_instance"]],"cyclonedds.core.Policy.History":[[8,1,1,"","KeepAll"],[8,1,1,"","KeepLast"]],"cyclonedds.core.Policy.Lifespan":[[8,1,1,"","lifespan"]],"cyclonedds.core.Policy.Liveliness":[[8,1,1,"","Automatic"],[8,1,1,"","ManualByParticipant"],[8,1,1,"","ManualByTopic"]],"cyclonedds.core.Policy.Ownership":[[8,1,1,"","Exclusive"],[8,1,1,"","Shared"]],"cyclonedds.core.Policy.Partition":[[8,1,1,"","partitions"]],"cyclonedds.core.Policy.PresentationAccessScope":[[8,1,1,"","Group"],[8,1,1,"","Instance"],[8,1,1,"","Topic"]],"cyclonedds.core.Policy.ReaderDataLifecycle":[[8,1,1,"","autopurge_disposed_samples_delay"],[8,1,1,"","autopurge_nowriter_samples_delay"]],"cyclonedds.core.Policy.Reliability":[[8,1,1,"","Reliable"]],"cyclonedds.core.Policy.ResourceLimits":[[8,1,1,"","max_instances"],[8,1,1,"","max_samples"],[8,1,1,"","max_samples_per_instance"]],"cyclonedds.core.Policy.TimeBasedFilter":[[8,1,1,"","filter_time"]],"cyclonedds.core.Policy.TransportPriority":[[8,1,1,"","priority"]],"cyclonedds.core.Policy.TypeConsistency":[[8,1,1,"","AllowTypeCoercion"],[8,1,1,"","DisallowTypeCoercion"]],"cyclonedds.core.Policy.WriterDataLifecycle":[[8,1,1,"","autodispose"]],"cyclonedds.core.Qos":[[8,2,1,"","__init__"],[8,2,1,"","asdict"],[8,2,1,"","fromdict"],[8,1,1,"","policies"]],"cyclonedds.core.QueryCondition":[[2,2,1,"","__init__"]],"cyclonedds.core.ReadCondition":[[2,2,1,"","__init__"]],"cyclonedds.core.SampleState":[[2,1,1,"","Any"],[2,1,1,"","NotRead"],[2,1,1,"","Read"]],"cyclonedds.core.ViewState":[[2,1,1,"","Any"],[2,1,1,"","New"],[2,1,1,"","Old"]],"cyclonedds.core.WaitSet":[[2,2,1,"","__init__"],[2,2,1,"","attach"],[2,2,1,"","detach"],[2,2,1,"","get_entities"],[2,2,1,"","is_attached"],[2,2,1,"","set_trigger"],[2,2,1,"","wait"],[2,2,1,"","wait_async"],[2,2,1,"","wait_until"]],"cyclonedds.domain":[[3,0,1,"","Domain"],[3,0,1,"","DomainParticipant"]],"cyclonedds.domain.Domain":[[3,2,1,"","get_participants"]],"cyclonedds.idl":[[5,0,1,"","IdlBitmask"],[5,0,1,"","IdlEnum"],[5,0,1,"","IdlStruct"],[5,0,1,"","IdlUnion"],[5,4,0,"-","annotations"],[5,4,0,"-","types"]],"cyclonedds.idl.IdlBitmask":[[5,2,1,"","as_mask"],[5,2,1,"","from_mask"]],"cyclonedds.idl.IdlStruct":[[5,2,1,"","deserialize"],[5,2,1,"","serialize"]],"cyclonedds.idl.IdlUnion":[[5,2,1,"","deserialize"],[5,3,1,"","discriminator"],[5,2,1,"","get"],[5,2,1,"","serialize"],[5,2,1,"","set"],[5,3,1,"","value"]],"cyclonedds.idl.annotations":[[5,5,1,"","appendable"],[5,5,1,"","autoid"],[5,5,1,"","bit_bound"],[5,5,1,"","cdrv0"],[5,5,1,"","default_literal"],[5,5,1,"","extensibility"],[5,5,1,"","final"],[5,5,1,"","key"],[5,5,1,"","keylist"],[5,5,1,"","member_hash_id"],[5,5,1,"","member_id"],[5,5,1,"","must_understand"],[5,5,1,"","mutable"],[5,5,1,"","nested"],[5,5,1,"","position"],[5,5,1,"","xcdrv2"]],"cyclonedds.idl.types":[[5,0,1,"","ValidUnionHolder"],[5,0,1,"","array"],[5,0,1,"","bounded_str"],[5,0,1,"","case"],[5,0,1,"","default"],[5,0,1,"","sequence"],[5,0,1,"","typedef"]],"cyclonedds.internal":[[6,0,1,"","DDS"],[6,0,1,"","SampleInfo"],[6,5,1,"","c_call"],[6,5,1,"","c_callable"],[6,0,1,"","dds_c_t"],[6,5,1,"","load_cyclonedds"]],"cyclonedds.internal.SampleInfo":[[6,1,1,"","instance_handle"],[6,1,1,"","instance_state"],[6,1,1,"","sample_state"],[6,1,1,"","source_timestamp"],[6,1,1,"","view_state"]],"cyclonedds.internal.dds_c_t":[[6,1,1,"","attach"],[6,1,1,"","data_representation_id"],[6,1,1,"","destination_order"],[6,1,1,"","domainid"],[6,1,1,"","durability"],[6,1,1,"","duration"],[6,1,1,"","entity"],[6,0,1,"","guid"],[6,1,1,"","history"],[6,0,1,"","inconsistent_topic_status"],[6,1,1,"","ingnorelocal"],[6,1,1,"","instance_handle"],[6,1,1,"","instance_state"],[6,1,1,"","listener_p"],[6,1,1,"","liveliness"],[6,0,1,"","liveliness_changed_status"],[6,0,1,"","liveliness_lost_status"],[6,0,1,"","offered_deadline_missed_status"],[6,0,1,"","offered_incompatible_qos_status"],[6,1,1,"","ownership"],[6,1,1,"","presentation_access_scope"],[6,0,1,"","publication_matched_status"],[6,1,1,"","qos_p"],[6,1,1,"","reliability"],[6,0,1,"","requested_deadline_missed_status"],[6,0,1,"","requested_incompatible_qos_status"],[6,1,1,"","returnv"],[6,0,1,"","sample_buffer"],[6,0,1,"","sample_info"],[6,0,1,"","sample_lost_status"],[6,0,1,"","sample_rejected_status"],[6,1,1,"","sample_state"],[6,0,1,"","subscription_matched_status"],[6,1,1,"","time"],[6,1,1,"","topic_descriptor_p"],[6,1,1,"","type_consistency"],[6,1,1,"","view_state"]],"cyclonedds.internal.dds_c_t.guid":[[6,2,1,"","as_python_guid"],[6,1,1,"","v"]],"cyclonedds.internal.dds_c_t.inconsistent_topic_status":[[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.liveliness_changed_status":[[6,1,1,"","alive_count"],[6,1,1,"","alive_count_change"],[6,1,1,"","last_publication_handle"],[6,1,1,"","not_alive_count"],[6,1,1,"","not_alive_count_change"]],"cyclonedds.internal.dds_c_t.liveliness_lost_status":[[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.offered_deadline_missed_status":[[6,1,1,"","last_instance_handle"],[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.offered_incompatible_qos_status":[[6,1,1,"","last_policy_id"],[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.publication_matched_status":[[6,1,1,"","current_count"],[6,1,1,"","current_count_change"],[6,1,1,"","last_subscription_handle"],[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.requested_deadline_missed_status":[[6,1,1,"","last_instance_handle"],[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.requested_incompatible_qos_status":[[6,1,1,"","last_policy_id"],[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.sample_buffer":[[6,1,1,"","buf"],[6,1,1,"","len"]],"cyclonedds.internal.dds_c_t.sample_info":[[6,1,1,"","absolute_generation_rank"],[6,1,1,"","disposed_generation_count"],[6,1,1,"","generation_rank"],[6,1,1,"","instance_handle"],[6,1,1,"","instance_state"],[6,1,1,"","no_writers_generation_count"],[6,1,1,"","publication_handle"],[6,1,1,"","sample_rank"],[6,1,1,"","sample_state"],[6,1,1,"","source_timestamp"],[6,1,1,"","valid_data"],[6,1,1,"","view_state"]],"cyclonedds.internal.dds_c_t.sample_lost_status":[[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.sample_rejected_status":[[6,1,1,"","last_instance_handle"],[6,1,1,"","last_reason"],[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.subscription_matched_status":[[6,1,1,"","current_count"],[6,1,1,"","current_count_change"],[6,1,1,"","last_publication_handle"],[6,1,1,"","total_count"],[6,1,1,"","total_count_change"]],"cyclonedds.pub":[[7,0,1,"","DataWriter"],[7,0,1,"","Publisher"]],"cyclonedds.pub.DataWriter":[[7,2,1,"","dispose"],[7,2,1,"","dispose_instance_handle"],[7,2,1,"","lookup_instance"],[7,2,1,"","register_instance"],[7,3,1,"","topic"],[7,2,1,"","unregister_instance"],[7,2,1,"","unregister_instance_handle"],[7,2,1,"","wait_for_acks"],[7,2,1,"","write"],[7,2,1,"","write_dispose"]],"cyclonedds.pub.Publisher":[[7,2,1,"","resume"],[7,2,1,"","suspend"],[7,2,1,"","wait_for_acks"]],"cyclonedds.sub":[[9,0,1,"","DataReader"],[9,0,1,"","Subscriber"]],"cyclonedds.sub.DataReader":[[9,2,1,"","lookup_instance"],[9,2,1,"","read"],[9,2,1,"","read_aiter"],[9,2,1,"","read_iter"],[9,2,1,"","read_next"],[9,2,1,"","read_one"],[9,2,1,"","take"],[9,2,1,"","take_aiter"],[9,2,1,"","take_iter"],[9,2,1,"","take_next"],[9,2,1,"","take_one"],[9,3,1,"","topic"],[9,2,1,"","wait_for_historical_data"]],"cyclonedds.sub.Subscriber":[[9,2,1,"","notify_readers"]],"cyclonedds.topic":[[10,0,1,"","Topic"]],"cyclonedds.topic.Topic":[[10,2,1,"","get_name"],[10,2,1,"","get_type_name"],[10,3,1,"","name"],[10,3,1,"","typename"]],"cyclonedds.util":[[11,5,1,"","duration"],[11,5,1,"","isgoodentity"]],"cyclonedds.util.timestamp":[[11,5,1,"","now"]]},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","module","Python module"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:property","4":"py:module","5":"py:function"},terms:{"0":[2,3,5,11,13,17,18,19],"0000ff":13,"02371001":17,"0c8d":17,"0cb8":17,"1":[2,5,8,9,13,17,18],"10":[2,8,11,13,17,18],"100":[8,18],"1000":18,"10000":17,"100000000":17,"11":[2,14,15],"11822753457071331301":17,"12":[2,13],"123":18,"13":2,"14":2,"14be":17,"1d681001":17,"1fe3":17,"2":[2,5,8,11,18],"20":[8,13,17,18],"200":8,"2000":8,"2021":5,"2022":5,"20a3000001c1":17,"2236347693610277994":17,"25":8,"256":10,"2709":17,"2e4d":17,"3":[2,5,13,14,15,17,18],"305c":17,"325a":17,"33":18,"350c1001":17,"4":[2,13,18],"420":18,"4428":17,"46f4000001c1":17,"48b3000001c1":17,"49db":17,"4edb":17,"5":[2,8,13,15,18],"52f100000102":17,"52f1000001c1":17,"53dd":17,"5468":17,"5513147631977453825":17,"5dc81001":17,"5fb900000102":17,"6":2,"64":13,"647f000001c1":17,"68a5":17,"7":[2,14,15],"712a":17,"713b1001":17,"75dc":17,"764e1001":17,"77b3":17,"7b68":17,"8":[2,13,18],"8251":17,"8ac9":17,"8e281001":17,"9":[2,13],"9223372036854775807":17,"926f":17,"9ce21001":17,"9f2a":17,"abstract":14,"boolean":[2,8,18],"byte":[5,8,13,18],"case":[5,13,18],"class":[2,3,5,6,7,8,9,10,13,15],"default":[2,5,11,13,17,18],"do":[2,8,13,18],"enum":[5,13],"final":[5,15],"float":11,"function":[2,6,7,8,11,13],"import":[13,15,17,19],"int":[2,3,5,6,7,8,9,11,13],"long":[17,18],"new":[2,17],"public":[5,17,18],"return":[2,3,5,6,7,8,9,10,11,13],"static":[2,8],"switch":13,"transient":[8,17,18],"true":[2,5,8,17,18],"try":[2,18],"while":14,A:[2,3,8,19],And:[15,17,18],As:[6,13,19],At:[13,15],But:17,By:[2,13,17,18],For:[2,13,15,17,18],If:[2,8,9,13,15,17,18],In:[11,13,14,17,18],It:[2,3,8,14,18],Not:[2,13],OR:5,On:3,One:2,Such:16,The:[2,3,6,7,8,9,11,13,14,15,17,18,19],Then:17,There:[13,16,17,18],These:[13,14,15],To:[8,13,15,17,18],With:15,__annotations__:13,__idl_annotations__:13,__idl_field_annotations__:13,__init__:[2,8],__post_init__:13,_condit:2,_s:10,_support:5,_t:[7,9],_ti:5,_tib:5,_tiu:5,a889:17,ab06000001c1:17,abl:[13,18],about:[6,14,15],abov:17,absolut:2,absolute_generation_rank:6,abstim:2,accept:2,access:[2,8,13,14],accompani:5,accord:[2,17,18],achiev:13,acknowledg:7,activ:[2,13,17],actual:[8,15],ad00:17,ad:2,adb500000102:17,adb5000001c1:17,add:[2,13,15],addit:[2,15,17,18],aef6:17,affect:2,after:[2,17,18],again:[2,8,13,15],alia:[6,8],aliv:[2,17],alive_count:6,alive_count_chang:6,all:[2,3,6,7,8,9,13,14,17,18,19],allow:[3,8,13,15,17,19],allowtypecoercion:8,almost:[2,13,14,15],alpha:14,alreadi:[2,13,17],also:[7,13,17,18],alwai:[11,13],amount:[2,5],an:[2,3,5,7,8,9,11,13,15,17,18,19],ani:[2,3,5,8,9,13,14,15,18,19],annot:[6,9,14],announc:15,anoth:[8,17],answer:14,anystr:10,anyth:15,api:[2,9,15,19],append:5,appli:[2,13,17,18],applic:[2,3,8,13,14,18],apply_to:5,appropri:15,aquir:2,ar:[2,3,5,8,9,11,13,14,15,16,17,18],arbitrari:18,arg:5,argument:[13,17,18],argument_typ:6,arrai:[5,13,18],as_mask:5,as_python_guid:6,asdict:8,asid:13,ask:14,assert:13,associ:[2,6,7],async:[2,9],asyncgener:9,asynchron:2,atom:2,attach:[2,6],attempt:2,attribut:9,auto:13,autodispos:[8,17,18],autoid:5,autoid_typ:5,automat:[8,13,17,18],autopurge_disposed_samples_delai:[8,17,18],autopurge_nowriter_samples_delai:[8,17,18],avail:[2,5,13,14,18],avoid:2,awai:2,b:[8,17,18],backend:13,bad:2,bar:13,base:[2,3,5,6,7,8,9,10,13],basepolici:8,basic:13,baz:13,bb82:17,becaus:2,becom:2,been:[2,17],befor:[2,13],beforehand:13,begin:2,begin_coher:2,behav:2,being:[2,17],belong:2,besid:17,best:18,besteffort:[8,17,18],better:[14,16,17],between:[8,18],binari:15,binaryproperti:8,bind:14,bit:[2,13],bit_bound:5,block:[2,7,9],blue:13,bool:[2,5,6,7,8,9,11],both:13,bound:13,bounded_str:[5,13],briefli:13,bsd:5,budget:[8,17,18],buf:6,buffer:5,bug:14,build:[2,13,15],built:[8,13,14,15,17],builtin:[0,13,14],builtintopicdcpsparticip:17,builtintopicdcpspubl:17,builtintopicsubscript:17,bunch:12,byreceptiontimestamp:[8,17,18],bysourcetimestamp:[8,18],c040:17,c5e3:17,c:[2,5,6,13,14,15],c_call:6,c_callabl:6,c_int:6,c_long:6,c_short:6,c_uint:6,c_void_p:6,ca0b:17,ca6b:17,cad5000001c1:17,call:[2,6,7,9],callabl:[2,5],callback:2,came:13,can:[2,8,13,15,16,17,18],cannot:15,care:14,caus:2,caveat:15,cd:15,cdll:6,cdrv0:5,central:[3,8],certain:18,cfunctyp:6,chang:[2,8,17,18],changelog:14,check:[2,8,11,13,17,18],children:2,choos:[17,18],cl:[5,13],classmethod:[2,5,8,13],claus:5,cleanup_delai:[8,17,18],client:13,clone:15,cloud:13,cmake:13,code:[2,9,13],coher:2,coherent_access:[8,17,18],coin:13,collect:[2,8],colon:18,colourmap:13,com:15,combin:19,come:15,comma:18,command:[14,15,16],common:6,commun:19,comparison:8,compat:[13,18],compil:15,complet:17,complex:15,complic:13,compon:15,concept:19,condit:[2,9,14],config:[3,19],configur:[2,3,6,15,18],confirm:2,connect:19,consid:2,consist:8,constant:[2,13],construct:[2,8,13],contain:[2,6,8,11,13,15],content:[8,13],context:13,control:13,convert:[2,6,8,9],copi:2,copy_to:2,copyright:5,core:[0,3,7,9,10,14],corsaro:13,could:2,coupl:15,cours:13,creat:[2,13,17],creation:[15,19],credenti:2,ctype:6,current:[2,11,13,15,17],current_count:6,current_count_chang:6,custom:[17,18],cyclon:[6,13,14,15],cyclonedd:[2,3,5,6,7,8,9,10,11,13,15,16,17,19],cyclonedds_hom:15,d195000001c1:17,d9da:17,da531001:17,dai:[11,18],data:[2,5,6,7,8,9,13,17],data_representation_id:6,data_typ:10,dataavail:2,dataclass:[13,15],dataonread:2,dataread:[2,9,15,18],datarepresent:8,datastructur:15,datatyp:[14,15,18],datawrit:[2,7,15,18],dcpsparticip:17,dcpspublic:17,dcpssubscript:17,dd:[2,3,6,9,11,13,14,17,18,19],dds_c_t:[2,6],dds_duration_t:11,dds_retcode_:2,dds_retcode_already_delet:2,dds_retcode_bad_paramet:2,dds_retcode_error:2,dds_retcode_illegal_oper:2,dds_retcode_immutable_polici:2,dds_retcode_inconsistent_polici:2,dds_retcode_no_data:2,dds_retcode_not_allowed_by_secur:2,dds_retcode_not_en:2,dds_retcode_ok:2,dds_retcode_out_of_resourc:2,dds_retcode_precondition_not_met:2,dds_retcode_timeout:2,dds_retcode_unsupport:2,dds_time_t:11,ddsexcept:[2,9],ddsl:[14,16],ddsls_data:17,ddsstatu:2,de:13,deadlin:[8,17,18],deadlock:2,debug:[8,13],decor:[6,13],default_liter:5,defin:[13,15,17,18],delet:2,delv:13,depend:[2,15],depth:[8,14,17,18],describ:8,descript:[2,8,13],deseri:[5,13],design:14,desir:18,destination_ord:6,destinationord:[8,17,18],destruct:19,detach:2,detail:[2,13],detect:18,determin:13,dev:15,diamond:13,dict:[8,13],dictionari:[8,17],did:15,differ:13,differenti:13,direct:13,directli:[2,13,15],directori:[15,17],dirti:14,disallowtypecoercion:8,discrimin:[5,13],discriminator_valu:5,discuss:14,disk:8,dispatch:2,displai:17,dispos:[2,7,17],dispose_instance_handl:7,disposed_generation_count:6,distribut:5,divid:17,dll:6,doc:15,document:[2,5,13,15,19],doe:[2,8,9,15],doesn:2,domain:[0,2,7,9,10,14,15,19],domain_id:[2,3],domain_particip:[2,7,9,10],domainid:6,domainparticip:[2,3,7,9,10,15,17,19],don:[2,15],doubl:13,down:17,dp:[17,19],durabilityservic:[8,17,18],durabl:[6,8,17,18],durat:[2,6,7,8,11,15,18],dure:13,dynam:[0,6,14],e010:17,e15c:17,e4921001:17,e:18,easi:[8,14,15],east:13,eclips:[5,15],ecosystem:13,edl:5,ee0900000107:17,ee09000001c1:17,effort:18,either:[7,13],elaps:7,els:7,elsewher:11,emploi:13,empti:2,enabl:[2,6,17],encod:13,end:[2,18,19],end_coher:2,endian:5,entit:18,entiti:[2,3,6,7,8,9,10,11,16,17],entity_id:2,entitynam:8,entityqo:18,entri:[14,15],entrypoint:3,enumer:5,environ:15,epl:5,epoch:[7,11],eqo:18,equal:13,equival:13,error:[2,9,13,15],error_message_map:2,etc:[2,18],even:13,event:[2,17],eventu:[13,14],everi:9,exact:13,exactli:9,exampl:[2,8,11,13,14,17,18],except:[2,9,11,13,15],exclus:[8,18],execut:2,exhaust:13,exist:[2,13,18],exit:[15,17,18],expect:2,experiment:14,expir:[8,9],explain:[17,18],explicitli:2,express:[11,13,15],extens:[5,19],extensibility_typ:5,f:[8,15,17,18],fact:2,factori:13,fail:2,fals:[2,8,11,17,18],familiar:13,featur:[2,15],few:15,ff0000:13,field:[2,13,17],file:13,filenam:[17,18],filter:2,filter_fn:8,filter_tim:[8,17,18],find:[2,13],fine:13,first:[7,14],first_steps_with_python:14,five:15,float128:13,float32:13,float64:13,follow:[13,17,18],foo:13,form:2,format:[2,7,8,11,17,18],freed:2,freedom:18,frequent:14,from:[2,7,8,9,11,13,15,17,18,19],from_mask:5,fromdict:8,fruzzi:13,full:[8,13,17],fulli:[8,14],further:[17,18],furthermor:2,futur:[2,18],g:18,gain:13,garbag:2,gener:[7,8,9,10,13,15],generation_rank:6,get:[2,3,5,10,13,15,17],get_children:2,get_dataread:2,get_domain_id:2,get_ent:2,get_guid:2,get_instance_handl:2,get_listen:2,get_nam:10,get_par:2,get_particip:[2,3],get_publish:2,get_qo:2,get_status_chang:2,get_status_mask:2,get_subscrib:2,get_type_nam:10,gil:2,git:15,github:[14,15],given:[2,7],global:[2,17],go:[13,14,15],goe:2,good:11,group:[8,17,18],groupdata:[8,18],guarante:[3,8],guardcondit:2,guid:[2,6,17],h:[17,18],ha:[2,13,15,17,18],had:17,hand:14,handl:[2,6,7,17],happen:[2,7,13,17,19],hard:15,has_head:5,hassl:14,have:[2,11,13,14,15,17,18],hello:[8,18],helloword:18,helloworld:18,help:[16,17,18],helper:[8,11,13],here:[13,14,17,19],hi:15,hidden:13,higher:15,hint:[13,14],histori:[6,8,17,18],hood:[13,14,15],host:8,hour:11,how:[8,17,18,19],howev:[13,15,17,18],http:[5,15],human:[2,7,8,11],hurrai:15,hurt:2,i:[8,17],iceoryx:15,id:[2,3,13,14],identifi:[2,5,17,19],idl:[0,14,15],idlbitmask:5,idlc:13,idlenum:5,idlpi:13,idlstruct:[5,13,15],idlunion:[5,13],ignor:[2,18],ignoreloc:[8,17,18],immut:[2,8,13],implement:13,inapplicableqoswarn:18,incompatibleqoswarn:18,inconsist:2,inconsistent_topic_statu:[2,6],inconsistenttop:2,indefinit:[17,18],index:14,indic:[2,13,17,18],infin:2,infinit:11,inform:[6,13,14,17],ingnoreloc:6,inherit:[8,13],initi:[2,8,13],input:15,insensit:18,insid:[2,13],inspect:[8,13],instal:13,instanc:[2,6,7,8,13,17,18],instance_handl:[2,6,9],instance_st:6,instancest:[2,6,7],instanti:[2,8],instead:17,insuffici:2,int128:13,int16:13,int32:13,int64:13,int8:13,int_arrai:18,intarrai:18,integ:[2,3,8,18,19],integr:13,intend:13,interact:13,interest:9,interfer:19,intern:[0,2,11,14],interoper:13,interrupt:[17,18],introduc:13,introduct:14,intsequ:18,invalid:2,invok:2,is_attach:2,isgoodent:11,issu:14,item:13,iter:[8,9],its:[2,7,19],j:17,join:15,json:18,jump:13,just:[2,13,15,17],keep:18,keepal:[8,18],keeplast:[8,17,18],kei:[5,6,8,13,17],keylist:[5,13],keyval:18,kind:2,know:17,known:[13,15],kwarg:[2,5,8],l:[13,18],lack:2,lambda:2,languag:13,last:[2,18],last_instance_handl:6,last_policy_id:6,last_publication_handl:6,last_reason:6,last_subscription_handl:6,latenc:8,latencybudget:[2,8,17,18],ld_library_path:13,learn:14,lease_dur:[8,17,18],legal:5,len:[6,8],length:[5,13],let:[11,15],level:[8,14],leverag:[13,15],librari:[6,13,15],licens:5,lifespan:[8,17,18],lifetim:2,like:[13,17,18],limit:[2,13,17,18],line:[14,16],link:[2,12,15],list:[2,3,5,8,9],list_of_kei:5,listen:[2,3,7,9,10,14,15],listener_p:6,live:11,liveli:[2,6,8,17,18],liveliness_changed_statu:[2,6],liveliness_lost_statu:[2,6],livelinesschang:2,livelinesslost:2,load:[6,8,15],load_cyclonedd:6,local:3,locat:[13,15],logic:3,longer:17,look:[13,14,17,18],lookup_inst:[7,9],loop:2,love:14,m:15,machineri:13,made:[2,5],magic:6,mai:[2,9,18],make:[2,6,13,15],manag:[14,15],manual:[2,13,15,18],manualbyparticip:[8,18],manualbytop:[8,18],map:13,mark:7,mask:[2,5],match:[7,8],materi:5,max:8,max_blocking_tim:[8,17,18],max_inst:[8,17,18],max_length:5,max_sampl:[8,17,18],max_samples_per_inst:[8,17,18],max_siz:10,maxfournumb:13,maximum:[2,7,9,13],maxlen:13,mean:[2,13,15,17],meant:6,mechan:[13,15],member:[6,13],member_hash_id:5,member_id:5,memori:[2,14,15],merg:2,messag:[13,15,17,18],messagetop:17,met:2,method:[2,6,9,13],microsecond:11,might:[13,14],millisecond:11,minimum:8,minut:[8,11,15,18],mix:3,modern:14,modif:2,modifi:[2,8,18],modul:[6,11,13,15],monitor:[16,17],more:[2,3,9,13,14],most:13,msg:[2,15],multipl:[9,15,18,19],must:13,must_understand:5,mutabl:5,my:13,n:[9,13,18],name:[5,6,8,10,13,15,17,18],nanosecond:[2,6,7,8,11],ncaptain:13,necessarili:15,need:[2,8,13,15,17,18],nest:[5,13],network:[3,13,15,19],never:[2,3,8,11,13],newli:[2,8],next:2,nice:13,no_writers_generation_count:6,non:[2,9,13,15],none:[2,3,5,6,7,8,9,10],normal:13,north:13,not_alive_count:6,not_alive_count_chang:6,notalivedispos:[2,7],notalivenowrit:2,note:[2,8,13],noth:[3,8,17,18],notify_read:9,notread:2,now:[11,13,15,18],nsign:13,number:[2,7,8,9,11,13,18],o:18,object:[2,5,8,11,14],obtain:8,occur:[2,17],occurr:2,off:18,offer:18,offered_deadline_missed_statu:[2,6],offered_incompatible_qos_statu:[2,6],offereddeadlinemiss:2,offeredincompatibleqo:2,offici:13,old:[2,17],omg:[13,15],on_data_avail:2,on_data_on_read:2,on_inconsistent_top:2,on_liveliness_chang:2,on_liveliness_lost:2,on_offered_deadline_miss:2,on_offered_incompatible_qo:2,on_publication_match:2,on_requested_deadline_miss:2,on_requested_incompatible_qo:2,on_sample_lost:2,on_sample_reject:2,on_subscription_match:2,onc:[2,9],one:[2,9,13,17],onli:[2,6,8,9,11,13,17,18],op:2,oper:[2,7],opposit:2,optim:15,option:[2,3,5,7,8,9,10,11,15,17,18],ordered_access:[8,17,18],org:5,orient:14,other:[2,3,5,13,15,17,18,19],otherwis:11,our:[13,14,15],out:[2,18],output:18,outsid:13,over:[8,13,15],overlap:8,overrid:[2,15],overwritten:[2,8],ownership:[6,8,17,18],ownershipstrength:[2,8,17,18],p1:13,p2:13,p:[8,13],packag:[6,13,15],page:14,paramet:[2,3,5,6,7,8,9,10,11,19],parent:[2,13],part:[3,13,14,17],particip:[2,3,8,14,15,18],participant_instance_handl:17,participant_kei:17,particular:18,partit:[8,18],partition_:8,partition_a:8,partition_b:8,partition_c:8,pass:[2,8,13],path:[13,15],per:[8,15],perfect:13,perform:[2,15],permiss:15,persist:[8,18],php:5,piec:15,pip:15,pipenv:15,place:11,plan:13,platform:[6,15],pleas:2,poetri:15,point2d:13,point:[13,14],polici:[2,8,17,18],policytyp:8,pop:15,posit:5,possibl:[6,13],power:15,pragma:13,pre:15,precondit:2,prefix:13,presenc:15,present:8,presentation_access_scop:6,presentationaccessscop:[8,17,18],preserv:13,previous:2,print:[2,13,15,17,18],prioriti:[8,17,18],problem:13,process:[2,8,18],program:[2,5],project:13,properti:[2,5,7,8,9,10,17,18],provid:[2,14,17,18],provision:15,proxi:2,pub:[0,2,14,15],publication_handl:6,publication_matched_statu:[2,6],publicationmatch:2,publicli:8,publish:[2,7,9,14,15,16,17,18],publisher_or_particip:7,pubsub:[14,16],pubsub_data:18,pure:13,purpos:13,put:[13,15],py:13,pyenv:15,pypi:[14,15],pytest:15,python:[2,6,8],q:[13,18],qo:[2,3,7,8,9,10,14,17],qos_p:6,qose:17,qoshelp:18,qoshowto:8,qualiti:17,queri:9,querycondit:[2,9],question:14,queue:9,quirk:14,r:[17,18],rais:[2,8,9,11],rang:8,raw:13,re:17,read:[2,9],read_ait:9,read_it:9,read_next:9,read_on:9,read_statu:2,readabl:[2,7,8,11],readcondit:[2,9],reader:[2,7,15,17,18],readerdatalifecycl:[8,17,18],reason:[13,15],receiv:[2,7,9,15],recommend:[8,15],red:13,ref:2,refer:[2,6,13],reflect:8,register_inst:7,registr:7,reject:2,rel:8,relat:6,reliabl:[6,7,8,17,18],remain:2,remov:[2,9],replac:2,report:14,repositori:14,repres:[3,8,10,18,19],represent:13,request:18,requested_deadline_missed_statu:[2,6],requested_incompatible_qos_statu:[2,6],requesteddeadlinemiss:2,requestedincompatibleqo:2,requir:[13,15,18],reset:[2,9],resid:2,resourc:[2,14],resourcelimit:[8,17,18],respect:[2,17,18],result:[13,17,18],resum:7,retain:2,retriev:[2,8,13],return_typ:6,returnv:6,rich:13,right:2,root:[3,13],run:[14,15,17,18,19],runtim:[13,15],runtyp:13,rxo:18,s:[2,7,8,9,13,14,15,17,18],same:[2,8,9,13,15,17],sampl:[2,6,7,8,9,17,18],sample_buff:6,sample_info:[6,9],sample_lost_statu:[2,6],sample_rank:6,sample_rejected_statu:[2,6],sample_st:6,sampleinfo:6,samplelost:2,samplereject:2,samplest:[2,6],satisfi:9,scenario:13,scikit:13,scope:[2,8],script:[15,17],search:14,second:[8,11,15,17,18],secondari:15,section:[17,18],secur:15,see:[11,13,15,17,18],segfault:2,select:[9,17,18],self:2,send:15,sens:13,separ:[3,18],seq:18,sequenc:[5,8,13,18],serial:5,serializ:13,serv:3,server:15,servic:17,set:[2,3,5,7,8,15,17,18,19],set_listen:2,set_on_data_avail:2,set_on_data_on_read:2,set_on_inconsistent_top:2,set_on_liveliness_chang:2,set_on_liveliness_lost:2,set_on_offered_deadline_miss:2,set_on_offered_incompatible_qo:2,set_on_publication_match:2,set_on_requested_deadline_miss:2,set_on_requested_incompatible_qo:2,set_on_sample_lost:2,set_on_sample_reject:2,set_on_subscription_match:2,set_qo:2,set_status_mask:2,set_trigg:2,sever:[2,13,15,17,18],share:[8,15,17,18],shortcut:9,should:[2,8,13,15,19],shouldn:2,show:[17,18],shut:17,similar:7,simpl:[15,16],simpli:[15,18],sinc:[2,7,11,13,15,17],singl:[2,15,19],skill:14,slightli:13,small:17,smallpoint2d:13,so:[2,9,13,18],solut:13,some:[2,11,14,16,18,19],someth:[2,8,14],sometim:[17,18],soon:13,sort:8,sourc:[2,3,5,6,7,8,9,10,11,15],source_timestamp:[6,7],south:13,space:18,spdx:5,special:13,specif:[2,6,15,17,18],specifi:[7,8,13,17,18],sphinx:15,stai:8,standard:[13,15],start:[2,15,17,18,19],startup:18,state:[2,18],statu:2,status_mask:2,step:[13,14,15],steps_:13,steps_n:13,steps_w:13,still:[2,13],stop:[9,17,18],store:[8,13],str:[2,3,5,8,10,13,15,18],strarrai:18,strength:[8,17,18],string:[2,8,18],strsequenc:18,struct:13,structur:6,style:13,sub:[0,2,14,15],submodul:13,subpackag:13,subscrib:[2,9,14,16,17,18],subscriber_or_particip:9,subscript:[17,18],subscription_matched_statu:[2,6],subscriptionmatch:2,subsequ:7,subtyp:5,success:2,successfulli:18,suffic:13,suggest:6,suppli:[2,9],support:[8,13,14,15,18],suspend:7,synchron:2,syntax:13,system:[2,13,15,16,17,18,19],t:[2,5,15,17,18],tactic:13,take:[2,7,9,13,14,15],take_ait:9,take_it:[9,15],take_next:9,take_on:9,take_statu:2,talk:15,technolog:5,tell:15,term:5,termin:[15,17,18],test:[16,17,18],testsuit:15,testtop:17,text:15,textual:13,than:[2,3,9,17,18],thei:[2,11,13,17],them:[8,9,13,15],therefor:13,thi:[2,5,6,7,8,11,13,15,17,18,19],think:15,those:8,thread:[2,7],threenumb:13,through:[2,14,19],thrown:2,thu:[8,13],ti:5,tibe:5,time:[2,6,8,9,11,13,14,17,18],timebasedfilt:[8,17,18],timeout:[2,7,9,15],timestamp:[7,8,11],tini:2,todo:[2,8],togeth:18,tool:[13,15],topic:[0,2,6,7,8,9,14,15],topic_descriptor_p:6,topic_nam:[10,17],topicdata:[8,18],total:[2,8],total_count:6,total_count_chang:6,track:2,tracker:14,transientloc:[8,18],transportprior:[8,17,18],treasuremap:13,treat:8,trigger:2,troubl:14,tupl:8,turn:[2,13],two:[8,17],type1:13,type2:13,type:[2,3,6,7,8,9,10,11,14,15,17,18],type_consist:6,type_nam:17,typeconsist:8,typedef:5,typeerror:8,typenam:10,typic:11,uint128:13,uint16:13,uint32:13,uint64:13,uint8:13,unblock:2,unbound:13,unchang:2,under:[5,13,14,15],underli:2,union:[6,7,8,9],uniqu:[2,17],unix:[6,7,11],unlik:[2,13],unread:2,unregist:7,unregister_inst:7,unregister_instance_handl:7,unsupport:2,until:[7,17,18],untrigg:2,up:[13,15,17,18],updat:2,us:[2,6,7,8,9,11,13,14,15,16,17,18,19],usag:[2,14],use_cdrv0_represent:8,use_version_2:5,use_xcdrv2_represent:8,user:[15,18],userdata:[8,17,18],utf:13,util:[0,14,15],uuid:[2,6],v10:5,v1:13,v:[5,6,11,17],valid:[2,11],valid_data:6,validunionhold:5,valu:[2,5,6,8,13,17,18],valueerror:8,variabl:15,ve:17,vehicl:17,veri:13,versatil:13,version:[8,15],via:[14,15],view:[2,17,18],view_stat:6,viewstat:[2,6],virtual:15,volatil:[8,17,18],w:17,wa:[2,6],wai:[2,13,18],wait:[2,7],wait_async:2,wait_for_ack:7,wait_for_historical_data:9,wait_until:2,waitset:[2,14],walkinstruct:13,want:[2,13,14,15,17,18],warn:18,we:[2,13,14,15],week:11,were:2,west:13,wether:2,what:[2,13,15,17,18,19],wheel:15,when:[2,8,13,15,17,18],where:[2,13],whether:[2,11,17],which:[2,5,9,13,15,17,18],whichev:7,why:13,wiht:7,wish:[2,13,15],within:[8,13,18,19],without:[2,19],won:[2,18],work:[2,8,14],world:[8,15],worri:15,would:[2,8,11,13,15],wrap:15,write:[2,7,8,11,13,15],write_dispos:7,writer:[2,7,15,17,18],writerdatalifecycl:[8,17,18],written:[6,7,17,18],wubbl:13,www:5,x:[8,13],xcdr:13,xcdrv2:5,xtype:18,y:[8,13],ye:18,you:[2,8,9,11,13,14,15,16,17,18,19],your:[2,3,13,14,16,17,18,19],your_fil:13,zettascal:5},titles:["API","builtin","core","domain","dynamic","idl","internal","pub","core","sub","topic","util","General information about DDS","Working with idl","CycloneDDS Python","Introduction","Tools","Command line tool: ddsls","Command line tool: pubsub","Usage"],titleterms:{"float":13,about:12,annot:[5,13],api:[0,14],applic:15,builtin:1,command:[17,18],compil:13,comprehend:17,core:[2,8],cyclonedd:14,data:18,datatyp:13,dd:[12,15],ddsl:17,dictionari:13,document:14,domain:[3,17],dynam:4,entiti:18,featur:14,file:[17,18],first:15,gener:12,get:14,help:14,id:17,idl:[5,13],inapplic:18,incompat:18,inform:12,instal:15,integ:13,intern:6,introduct:[15,17,18],json:17,line:[17,18],list:13,mode:17,object:13,other:14,output:17,particip:[17,19],prerequisit:15,pub:7,pubsub:18,python:[13,14,15],qo:18,read:18,runtim:[17,18],serial:13,start:14,string:13,sub:9,tool:[14,16,17,18],topic:[10,17,18],type:[5,13],union:13,usag:[17,18,19],util:11,verbos:17,watch:17,work:13,write:[17,18],your:15}})