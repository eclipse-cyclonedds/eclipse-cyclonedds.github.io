Title:       Modeling Data, Metadata and their Relationships With DDS
Author:      Ramzi KAROUI
Date:        2022-11-08
Template:    plain_markdown
---

# DDS Models simultaneously system's Things, their Metadata, and Relationships

From the design perspective, DDS models the words' *entities* or the
words' ***things*** as they are, with their unique identity (*key*),
their well-defined **complex structures**, *data-types*, their *states*,
*events,* and *metadata*. Metadata can indicate if the entity represented 
by the data is *new* in the system, if it has been *already seen*, or if 
it is still a*live* or disposed and *released* by its writers.

This entity modeling capability and data-type system allow designers to
build more effectively a **type-safe system** so that applications
exchange data where the types are agreed upon at compilation time or runtime
before exchanging any data content. When data is safely exchanged and
stored, either in memory or on a persistent store, it can be queried and
analyzed. From that perspective, DDS can be seen as a **Real-time**
**Distributed Relational database**.

Relational databases typically require each cell of the table to contain
a single *scalar value*. Furthermore, in First Normal Form databases
(1NF), attributes must be atomic; that is, an attribute must not be an
n-tuple and therefore cannot be a set, list, or complex data structure.
In such cases, to rebuild the full data structure, designers need to
split their data type into several tables and operate SQL JOIN operations.
Running JOIN operations leads to random disk seeks on several tables and
has tremendous performance degradation. Performance degradation can be
worse if the DBMS needs to make distributed JOINS.
Databases that only support storage of atomic values, such as MySQL or
SQL Server \[ROCKDB\] give the designer no choice but to conform to 1NF.

DDS does not have such restriction, every data type attribute can be a
complex structure, including the key attribute definition. In much the
same way as DDS, the so-called *Nested Relational Database*, such as
Rocket MultiValue databases systems \[ROCKDB\], mitigate the atomic
attribute limitation, the usage of nested relation DBs remains marginal.

On the other hand, **NoSQL** **databases** such as MongoDB for instance
store data in a dictionary of key-value pairs, where the value is a JSON
document stored in Binary JSON for efficiency purposes. NoSQL DBs are
also referred to as schema-less databases, as you can store any data in
the same document regardless of its structure. NoSQL DBs do not know what
attributes are present in each document, nor does it know their types,
therefore this information must be stored on a per-document basis which
comes at the cost of storage efficiency.

In DDS, data types can also be unstructured and modeled as key-value
pairs. The value type can be bounded or an unbounded sequence of octets.
The key-value modeling capability allows DDS to be seen and compared to
the most popular NoSQL databases.

If you model your data as a *keyless* sequence of headers and payloads,
you are modeling Messages and limiting the DDS usage to a **Message
Oriented Middleware** (MOM). In MQTT for instance, messages are not bound
to any type of structure. If a developer wants to mimic the concept of
a key that uniquely identifies an entity in the system, they can either
code the identifier in the message structure at the application level, or
for each entity, create a dedicated topic ( e.g
/Building1/Temperature_Sensors/SensorID), which can lead to topic
proliferation. In all cases, the middleware is neither able to manage
the entity life cycle nor to optimize its processing.

Whether you use DDS as an in-memory database, or as a MOM, the DDS
data type definition can evolve over time \[X-types\] in new (version n)
without breaking interworking and interoperability with the rest of the
system, which can still see data with its previous Type-definition
(version n-1). This capability is unique in the industry. Backward
compatibility of data type is useful when you are building a dynamic
system where the structure of the data evolves over time or evolves
during the system runtime. Such data needs to be tagged as *extensible*,
*appendable*, or even *mutable*. Extensible and appendable means you
can add, remove, or change, any field of the data-type; while mutable
means you can change the order of the data attributes in the data type
definition. With DDS, you can even make your data type elastic, in the
sense that some data fields can be considered *optional* and may or may
not be instantiated by applications during runtime.

If you are building a mission-critical system, where safety and
Real-time data exchange are important, data extensibility is not
recommended. To help the DDS infrastructure ensure type safety at
compilation time and to improve determinism, you can make an up-front
commitment on the data type to use. In this case, knowing in advance the data
type and structure helps the DDS kernel to optimize and pre-allocate
memory to minimize runtime time jitters, assure better determinism and
handle more efficiently application real-time constraints. In less
critical systems where evolvability is desirable, the DDS data
extensibility and elasticity features address the requirement.

The standard DDS data definition language is mainly a subset of the OMG
Interface definition languages \[IDL4\], although it is possible to
represent data in XML, XSD, Binary mode in Google Proto Buffer, or in
JSON.

With DDS, you can model both the data objects and entities, as well as
their *relationship*. In practice, you simply need to unify the data
keys you want to relate into another dedicated relation represented by a
dedicated data topic. DDS can therefore easily support
**Entity-Relationships** or **UML** based designs. From this
perspective, you can, to some extent, get **Graph-database**-like
capabilities, where graph nodes represent the data entity (as a
key-value pair) and the graph edges represent relationships.
Relationships have a type and label, a direction, and properties. DDS
can easily represent such relationships and answer simple queries
that directly involve those relationships.

However, although it is feasible, to answer complex queries that involve
multi-tier transitive relationships, DDS will not be as efficient and
performant as graphical DBs (i.e when (x~1~ RelatedTo x~2~ )
and (x~2~ RelatedRTo \...x~n~ }) ⟹ (x~1~RelatedTo x~n~) ).

It is also worth mentioning, that many **Model-Driven Architecture**
tools automatically translate UML designs into DDS data entities and
application code. Such approaches minimize the DDS learning curve, avoid
accidental coding errors, and make the application less error prone.

None of the known MOMs or Distributed BDs technologies can achieve such
versatility in modeling world things and their interactions as DDS.
