---
Title:       What XTypes can do for you
Author:      Thijs Miedema
Date:        2022-05-11
Template:    plain_markdown
---

# What XTypes can do for you

With the Cyclone DDS 0.9.0 (Papillons) release we gained support for XTypes. This addition to DDS is covered by a long [specification by the OMG](https://www.omg.org/spec/DDS-XTypes/) that, while quite useful as implementor, might not make immediately clear to you as application developer as to why it is useful. I've gathered here a non-exhaustive list of the new features you can now use.

## Evolving Datamodels

With XTypes comes support for _annotations_ in IDL. These are applied to entities in IDL as to inform how they should be serialized. Our focus here are the new `@appendable` and `@mutable` which allow for updates to a datamodel while maintaining backwards compatibility. Closely related is `@final` which is the behaviour you're used to pre-XTypes.

```omg-idl
@appendable
struct Foo_v1 {
    @key long id;
};

@appendable
struct Foo_v2 {
    @key long id;
    long value;
};
```

With `@appendable` you can _append_ fields at the end of a struct while still allowing communication. When receiving data with more fields then you have definitions for the extra data is simply ignored. When receiving less fields then you defined the missing fields are _zero-initialized_. You are not allowed to change the order of fields or remove any `@key` fields. (`@key` is the XTypes equivalent of the old `#pragma keylist` and you are encouraged to switch over).

```omg-idl
@mutable
@autoid(HASH)
struct Foo_v1 {
    @key long id;
};

@mutable
@autoid(HASH)
struct Foo_v2 {
    long value;
    @key long id;
};
```

With `@mutable` all bets are of with respect to ordering and fields present. The same story about ignoring extra and _zero-initializing_ missing fields as with `@appendable` applies, as does the `@key` story. You might notice the `@autoid(HASH)` here, which I recommend you use but is not the default as per the OMG specification. To detect whether a field is present or missing _member-ids_ are used, and by default they are `SEQUENTIAL`, meaning they are simply numbered from the start of the struct to the end. This gets _real_ messy with inheritance and shuffling of fields in the mix, basically defeating the point of `@mutable` all together. You can also explicitly set the ids yourself by manually applying `@id(some_integer)` to each field, but that sounds like a hassle to me.

## Bitmasks

Ever found yourself needing to send a set of booleans, something like this?

```omg-idl
struct Settings {
    boolean runParticleSurveyor;
    boolean dropLunarPinpointer;
    boolean disableDisplacementEntangler;
    boolean rectifyMesonScanner;
    boolean douseKirchoffMixer;
    boolean engorgeLockeDisentangler;
    boolean heatIonOscillator;
    boolean setBurnellTinkerer;
};
```

And did you then realize, to your horror, this thing takes up eight bytes of space when encoded? Well, introducing the bitmask:

```omg-idl
bitmask Settings {
    runParticleSurveyor,
    dropLunarPinpointer,
    disableDisplacementEntangler,
    rectifyMesonScanner,
    douseKirchoffMixer,
    engorgeLockeDisentangler,
    heatIonOscillator,
    setBurnellTinkerer
};
```

The bitmask makes sure that the set of booleans is packed into a single integer. This of course comes at some runtime cost with the gains in lower bandwidth. Oh one more caveat: you might still be horrified that the above bitmask still costs four bytes to encode, since the default integer size used is a 32bit integer. This can be controlled with the `@bit_bound` annotation:

```omg-idl
@bit_bound(8)
bitmask Settings {
    runParticleSurveyor,
    dropLunarPinpointer,
    disableDisplacementEntangler,
    rectifyMesonScanner,
    douseKirchoffMixer,
    engorgeLockeDisentangler,
    heatIonOscillator,
    setBurnellTinkerer
};
```

Now the bandwidth is minimized to one byte. The `@bit_bound` also works on `enum`s, which are also encoded as 32bit integer by default.

## Dynamic type discovery

At the time of writing dynamic type discovery is only implemented on the `Python` language backend. It allows you to dynamically construct the datatype with serializers from so-called type identifiers which can be discovered over the network. These type identifiers are included in the `DCPSPublication` and `DCPSSubscription` built-in topics and can be passed to `cyclonedds.dynamic.get_types_for_typeid` to construct the datatype. This gives you the power to build tools that do not require pre-compilation of IDL files for `Python` but dynamically discover and subscribe to topics and, for example, format the data as human-readable text.