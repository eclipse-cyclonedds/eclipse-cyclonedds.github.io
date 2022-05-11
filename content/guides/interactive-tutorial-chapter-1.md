---
Title:       Python Interactive Tutorial, Chapter 1
Author:     Thijs Miedema
Date:        2022-05-04
Template:    py_interactive_markdown
---

# Chapter 1: Getting your feet wet

Welcome! This interactive tutorial teaches you the basics of DDS and the Cyclone DDS Python backend. To give it a fun spin, we will use DDS to follow along on the journey of Captain Corsaro with his ship Cyclone.

<div class="interactive-journal">
    <div class="interactive-date">June 2nd, 1674</div>
    This morning we left the harbour of Palermo, setting sail for Tunis. Weather conditions are outstanding, I hope they will hold. Getting some dry-dock time in Palermo was worth it, sailing the Cyclone with a cleaned hull for the first time in years is invigorating. It was expensive though, we need to make a capture as soon as possible.
    <div class="interactive-signature">Captain A. Corsaro</div>
</div>

All story fragments from the journal will be presented in boxes like the one above. Explanations and instructions are presented as normal text like this. Please enable "Live Code" by selecting the rocket in the top bar and then execute the code cell below to initialize your personal copy of Captain Corsaro's journal.

``` { .python .code-cell }
from questing import Journal

journal = Journal(seed=None)
print(journal.seed)
```

## Sailing the DDS sea

DDS is a publish-subscribe based networking system that allows you to write applications that talk to eachother without worrying about shipping the bits and bytes around and retaining compatibility between platforms and programming languages. We will first explore the different entities central to a DDS system and learn how to create and use them in Python.

<div class="interactive-journal">
    <div class="interactive-date">June 7th, 1674</div>
    A dreadfull storm has blown us off course, I don't even recognize the stars anymore. We have picked a random direction counter the wind direction of the past few days and hope to find land in not too long. For now I have dubbed the waters here the DDS sea.
</div>

To join our captain on the DDS sea, or rather *DDS Domain* we use a `DomainParticipant`. A `DomainParticipant` is the central entity in any DDS application. The Domain itself is more of a virtual concept, not directly created but made up of all the participants on a network. You can have multiple domains running next to each other, identified by a *domain id*. They will remain completely separated.

<hr>

> Tasks:
>
> *  Import the `DomainParticipant` from `cyclonedds.domain` and instantiate it without arguments.
> *  Pass the `DomainParticipant` to `quest.check("domain-participant", participant)`

``` { .python .code-cell }
quest = journal.quest("domain-participant")
quest.start()

# The import:

# Make participant
participant = ...

quest.check("domain-participant", participant)
quest.finish()
```

<details><summary>Click to show hint 1.</summary>
The import is `from cyclonedds.domain import DomainParticipant`
</details>

<details><summary>Click to show hint 2.</summary>
The instantiation is `participant = DomainParticipant()`
</details>

<details><summary>Click to show the solution.</summary>

``` { .python .code-cell }
quest = journal.quest("domain-participant")
quest.start()

from cyclonedds.domain import DomainParticipant
participant = DomainParticipant()

quest.check("domain-participant", participant)
quest.finish()
```

</details>


## Remaining on-topic

<div class="interactive-journal">
    <div class="interactive-date">June 8th, 1674</div>
    First Mate Boasson and I have been discussing the curious fish that jump out of the waters all around. We have observed Shimmering, Matte and Metallic looking ones with a varying number of dorsal fins. A group of them seem to be following the ship and we have taken pleasure in naming them.
</div>

In order for DDS applications to talk to each other they have to be talking about the same thing: the same `Topic`. A `Topic` in DDS consists of a *name* and a *type*. The types are usually defined using the **Object Management Group Interface Definition Language**, OMG IDL or just IDL for short. With the powerful introspection and duck-typing we don't have to rely on an IDL compiler to help us define these types, we can write Python classes directly and let Cyclone DDS Python directly generate the DDS necessities behind the scenes. If you want to learn IDL so you can interop with other languages there are other tutorials available.

You can turn Python classes into IDL structs by inheriting from `IdlStruct` from `cyclonedds.idl` and type hinting the class attributes, as if you are using [python dataclasses](https://docs.python.org/3/library/dataclasses.html). You can then implement an `__init__` method or generate one by applying `@dataclass`.


<hr>

> Create a datatype for the `CuriousFish` that has a `FishType` (Shimmering, Matte or Metallic), an integer number of dorsal fins and a string name.
> Then import `Topic` from `cyclonedds.topic` and create a `Topic` named `followers`. A `Topic` takes three arguments: a `DomainParticipant`, a name and the datatype.
>
> **Note**: your variables persist between cells, you can use the participant from the previous quest! However, a time-out can occur, which will usually result in a DDS_PRECONDITION_NOT_MET error. Try to re-run previous cells to re-initialize variables if this happens.
>
> Example datatype:
>

``` { .python }
@dataclass
class LogbookEntry(IdlStruct):
    timestamp: int
    text: str
    author: str
```


> Tasks:
>
> *   Pass the `CuriousFish` datatype to `quest.check("curious-fish", CuriousFish)`
> *   Pass the `Topic` you created to `quest.check("followers-topic", topic)`

``` { .python .code-cell }
quest = journal.quest("remain-on-topic")
quest.start()

from dataclasses import dataclass
from cyclonedds.idl import IdlEnum, IdlStruct

class FishType(IdlEnum):
    Shimmering = 0
    Matte = 1
    Metallic = 2

@dataclass
class CuriousFish(IdlStruct):
    fish_type: FishType
    # define dorsal_fins
    # define fish_name

quest.check("curious-fish", CuriousFish)

# import

# create the topic
topic = ...

quest.check("followers-topic", topic)
quest.finish()
```

<details>
<summary>Click to show hint 1.</summary>
The fields are `dorsal_fins: int` and `fish_name: str`.
</details>

<details>
<summary>Click to show hint 2.</summary>
The topic import is `from cyclonedds.topic import Topic`.
</details>

<details>
<summary>Click to show hint 3.</summary>
The topic instantiation is `topic = Topic(participant, "followers", CuriousFish)`
</details>

<details>
<summary>Click to show the solution.</summary>

``` { .python }
quest = journal.quest("remain-on-topic")
quest.start()

from dataclasses import dataclass
from cyclonedds.idl import IdlEnum, IdlStruct

class FishType(IdlEnum):
    Shimmering = 0
    Matte = 1
    Metallic = 2

@dataclass
class CuriousFish(IdlStruct):
    fish_type: FishType
    dorsal_fins: int
    fish_name: str

quest.check("curious-fish", CuriousFish)

from cyclonedds.topic import Topic
topic = Topic(participant, "followers", CuriousFish)

quest.check("followers-topic", topic)
quest.finish()
```
</details>

## Taken, a fishy story

<div class="interactive-journal">
    <div class="interactive-date">June 12th, 1674</div>
    One of the crew finally managed to catch a fish, hopefully we can catch more so we can stretch our food supplies. We have been sailing for five days now without seeing any land or other ship. Are we going the right direction or are we doomed to sail the endless oceans?
</div>

We will now finally interact with the DDS system. By subscribing to the `follower-fish` topic and `taking` a sample we will discover what the fish our captain talked about actually looked like. This is done through `Subscribers` and `DataReaders`. We will disregard the `Subscriber` for now and only work with a `DataReader`. It has several reading and taking methods that allow you to receive data from the network. They are `read`, `take`, `read_next`, `take_next`, `read_iter`, `take_iter`, `read_aiter` and `take_aiter`. We will stick with a simple `take` for now, which gives you a list of available samples. A *sample* is simply an instance of the datatype of the `Topic`.

<hr>

> Create a `DataReader`, imported from `cyclonedds.sub` using the participant and the topic as arguments, then take a fish.
>
> Tasks:
>
> *  Pass the `DataReader` you created to `quest.check("fish-reader", reader)`
> *  Pass the `CuriousFish` you took to `quest.check("freshly-caught", fish)`

``` { .python .code-cell }
quest = journal.quest("a-fishy-story")
quest.start()

# The import

# Create the reader
reader = ...
quest.check("fish-reader", reader)

# Take the fish
fish = ...
print(fish)

quest.check("freshly-caught", fish)
quest.finish()
```

<details>
<summary>Click to show hint 1.</summary>
The `DataReader` import is `from cyclonedds.sub import DataReader`
</details>

<details>
<summary>Click to show hint 2.</summary>
The `DataReader` instantiation is `reader = DataReader(participant, topic)`
</details>

<details>
<summary>Click to show hint 3.</summary>
Taking a single fish from the reader is `fish = dr.take()[0]`
</details>

<details>
<summary>Click to show the solution.</summary>

``` { .python }
quest = journal.quest("a-fishy-story")
quest.start()

from cyclonedds.sub import DataReader

reader = DataReader(participant, topic)
quest.check("fish-reader", reader)

fish = reader.take()[0]
quest.check("freshly-caught", fish)
quest.finish()
```

</details>

## Growing the fish supply

<div class="interactive-journal">
    <div class="interactive-date">June 15th, 1674</div>
    Still no land in sight, but at least the fish are tasty. The supply does seem to be dwindling though, that is slightly concerning.
</div>

We now know how to take a sample but normally these samples don't appear out of thin air: something somewhere has to be *writing* them. This is done with `Publishers` and `DataWriters`, where we again will leave the `Publisher` out for now. A `DataWriter` is instantiated the exact same way as a `DataReader`. A writer can `write` a sample and `dispose` a sample, or do both right after each other with `write_dispose`.

<hr>

> Create a `DataWriter`, imported from `cyclonedds.pub` using the participant and the topic as arguments, then write a `CuriousFish`.
>
> Tasks:
>
> *  Pass the `DataWriter` you created to `quest.check("fish-writer", writer)`
> *  Write a `CuriousFish` with parameters of your choosing.


``` { .python .code-cell }
quest = journal.quest("grow-the-fish-supply")
quest.start()

# The import

# Create the writer
writer = ...
quest.check("fish-writer", writer)

# Create a fish
fish = ...

# Write the fish

quest.finish()
```

<details>
<summary>Click to show hint 1.</summary>
The `DataWriter` import is `from cyclonedds.pub import DataWriter`.
</details>

<details>
<summary>Click to show hint 2.</summary>
The `DataWriter` instantiation is `writer = DataWriter(participant, topic)`.
</details>

<details>
<summary>Click to show hint 3.</summary>
Instantiating a fish can be done like this: `fish = CuriousFish(fish_type=FishType.Matte, dorsal_fins=6, fish_name="Harry")`.
</details>

<details>
<summary>Click to show hint 4.</summary>
Writing a fish can be done like this: `writer.write(fish)`.
</details>

<details>
<summary>Click to show the solution.</summary>

``` { .python }
quest = journal.quest("grow-the-fish-supply")
quest.start()

from cyclonedds.pub import DataWriter

writer = DataWriter(participant, topic)
quest.check("fish-writer", writer)

fish = CuriousFish(fish_type=FishType.Matte, dorsal_fins=6, fish_name="Harry")
writer.write(fish)

quest.finish()
```

</details>

## Land ahoy!

<div class="interactive-journal">
    <div class="interactive-date">June 19th, 1674</div>
    Quartermaster Koekkoek spotted a small island on the horizon! We are setting sail towards them, and now that we are getting closer we have spotted several other islands. Hopefully we can find some fresh water to replenish our stores and some additions to our food supply would be very appreciated too.
</div>

Let's put together what we learned so far. Create a new `Island` datatype with an X and Y coordinate as floating points, a floating point Size and a string name. Then create a topic named `DisposedAtolls` and write a new island within `10` near the center `(0,0)` with a size between 1 and 10. Lastly create a reader and read all the samples.

<hr>

> Tasks:
>
> *  Create the `Island` datatype and pass it to `quest.check("island", Island)`.
>    *  You will have to annotate the `Island.name` as `key`. An example is provided.
> *  Create the `DisposedAtolls` topic.
> *  Create a `DataWriter` and write a central island. Then check the writer with `quest.check("writer-written", writer)`
> *  Create a `DataReader` and read all samples. Check your resulting set of samples with `quest.check("the-disposed-atolls", islands)`
>
> Notes:
>
> *  You will have to create the reader before you write the new island sample to be able to receive it.
> *  You can use `reader.take(N=100)`
>    *  `N=100` means a maximum of 100 but doesn't block, it returns how many it has now.

``` { .python .code-cell }
quest = journal.quest("land-ahoy")
quest.start()

from cyclonedds.idl.annotations import key

# You will have to annotate the Island.name as key. Here is an example of how to do that

class Person(IdlStruct):
    a: int
    key('a')


@dataclass
class Island(IdlStruct):
    pass

quest.check("island", Island)
participant = ...
topic = ...
writer = ...
reader = ...

# create central island
island = ...

# write central island

quest.check("writer-written", writer)

# read all islands
islands = ...
quest.check("the-disposed-atolls", islands)
quest.finish()
```


> There are no hints for this quest, it is composed of familiar parts. Try to go back to previous quests for inspiration.

<details>
<summary> Click to show the solution.</summary>

``` { .python }
from cyclonedds.idl.annotations import key

quest = journal.quest("land-ahoy")
quest.start()

@dataclass
class Island(IdlStruct):
    X: float
    Y: float
    size: float
    name: str
    key('name')

quest.check("island", Island)
participant = DomainParticipant()
topic = Topic(participant, "DisposedAtolls", Island)
writer = DataWriter(participant, topic)
reader = DataReader(participant, topic)

# write central island
writer.write(Island(X=0.7, Y=-6.6, size=4, name="Dominio"))
quest.check("writer-written", writer)

# read all islands
islands = reader.take(N=100)
quest.check("the-disposed-atolls", islands)

quest.finish()
```

</details>


Well that covers some of the DDS basics, enough to write a simple application. There is much more to explore, you can continue to the next chapter to continue learning.
