====
Home
====

:slug: index
:date: 2021-05-21 18:00
:lang: en
:template: index
:url: index.html
:save_as: index.html
:sortorder: 1

.. class:: hide-heading row align-items-center

Summary
=======

.. class:: col-5 mx-auto col-md-5 order-md-2 container-fluid
.. figure:: /images/cyclonedds.svg

.. class:: col-10  mx-auto col-md-5 order-md-2 text-center  pr-md-5

Building Portable & Interoperable Distributed Datacentric Systems
-----------------------------------------------------------------
Cyclone DDS is high performant, OMG-DDS standard based data sharing technology allowing system designers to create digital twines of their systems’ entities to share their states, events, data-streams and messages on the network in real-time and fault-tolerant ways



.. class:: hide-heading highlights masthead-followup row m-0 border border-white

Highlights
==========

.. class:: col-12 col-md-4 p-3 p-md-5 bg-light border border-white

Fast & Dependable
-----------------

Cyclone DDS has an extremely low latency and high throughput, especially in rush environments and noisy networks where error transmission rates are relatively high.
Performance variability and jitters are minimum which make it suitable for real-time and mission critical applications.
Cyclone has also low footprint making it suitable for both enterprise and embedded systems.

Capitalizing on the long experience developing datacentric middlewares in real-time distributed systems,
the cyclone dds core development team and community are fulfilling stringent software development processes with certifiability of the technology in mind to be deployed where safety is mandated.



.. class:: col-12 col-md-4 p-3 p-md-5 bg-light border border-white

Consistent & Scalable
---------------------

Cyclone minimises the dds automatic discovery protocol overhead by aggregating the number of applications' representatives in the dds network.
It scales out, both in Edge based peer-to-peer or in large-scale IoT deployments.
To rationalise the network resources use, it can spread data on different multicast and unicast groups to confine it physically where it is needed.

Cyclone is designed to maintain data distribution integrity and consistency between all applications that need it.
Data consistency is eventually guaranteed even when the system topology changes due to application disconnections and reconnections or, to transient infrastructure failure.

.. class:: col-12 col-md-4 p-3 p-md-5 bg-light border border-white

Secure & Interoperable
----------------------

To secure data exchanges, pre-built or user-defined plug-ins for Applications Authentication, Authorisation and data Encryption are supported.
The pre-built plugins with RSA is used for Authentication, Diffie-Hellman is used for key exchange.
Authorisation uses permissions document signed by shared Certificate Authority.
Cryptography uses AES-GCM and AES-GMAC for message authentication.

As a smart implementation of the DDSi-RTPS and the DDS-Security protocols Cyclone DDS interoperates with any other DDS vendor compliant implementation.
Interworking with none-dds technologies are possible through other mediating technologies such as Zenoh or Camel-Apache.
