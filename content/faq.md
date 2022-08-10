# Frequently Asked Questions

This FAQ is based on the captured interactions on Github (related to both open as well as closed issues) and as such includes reference(s) to Github for more details related to the posed questions (and/or answers)

[TOC]

## API

### How do I specify a *domain id*?

There's some confusion w.r.t. the multiple ways to specify a *domain id* for Cyclone DDS.

**Answer**

 - When specifying DDS_DOMAIN_DEFAULT upon creating a participant, the value as specified in the configuration (pointed to by the CYCLONEDDS_URI env. variable) will be used or 0 if not specified there.
 - Not hardcoding the *domain_id* is seen as good practice yet its (now) also allowed to specify the (now default) value '*any*' in the configuration which implies that a (or better any) *domain id* can be used in *dds_create_participant()*

**See also**

 - [cyclonedds#23](https://github.com/eclipse-cyclonedds/cyclonedds/issues/23)
 - [cyclonedds#24](https://github.com/eclipse-cyclonedds/cyclonedds/pull/24)


## Patterns

### How do I filter out 'self-sent' data?

**Answer**

 - Set the `IgnoreLocal` QoS on your reader to discard any samples written by readers local to your publisher or participant scope.
 - The *publication_handle* can be checked on equality with the one returned by the *get_instance_handle()* on the writer-side.
 - Use a ContentFilter to check the publisher id on the sample info.

**See also**

 - [cyclonedds#8](https://github.com/eclipse-cyclonedds/cyclonedds/issues/8)
 - [cyclonedds#78](https://github.com/eclipse-cyclonedds/cyclonedds/issues/78)


## Best Practices

### A `take()` operation returns no data?

A take() in combination with `TRANSIENT_LOCAL` QoS and `BEST_EFFORT` reliability sometimes returns no data.

**Answer**

 - Proper `TRANSIENT_LOCAL` durability-behavior requires `RELIABLE` delivery so the use-case is actually a anti-pattern
 - Note that the (re-)used pingpong example is messy w.r.t. either data-arrival or handling a signal could trigger the *waitset* (where in the latter case, no data would be returned)

**See also**

 - [cyclonedds#154](https://github.com/eclipse-cyclonedds/cyclonedds/issues/154)


## DataModel / IDL

### What (non-Xtypes) IDL is supported?

**Answer**

- Issue #350 and related open issue #795 address the question on what IDL types are supported
- this should be clearly documented but apparently (see #795) this isn't yet the case

**See also**

 - [cyclonedds#350](https://github.com/eclipse-cyclonedds/cyclonedds/issues/350)
 - [cyclonedds#795](https://github.com/eclipse-cyclonedds/cyclonedds/issues/795)

### What characters are allowed for topic-names?

**Answer**

 - Only alphanumeric characters, '/' and '_' are allowed in topic-names
 - Using a hyphen ('-') in a topic-name isn't accepted
 - Contrary to the DDS spec ([https://www.omg.org/spec/DDS/1.4/PDF](https://www.omg.org/spec/DDS/1.4/PDF)) somehow both Cyclone DDS and OpenSpliceDDS support "_" rather than "-" as the spec prescribes
 - An open question is: will/can we ever correct this and also: does this impact interoperability with other DDS implementations where topics with a "-" in the name might 'emerge' ?

**See also**

 - [cyclonedds#657](https://github.com/eclipse-cyclonedds/cyclonedds/issues/657)


## Concepts

###  What is the difference between `read()` and `take()`?

When looking at the examples, its unclear what the difference between them is and when to use one or the other

**Answer**

 - `read()` is non-destructive meaning you can read the data again (as it remains in your reader-history) whereas `take()` actually removes the 'taken' samples from that history
 - Typical usecases: when exploiting DDS as a shared-dataspace that (often) captures shared-state, a `read()` operation is appropriate to access the most recent state whereas when using DDS for pub/sub event-distribution the `take()` operation is more appropriate

**See also**

 - [cyclonedds#17](https://github.com/eclipse-cyclonedds/cyclonedds/issues/17)


### How do I assure that all subscribers get the data from a short-lived publisher?

When starting many subscribers of the HelloWorld example, not all get all published data

**Answer**

 - By default, data is volatile meaning that when data is published/written before subscribers/readers are present, data won't be delivered
 - Multiple reasons/remedies can be identified for this 'seeming data-loss': (1) the writer may be gone already before the reader emerges, remedy is exploiting `TRANSIENT` QoS for the data, (2) as discovery takes time, some data might already be published before the match between publisher/subscriber is discovered (even when both are started at the same time), remedy is to exploit 'endpoint-awareness' as provided by `dds_get_publication_matched_status()` and wait in the publisher until the *current_count* equals the number of required/expected subscribers

**See also**

 - [cyclonedds#25](https://github.com/eclipse-cyclonedds/cyclonedds/issues/25)

### (Writer-)History QoS `KEEP_ALL` doesn't result in late-joining reader(s) to receive the data

The (in the OMG-spec) specified `KEEP_ALL` behavior seems to suggest that data is kept available for (later) delivery

**Answer**

For preserving published data for late-joining subscribers, the `DURABILITY` QoS should be used (that works in conjuction with `HISTORY` but isn't the same)

- `History` and `Durability` are orthogonal concepts meaning that `KEEP_ALL` writer-history allows for a system 'in steady state' (in this case relating to existing readers) to 'eventually' deliver all samples from that writer-history to the history-cache of such an EXISTING reader. If on the other hand, data needs to be preserve for 'late-joining' readers, Durability features of DDS can be exploited (i.e. `TRANSIENT_LOCAL` or `TRANSIENT` QoS) to assure that such non-volatile data will be preserved and delivered to late-joining NEW readers (and in case of `TRANSIENT` data even if the publisher/writer of that data has already 'gone', noting that `TRANSIENT` QoS is still under development as of feb'22)

**See also**
 - [cyclonedds#49](https://github.com/eclipse-cyclonedds/cyclonedds/issues/49)

### How to communicate between DDS-domains?

**Answer**

Cyclone DDS relies on [Zenoh](www.zenoh.io) for that

- note that the question was asked in the ROS2 context which doesn't exploit the full DDS feature-set
- on each to-be-connected DDS domain a 'Zenoh bridge for DDS' can be deployed to bridge those two domains

**See also**

 - [cyclonedds#1094](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1094)
 - [zenoh-plugin-dds](https://github.com/eclipse-zenoh/zenoh-plugin-dds)
 - [the zenoh blog on ROS2 integration](https://zenoh.io/blog/2021-04-28-ros2-integration/)

### Is DDS useful for intermittent local communications without a fixed network?

This is useful to cases related to mobile devices that regularly go in and out of range

**Answer**

 - For such use-cases, the combination of Eclipse’s Cyclone DDS and [Zenoh](www.zenoh.io) products is suggested
 - Sister project [Zenoh](www.zenoh.io) explicitly targets dynamic connectivity and allows for transparent integration with an (otherwise) DDS-based system

**See also**

 - [cyclonedds#524](https://github.com/eclipse-cyclonedds/cyclonedds/issues/524)
 - [Zenoh](www.zenoh.io)


### What are the semantics behind `on_data_available`?

- It seems that on_data_available is triggered not just on actual new data arriving

**Answer**

 - the `on_data_available` callback applies to both data as well as (instance-lifecycle)meta-data
 - following an on_data_available callback, a `read` (or `take`) will return either valid data (when new data arrived) or an invalid-sample to convey a lifecycle change related to the writer (typically for an empty instance i.e. one for which the data was already ‘taken’ by a previous call-back response

**See also**

 - [cyclonedds#1084](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1084)

## Performance

### Why are there huge latency outliers when sending huge samples ?

When sending 1MB samples on a 'standard' Ubuntu distro, latencies can spike from a typical 2 milliseconds towards 150 milliseconds

**Answer**

 - Although Cyclone DDS 'asks' the operating system for a 1 megabyte socket-receive-buffer, in many cases it will give out a smaller buffer and thus requires the user to configure a higher allowed maximum receive-buffer-size
 - Inspecting */proc/sys/net/core/rmem_max* (on Linux) typically shows that such a maximum is insufficient for the intended sample-sizes and thus needs to be 'upped' i.e. using *sysctl -w net.core.rmem_max=<appropriate_size_in_bytes>*

**See also**

 - [cyclonedds#294](https://github.com/eclipse-cyclonedds/cyclonedds/issues/294)

## Language Support

### Is 'Rust' an available language binding?

As Cyclone DDS is about the only open source DDS implementation written in 'C', it should (at least theoretically) be possible to create a 'Rust' binding on-top of it

**Answer**

 - At the time of asking (aug/2020), there was an initiative to add an open source Rust-binding to Cyclone DDS
 - See below that current (jan'22) version is 0.1.2 with last update in sept'20

**See also**

 - [cyclonedds#573](https://github.com/eclipse-cyclonedds/cyclonedds/issues/573)
 - [https://github.com/atolab/cdds-rust](https://github.com/atolab/cdds-rust)


### Is 'C#' an available language binding?

**Answer**

 - At time of writing (august/2022) there is a C# language binding in the works by ZettaScale Technology.

## Configuration

### How do I use multiple (network) partitions in a custom profile?

**Answer**

 - Cyclone DDS allows you to map logical DDS-partitions on physical ‘network-partitions’ (typically multicast-groups)
 - Although the question was driven by reducing discovery, the below reference still contains a nice write-up on how to exploit network-partitions in Cyclone DDS

**See also**
 - [cyclonedds#883](https://github.com/eclipse-cyclonedds/cyclonedds/issues/883)

### How do I configure multiple network interfaces?

**Answer**

 - Automatic routing might prevent correct communication in case of multiple configured interfaces
 - Setting the ‘General/DontRoute’ config-option typically prevents the issue reported here
 - Multi-homing and routing is slated for a ‘deep-dive’ topic as its likely to pop up regularly in more complex setups

**See also**

 - [cyclonedds#1190](https://github.com/eclipse-cyclonedds/cyclonedds/issues/1190)
