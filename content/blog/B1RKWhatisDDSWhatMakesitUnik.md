# What is DDS and what's make it unique

The OMG-DDS Data Distribution Service is an Object-Management-Group
standard and technology to share any kind of data, in interoperable,
scalable, real-time, and fault-tolerant ways over arbitrary networks.
DDS allows system designers to build stateful or stateless systems. The
system's state is caught and represented in the data modeled by DDS.

DDS allows application developers to create digital twins of their
systems' entities to share or query their states, share Commands or
Replies, Events, data streams, videos, audios, structured documents and
files or simply messages on the network in real-time and fault-tolerant
ways.

With DDS, Data and their associated Quality of Services are the only
contract that bound and integrate distributed applications together.
From that perspective, DDS helps building decoupled and flexible
distributed architectures where Applications do not have to expose their
location, their APIs, their internal behavior nor need to be active and
alive at the same time. With DDS, the decoupling is bidimensional, it
happens both in Space and Time.\
This disruptive technology provides, Secure, Low-latency and Ultra--high
throughput data exchange rates.

Depending on the QoS (Quality of Services) in use, DDS behaves as an
**in-Memory database** where, on behalf of every DDS-aware application,
DDS replicates and maintains a local copy of the data based on the
application's interest expressed in the concept of *data topic*. DDS can
manage the last data value or an arbitrary history of the updates. It
can also store the data durably on persistent media to make it available
for later use. Once data is consistently propagated in the network,
Applications can *Query* it, typically with a subset of the Structured
Query Language (**SQL**), or use their own querying language. ·

In its minimalistic use, DDS behaves as a **Message-oriented
Middleware** where data throughput and latency performance can be
considered more important than data consistency and coherency. In this
case, applications can filter data and receive only the relevant ones.
These typical use cases are not exclusive and can be combined within the
same system or application.

As a standard-based technology with open specification, the OMG DDS
technology fosters the development of secure interoperate open systems
through the adoption of a common protocol (**DDSI-RTPS**)
(**DDS-Security**). The technology also defines application
integration framework with intuitive and productive **APIs** available
in the most popular and programming languages, ranging from **C/C#/C++**
to **Python/Java/Scala** and **Javascript,** etc\... With such
well-defined APIs, applications can be ported across compliant DDS
implantations with minimal effort. Such Standard APIs avoid the vendor
locking situation.

In the next blogs, we provide the ten most distinguishing features that
make DDS unique when comparing it to other Message Oriented Middleware
or Distributed Databases Systems. We will discuss how DDS

1.  **Models simultaneously system Things, their Relationships and
    Metadata,**

2.  **Best-effort deterministic data distribution on non-deterministic
    network transport layers**

3.  **Manages both, the last or the history states and organizes them in
    the desired order**

4.  **Ensures Data Eventual Consistency and Coherency**

5.  **Provides Dynamic discovery with no single point of failure Defines
    Independent**

6.  **Best-effort deterministic data distribution on non-deterministic
    network transport layers Fault-tolerance and Horizontal
    scalability**

7.  **Builds complex information from basic data elements**

8.  **Integrity Rules on the Writing and Reading applications Ability to
    share data as well as the context in which it is published**

9.  **Very rich Quality of Service Framework**

10. **Secure Data Distribution**
