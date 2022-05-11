# CycloneDDS Frequently Asked Questions (FAQ)

This FAQ is based on the captured interactions on Github (related to both open as well as closed issues) and as such includes reference(s) to Github for more details related to the posed questions (and/or answers)

[TOC]

## Category: API

### Question: how to specifiy a *domain id ?*
    
- There's some confusion w.r.t. the multiple ways to specify a *domain id* for Cyclone DDS

#### Answer: when specifying DDS_DOMAIN_DEFAULT upon creating a participant, the value as specified in the configuration (pointed to by the CYCLONEDDS_URI env. variable) will be used or 0 if not specified there.
    
- Not hardcoding the *domain_id* is seen as good practice yet its (now) also allowed to specify the (now default) value '*any*' in the configuration which implies that a (or better any) *domain id* can be used in *dds_create_participant()*

#### reference:  [cyclonedds/issues/23](https://github.com/eclipse-cyclonedds/cyclonedds/issues/23) and [https://github.com/eclipse-cyclonedds/cyclonedds/pull/24](https://github.com/eclipse-cyclonedds/cyclonedds/pull/24)



## Category: Patterns


### Question:  how to filter 'self-sent' data ?

- How to filter out the messages on a subscriber that the same participant has sent

#### Answer: the *publication_handle* can be checked on equality with the one returned by the *get_instance_handle()* on the writer-side

- Two (upcoming) alternative ways of filtering would be (1) to make such identification part of the data itself, so it can be content-filtered once supported or (2) exploit the *ignore_participant()* API and/or related *dds_qset_ignorelocal* QoS's

#### Reference: [cyclonedds/issues/8](https://github.com/eclipse-cyclonedds/cyclonedds/issues/8) and [cyclonedds/issues/78](https://github.com/eclipse-cyclonedds/cyclonedds/issues/78)


## Category: Best Practices

### Question: *take()* operation returns no data ?

- A take() in combination with *TRANSIENT_LOCAL* QoS and *BEST_EFFORT* reliability sometimes returns no data

#### Answer: proper *TRANSIENT_LOCAL* durability-behavior requires *RELIABLE* delivery so the use-case is actually a anti-pattern

- Note that the (re-)used pingpong example is messy w.r.t. either data-arrival or handling a signal could trigger the *waitset* (where in the latter case, no data would be returned)

#### Reference: [cyclonedds/issues/154](https://github.com/eclipse-cyclonedds/cyclonedds/issues/154)



## Category: DataModel / IDL

### Question: what (non-Xtypes) IDL is supported ?

- Issue #350 and related open issue #795 address the question on what IDL types are supported
	
#### Anser: this should be clearly documented but apparently (see #795) this isn't yet the case

#### Reference: [cyclonedds/issues/350](https://github.com/eclipse-cyclonedds/cyclonedds/issues/350) and [cyclonedds/issues/795](https://github.com/eclipse-cyclonedds/cyclonedds/issues/795)
 

### Question: what characters are allowed for topic-names ?

- Using a hyphen ('-') in a topic-name isn't accepted
    
#### Answer: only alphanumeric characters, '/' and '_' are allowed in topic-names

- Contrary to the DDS spec ([https://www.omg.org/spec/DDS/1.4/PDF](https://www.omg.org/spec/DDS/1.4/PDF)) somehow both CycloneDDS and OpenSpliceDDS support "_" rather than "-" as the spec prescribes
- An open question is: will/can we ever correct this and also: does this impact interoperability with other DDS implementations where topics with a "-" in the name might 'emerge' ?

#### Reference: [cyclonedds/issues/657](https://github.com/eclipse-cyclonedds/cyclonedds/issues/657)


## Category: Concepts

### Question:  what is the difference between *read()* and *take() ?*

- When looking at the examples, its unclear what the difference between them is and when to use one or the other

#### Answer: *read()* is non-destructive meaning you can read the data again (as it remains in your reader-history) whereas *take()* actually removes the 'taken' samples from that history

- Typical usecases: when exploiting DDS as a shared-dataspace that (often) captures shared-state, a *read()* operation is appropriate to access the most recent state whereas when using DDS for pub/sub event-distribution the *take()* operation is more appropriate

#### Reference: [cyclonedds/issues/17](https://github.com/eclipse-cyclonedds/cyclonedds/issues/17)


### Question:  how to assure that all subscribers get the data from a short-lived publisher ?

- When starting many subscribers of the HelloWorld example, not all get all published data

#### Answer: by default, data is volatile meaning that when data is published/written before subscribers/readers are present, data won't be delivered

- Multiple reasons/remedies can be identified for this 'seeming data-loss': (1) the writer may be gone already before the reader emerges, remedy is exploiting *TRANSIENT* QoS for the data, (2) as discovery takes time, some data might already be published before the match between publisher/subscriber is discovered (even when both are started at the same time), remedy is to exploit 'endpoint-awareness' as provided by *dds_get_publication_matched_status()* and wait in the publisher until the *current_count* equals the number of required/expected subscribers

#### Reference: [cyclonedds/issues/25](https://github.com/eclipse-cyclonedds/cyclonedds/issues/25)



### Question: (Writer-)History QoS *KEEP_ALL* doesn't result in late-joining reader(s) to receive the data

- The (in the OMG-spec) specified *KEEP_ALL* behavior seems to suggest that data is kept available for (later) delivery

#### Answer: for preserving published data for late-joining subscribers, the *DURABILITY QOS* should be used (that works in conjuction with HISTORY but isn't the same)

- '*History*' and '*Durability*' are orthogonal concepts meaning that *KEEP_ALL* writer-history allows for a system 'in steady state' (in this case relating to existing readers) to 'eventually' deliver all samples from that writer-history to the history-cache of such an EXISTING reader. If on the other hand, data needs to be preserve for 'late-joining' readers, Durability features of DDS can be exploited (i.e. *TRANSIENT_LOCAL* or *TRANSIENT* QoS) to assure that such non-volatile data will be preserved and delivered to late-joining NEW readers (and in case of TRANSIENT data even if the publisher/writer of that data has already 'gone', noting that *TRANSIENT* QoS is still under development as of feb'22)
 
#### Reference: [cyclonedds/issues/49](https://github.com/eclipse-cyclonedds/cyclonedds/issues/49)


### Question: how to communicate between DDS-domains ?

- Apparently fastDDS has some built-in mechanisms for this

#### Answer: Cyclone relies on Zenoh ([https://github.com/eclipse-cyclonedds/cyclonedds/issues/www.zenoh.io](https://github.com/eclipse-cyclonedds/cyclonedds/issues/www.zenoh.io)) for that

- note that the question was asked in the ROS2 context which doesn't exploit the full DDS feature-set
- on each to-be-connected DDS domain a 'Zenoh bridge for DDS' can be deployed to bridge those two domains (see also [https://github.com/eclipse-zenoh/zenoh-plugin-dds](https://github.com/eclipse-zenoh/zenoh-plugin-dds) )
- see also: [https://zenoh.io/blog/2021-04-28-ros2-integration/](https://zenoh.io/blog/2021-04-28-ros2-integration/)

#### Reference: [cyclonedds/issues/1094](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1094)


### Question: is DDS useful for intermittent local communications without a fixed network

- related to mobile devices that go in/out of range

#### Answer: for such use-cases, the combination of ZettaScale’s DDS and Zenoh products is suggested

- Syster project "Eclipse Zenoh" explicitly targets dynamic connectivity and allows for transparent integration with an (otherwise) DDS-based system

#### Reference: [cyclonedds/issues/524](https://github.com/eclipse-cyclonedds/cyclonedds/issues/524)


### Question: what’s the semantics behind on_data_available ?

- It seems that on_data_available is triggered not just on actual new data arriving

#### Answer: the on_data_available callback applies to both data as well as (instance-lifecycle)meta-data

- following an on_data_available call-back, a read(or take) will return either valid data (when new data arrived) or an invalid-sample to convey a lifecycle change related to the writer (typically for an empty instance i.e. one for which the data was already ‘taken’ by a previous call-back response

#### Reference: [cyclonedds/issues/1084](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1084)


## Category: Performance

### Question: why are there huge latency outliers when sending huge samples ?

- When sending 1MB samples on a 'standard' ubuntu distro (18.04), latencies can spike from a typical 2 ms towards 150 ms

#### Answer: although Cyclone 'asks' the OS for a 1MB socket-receive-buffer, in many cases it will give out a smaller buffer and thus requires to configure a higher allowed maximum receive-buffer-size

- Inspecting */proc/sys/net/core/rmem_max* (on Linux) typically shows that such a maximum is insufficient for the intended sample-sizes and thus needs to be 'upped' i.e. using *sysctl -w net.core.rmem_max=<appropriate_size_in_bytes>*

#### Reference: [cyclonedds/issues/294](https://github.com/eclipse-cyclonedds/cyclonedds/issues/294)


## Category: Language Support

### Question: is 'rust' an available language binding ?

- As CycloneDDS is about the only opensource DDS_implementation written in 'C', it should (at least theoretically) be possible to create a 'rust' binding on-top of it

#### Answer: at the time of asking (aug/202), there was an initiative to add an opensource rust-binding to Cyclone

- See [https://github.com/atolab/cdds-rust](https://github.com/atolab/cdds-rust), note that current (jan'22) version is 0.1.2 with last update in sept'20

#### Reference: [cyclonedds/issues/573](https://github.com/eclipse-cyclonedds/cyclonedds/issues/573)


## Category: Configuration

### Question: how to use multiple (network) partitions in a custom profile

- How to setup partitions in a custom profile

#### Answer: Cyclone allows to map logical DDS-partitions on physical ‘network-partitions’ (typically multicast-groups)

- Although the question was driven by reducing discovery, the below reference still contains a nice write-up on how to exploit network-partitions in Cyclone DDS

#### Reference: [cyclonedds/issues/883](https://github.com/eclipse-cyclonedds/cyclonedds/issues/883)


### Question: how to configure multiple network-interfaces

- its hard/tricky to get communication working when having nodes with multiple network-interfaces

#### Answer: automatic routing might prevent correct communication in case of multiple configured interfaces

- Setting the ‘General/DontRoute’ config-option typically prevents the issue reported here
- Multi-homing and routing is slated for a ‘deep-dive’ topic as its likely to pop up regularly in more complex setups

#### Reference: [cyclonedds/issues/1190](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1190)



