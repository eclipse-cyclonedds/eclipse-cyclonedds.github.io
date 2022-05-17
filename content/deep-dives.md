# *Deep Dive* topics for Cyclone DDS

Deeply hidden in Cyclone's Github, there's a wealth of information and explanations on the inner-workings of Cyclone DDS.
Below you'll find an overview of these *DEEP DIVE* topics that both extend as well as typically exceed a regular FAQ.

Often these topics are work-in-progress where the 'remarks' section will provide some details and/or questions


### TOPIC: on handling user-data and its relationship with built-in-topics
#### reference [cyclonedds/issues/54](https://github.com/eclipse-cyclonedds/cyclonedds/issues/54)
#### remarks: 
- an evolving topic also w.r.t. completeness and representation of built-in topic support (including suggested API's for getting discovered remote-entity data similar to get_discovered_participant/get_matched_publication_data)
- also a discussion on OMG vs. Cyclone DDS (C-)API and their respective usability
		

### TOPIC: a discussion leading into a new set of reader/writer QoS-settings w.r.t. ignoring data from entities in the same participant
#### Reference: [cyclonedds/issues/78](https://github.com/eclipse-cyclonedds/cyclonedds/issues/78)
#### remarks: 
- most likely also related to the ignore_participant() API


### TOPIC a discussion on how to handle QoS-changes and related specification flaws (esp. w.r.t. non-volatile data)
#### reference: [cyclonedds/issues/63](https://github.com/eclipse-cyclonedds/cyclonedds/issues/63)
#### remarks:
- Q: is there a plan/timeline to exploit (wire-level) in-line QoS to (at least) support (interoperable) writer-side QoS-changes ?
- Q: are non-RxO (including user_data) and 'partition' QoS-changes 'at runtime' allowed already (as suggested on ticket #63)(as it would imply processing new SPDP/SEDP discovery messages) ?
- Q: was there any progress for specifically the *user_data* w.r.t. a proper implementation where the *user data* part of the QoS struct in the participant can be updated ?


### TOPIC: impact of reader-creation time relative to writer-discovery time
#### reference: [cyclonedds/issues/83](https://github.com/eclipse-cyclonedds/cyclonedds/issues/83)
#### remarks:
- this might be a non-issue right now
- yet there was a mentioning of some 'edge-usecases' for which the fix wasn't yet tested ..


### TOPIC: dealing with multicast over loopback
#### reference: [cyclonedds/issues/104](https://github.com/eclipse-cyclonedds/cyclonedds/issues/104)
#### remarks: 
- a still worthwhile topic to be mentioned/discussed 
- also noting that having to set 'internal' configurations such as a 'AssumeMulticastCapable' interface-list is perhaps less than ideal..


### TOPIC: on how discovery works in CycloneDDS (SPDP to discover participants with their built-in readers/writers feeding into SEDP endpoint discovery of non-built-in writers/readers)
#### reference: [cyclonedds/issues/119](https://github.com/eclipse-cyclonedds/cyclonedds/issues/119)
#### remarks: 
- explains how the WHC plays a role in the transient_local behavior of discovering bilt-in readers/writers .. esp as typically (for *normal* writers) sizing of non-volatile cash is 'independent' from an actual WHC and is drivern by the topic-level QoS
- also a nice explanation on how heartbeat-data conveys the availability of such non-volatile data to a (starting)reader so it can request data regardless of how the connection came to existence
- and furthermore explains how to recognize/interpret a set of tracing messages related to configuration-used, SPDP data, port-pairs associated with discovered participants, GUIDS that indicate looped-back data, etc.) including an actual log-assessment
- interesting aspect here is that an issue was identified, likely on some embedded platform that exposed rather strange/unexplained behavior but where some suggestions for further analysis weren't followed-up
- Note that also [cyclonedds/issues/337](https://github.com/eclipse-cyclonedds/cyclonedds/issues/337) addresses some of the mechanics about what 'historical data' in a writer is available (as well as 'advertised' in its '*firstSN*' heartbeat section )
- Note that this also opened a discussion on spec-ambiguities w.r.t. what available (historical/durable) data to advertise where Cyclone basically *implements a 3-way handshake like TCP does* quoting Erik Boasson)


### TOPIC: one (of multiple) related to performance, and in this case both a bug in acknack timing (time-out conversion to ms) as well as triggers some better configurability of compile-time vs. run-time (expensive-)assertions
#### reference: [cyclonedds/issues/125](https://github.com/eclipse-cyclonedds/cyclonedds/issues/125)
#### remarks: 
- also points to a (still open) issue (#99 on dynamic memory usage)


### TOPIC: a good write-up on how data-paths for historical (transient-local and/or transient) and live data-path are different (e.g. have separate history sizes & overwrite-behavior) and how that impacts (observable) behavior
#### reference: [cyclonedds/issues/146](https://github.com/eclipse-cyclonedds/cyclonedds/issues/146)
#### remarks: 
- noting that 'double-delivery' is fixed for multiple use-cases/issues (#146 and #165)


### TOPIC: a 'fundamental' discussion on data-lifecycle as it relates to (default enabled) auto-dispose-unregistered-instances QoS
#### reference: [cyclonedds/issues/148](https://github.com/eclipse-cyclonedds/cyclonedds/issues/148)
#### remarks:
- related to potential inconsistent systems and the advice to properly distinguish between unregistering (as an administrative task) and disposing (as a *data-lifecycle-management* task)
- also pointing to a common issue that when taking samples one-at-a-time following 'data available' events, one might miss samples as there might be more arrived data/samples before triggering


### TOPIC: questions on writer_data_lifecycle properly addressed with a nice write-up on lifecycle and how registrations and instance play a role in that
#### reference: [cyclonedds/issues/156](https://github.com/eclipse-cyclonedds/cyclonedds/issues/156)
#### remarks: 
- it also addresses *unregister* versus *dispose* also a commonly misunderstood difference (of handling application-resources versus data-lifecycle) especially when used i.c.w. non-volatile data


### TOPIC: on strange behavior when using the *MulticastRecvNetworkInterfaceAddress* option (when setting it to 'all'
#### reference: [cyclonedds/issues/157](https://github.com/eclipse-cyclonedds/cyclonedds/issues/157)
#### remarks: 
- this could be part of a bigger discussion w.r.t. handling multiple interfaces with y/n multicast capabilities as well as exploiting multicast-routing intricacies


### TOPIC: issues with data-delivery right after publisher is matched
#### reference: [cyclonedds/issues/165](https://github.com/eclipse-cyclonedds/cyclonedds/issues/165) and [cyclonedds/pull/188](https://github.com/eclipse-cyclonedds/cyclonedds/pull/188)
#### remarks:
- the fix addresses a *not-incorrect-yet-pretty-non-intuitive* behavior although it exploits vendor_id to select the correct/intuitive retransmit-behavior
- it also assures that historical transient-local data is received 'in-order' (and 'in-line' with the spec)


### TOPIC: on static-memory allocation and how it would impact transmit-side, receive-path, backgroun-activities, discovery and some other/assorted impact-areas
#### reference: [cyclonedds/issues/99](https://github.com/eclipse-cyclonedds/cyclonedds/issues/99)
#### remarks: 
- it  argues that as a first step, sample-representation, WHC/RHC implemenetation, 'radmin' replacement and 'global' replacement of malloc/free by type-specific allocators with pluggable implementation
- once/if we'd consider certification, this will undoubtedly be followed-up upon


### TOPIC:  a motivation and description of an extended API to retrieve the *instance_handle* from a read- or query-condition (rather than just from a reader)
#### reference: [cyclonedds/issues/213](https://github.com/eclipse-cyclonedds/cyclonedds/issues/213) and [cyclonedds/pull/214](https://github.com/eclipse-cyclonedds/cyclonedds/pull/214)
#### remarks: 
- note that its (still) invalid to assume that *instance_handle* obtained by *register_instance()* would be valid in a reader-context (also as that instance might not even have been written)
- note also that a lot of this doesn't apply for built-in topics that although with similar API have vastly different implementation to 'manifest' actual instances of such 'pseudo-topics', at least as I understand it
- the discussion also mentions equality of *same-keys-yet-in-different-topics* that would come-in 'handy' for equi-joins (i.e. multi-topics which would still be a nice and unique feature to have for Cyclone DDS)


### TOPIC:  description of the new feature of being able to define entities (e.g. a *waitset*) 'above' the participant where such a waitset will now accept entities on 'same *participant*', 'same *domain*' or '*any*' level of entity
#### reference: [cyclonedds/issues/205](https://github.com/eclipse-cyclonedds/cyclonedds/issues/205) and [cyclonedds/pull/246](https://github.com/eclipse-cyclonedds/cyclonedds/pull/246)
#### remarks: 
- it also implies a behavioral change where the parent of a participant is no longer *DDS_HANDLE_NIL* but instead a domain handle
- and also impacts the behavior of 'implicit' entities (that are deleted automatically on deletion of the last remaining child entity)
- Q: the PR also addresses a (somewhat related) feature of allowing user-supplied ReaderHistoryCache (RHC) that a ROS2 RMW-layer could exploit for triggering DATA_AVAILABLE for multiple readers .. not sure of its potential beyond ROS2 ?


### TOPIC:  a discussion on data-model granularity w.r.t. topics/partitions/instance/samples that also introduces *network_partitions* to aid in making more efficient use of multicast-addresses
#### reference: [cyclonedds/issues/373](https://github.com/eclipse-cyclonedds/cyclonedds/issues/373)
#### remarks: 
- note that it also touches upon a earlier POC (yet documented in config/options manual) where a pool of (IPv4) multicast-addresses is exploited with dynamic selection of the relevant addresses in such a pool/set


### TOPIC:  driven by a question on watermarks, here's useful information related to memory-usage of Cyclone as it relates to the *history* and *durability* QoS
#### reference: [cyclonedds/issues/314](https://github.com/eclipse-cyclonedds/cyclonedds/issues/314)
#### remarks: 
- this is a typical 'source-of-confusion' an (thus) deserves a good (i.e. sufficiently extensive) write-up to clarify (see also [https://github.com/eclipse-cyclonedds/cyclonedds/issues/49](https://github.com/eclipse-cyclonedds/cyclonedds/issues/49) )


### TOPIC:  a good summary of how transient-data should outlive either lifecycle of a publisher as well as should be able (making use of a 'durability-service' separate from a publisher) to 'guarantee' eventual-consistency in case of writer/reader disconnects/reconnects
#### reference: [cyclonedds/issues/528](https://github.com/eclipse-cyclonedds/cyclonedds/issues/528)
#### remarks: 
- surely one of many (to come) write-ups on how transient data is supposed to work (once we've implemented support for it) 
- Q: now that I'm thinking of it, what about TRANSIENT_LOCAL behavior in case of disconnect/re-connect, is that also 'equipped' to fill-in-the-blanks w.r.t. missed data sent by 'that' writer during the disconnect state ?


### TOPIC:  a nice write-up on where/why time is spent in Cyclone (focusing on it's threads in the 'receive part')
#### reference: [cyclonedds/issues/769](https://github.com/eclipse-cyclonedds/cyclonedds/issues/769)
#### remarks: 
- the context of this issue was ROS2 which implies that its also the rmw-layer that impacts performance
- unfortunately there are little details on what made the high-cpu problem go away (likely the initial suggestion to exploit larger 'MaxMessageSize' to reduce the amount of packets to be processed)


### TOPIC:  apart from detailed-protocol issues, this issue touches upon the various mechanisms to pass a domain-configuration to cyclone (esp. for those environments that don't include a file-system)
#### reference: [cyclonedds/issues/1051](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1051)
#### remarks: 
- perhaps just a small notice in the document-section that explains all configuration options suffices here, see [https://github.com/eclipse-cyclonedds/cyclonedds/blob/master/docs/manual/options.md](https://github.com/eclipse-cyclonedds/cyclonedds/blob/master/docs/manual/options.md)


### TOPIC:  a discussion on configuration and interoperability between OSPL and Cyclone with some pointers to current limitations w.r.t. type-discovery as well as some changes w.r.t. (ddsi-)configuration
#### reference: [cyclonedds/issues/1057](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1057)
#### remarks: 
- it also points to some fundamental differences w.r.t. type-discovery which might deserve a separate 'topic' as to what's going to be possible going-forward
- also (not related to this specific issue) is a common pitfall w.r.t. interoperability with OSPL that relates to type-scope
- noting also that non-matching partition and or durability-QoS settings is a common-cause for non-interoperability (esp. when there's no readily available tooling to spot these such as OSPL's good-old tester)


### TOPIC:  an issue with the roundtrip-example creating a coredump upon exit, caused by an arbitrary sequence of deleting entities potentially giving rise to a 'use-after-free' attempt
#### reference: [cyclonedds/issues/1074](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1074)
#### remarks: 
- here its most likely dds_write_ts called from a listener when the writer is already deleted .. something that can be prevented by explicitly resetting the listener before stopping (dds_delete)
- Q: although that's a workable work-around, it doesn't state that the example is fixed and/or the code being robust against such termination-patterns (which although preferable might not always be  possible)


### TOPIC:  not so much an issue, but an observation w.r.t. fastRTPS not properly dealing with all messages that make up the reliable protocol
#### reference: [cyclonedds/issues/1110](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1110)
#### remarks: 
- when using the ROS2 talker/listener example, the first messages are missing whenever the Cyclone-listener is started before the fastRTPS-talker
- maybe less suitable for a real 'deep-dive' but rather targeting a 'interoperability-issue' 


### TOPIC:  exploit unicast-traffic as ‘bounded-flows’ in request/response scenario’s
#### reference: [cyclonedds/issues/911](https://github.com/eclipse-cyclonedds/cyclonedds/issues/911)
#### remarks:
- here both the usage of partitions as well as (future) content-filtering as discussed as a way to implement bounded-flows
- noting that the source- and/or destination-oriented partitions are also patterns that work quite nice and imply unicast-traffic in those ‘dedicated’ partitions
- also related to an IoT-concept of so-called *sourceContextFilters* on an input of an IoT 'Thing' that result in a subscription tied to a source-specific partition (in a usecase related to enforcing a point-to-point data-flow between an inference-engine and 'its' raw/to-be-processed sensor data)


### TOPIC:  on creating a static-build of cycloneDDS (i.c.w. security and also windows OS)
#### reference: [cyclonedds/issues/800](https://github.com/eclipse-cyclonedds/cyclonedds/issues/800)
#### remarks: 
- this is stil open as the immediate demand vanished, yet seems like a common/recurring question that might deserve a 'deep-dive' in the future


### TOPIC:  on jitter in latency-tests
#### reference: [cyclonedds/issues/912](https://github.com/eclipse-cyclonedds/cyclonedds/issues/912)
#### remarks:
- about observed abnormal latency-jitter 
- not sure with all our suggestions that issue has been resolved (esp. for large samples)
- anyhow, the ticket contains an elaborate overview on means/methods to measure latency and related jitter
- including bundled roundtrip-apps, ddsperf utility and Erik Boasson’s multi-vendor DDS test-suite i11eperf (https://github.com/eboasson/i11eperf )


### TOPIC:  how to exploit on_data_available when it relates to either actual-data and/or meta-data for lifecycle awareness
#### reference: [cyclonedds/issues/1084](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1084)
#### remarks:
- an extensive write-up on both how to properly exploit on_data_available() call-backs as well as an explanation on how the DDS/DCPS and DDSI/RTPS specification have different approaches on how to handle such (meta-data)events


### TOPIC:  CycloneDDS and OpenDDS interoperability
#### reference: [cyclonedds/issues/1241](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1241)
#### remarks:
- useful information about common pitfalls w.r.t. communicating between different DDS-implementations
- this could be combined with other tickets/remarks of people who have stumbled across typicall interop-blockers/issues
