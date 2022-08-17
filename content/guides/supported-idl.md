---
Title:       What syntax and datatypes are supported in IDL
Author:      Thijs Miedema
Date:        2022-08-17
Template:    plain_markdown
---

# What syntax and datatypes are supported in IDL

This is a fairly plain description of what is and isn't supported in IDL for CycloneDDS.

[TOC]

# Datatypes

## Primitive types

| Name                            | Description                                                       |
|---------------------------------|-------------------------------------------------------------------|
| `int8`                          | Signed 8 bit integer                                              |
| `int16`, `short`                | Signed 16 bit integer                                             |
| `int32`, `long`                 | Signed 32 bit integer                                             |
| `int64`, `long long`            | Signed 64 bit integer                                             |
| `uint8`                         | Unsigned 8 bit integer                                            |
| `uint16`, `unsigned short`      | Unsigned 16 bit integer                                           |
| `uint32`, `unsigned long`       | Unsigned 32 bit integer                                           |
| `uint64`, `unsigned long long`  | Unsigned 64 bit integer                                           |
| `char`                          | Single character byte, signed or unsigned depending on platform   |
| `octet`                         | Single byte                                                       |
| `boolean`                       | True or false                                                     |
| `float`                         | 32 bit floating point                                             |
| `double`                        | 64 bit floating point                                             |

Explicitly **unsupported** are `wchar` and `long double`. We do not bind the `int` type to nudge users to specify how many bits they need.

## Template types

| Name                     | Description                                                                       |
|--------------------------|-----------------------------------------------------------------------------------|
| `string`                 | A string without bounds, length is encoded as 32 bit integer, so maximum is 4GB.  |
| `string<$bound>`         | A string with a maximum of `$bound` characters (excluding null terminator for C). |
| `sequence<$type> `       | A sequence (indexed container) of `$type` without bounds (still maximum 4GB).     |
| `sequence<$type,$bound>` | A bounded sequence of `$type` with maximum `$bound` entries.                      |

Explicitly **unsupported** right now are `wstring` and `fixed`. `map` is also unsupported by C and IDL but you can use a `Dict` in Python, which will not inter-operate.

## Structs

A struct is a named collection of typed members.

```omg-idl
struct A {
    type member;
};
```

It must be proceeded by a `;`. Any member can be turned into an array by adding `[$size]` after the member name.

### Inheritance

Structs support inheritance. They behave as if the parents members where copied into the inheriting struct.

```omg-idl
struct B : A {
    type member;
};
```

## Unions

A union in IDL is a discriminated union which maps labels to a single member.

```omg-idl
union A switch (discriminator) {
    case value:
        type1 member1;
    default:
        type2 member2;
};
```

The `discriminator` can be any integer type or an enum. `value` can be any constant value expression. It must be proceeded by a `;`. Any member can be turned into an array by adding `[$size]` after the member name.

## Enums

An enum is a collection of literals.

```omg-idl
enum A {
    ALITERAL,
    BLITERAL
};
```

It must be proceeded by a `;`.

## Bitmasks

A bitmask is a collection of boolean flags. They will be packed into integers, making them better than structs with a set of booleans when bandwidth matters.

```omg-idl
bitmask A {
    flag_a,
    flag_b
};
```

It must be proceeded by a `;`.

## Typedefs

A typedef is a named alias for another type.

```omg-idl
typedef sequence<octet> blob;
typedef double Point3D[3];
```

It must be proceeded by a `;`. Any type can be turned into an array by adding `[$size]` after the typedef name.

## Modules

A module is a namespace that can contain structs, unions, enums, bitmasks, typedefs and other modules.

```omg-idl
module A {
    struct B {
        char C;
    };
};
```

It must be proceeded by a `;`.

## Bitsets

Bitsets are not supported.


## Constants

A constant can be declared in IDL. It is purely for use inside IDL itself as it is not mapped to the target language.

```omg-idl
const long long some_value = 12 * 42
```

# Annotations

Annotations are an extension on the IDL syntax as introduced by [XTypes](https://www.omg.org/spec/DDS-XTypes/). What follows is an exhaustive set of everything we currently support.

## `@key`

Used to mark struct members as key.

```omg-idl
struct A {
    @key uint16 member;
};
```

Limitations:

 * A union cannot be part of a key.
   * The `union A switch (@key short)` syntax is also unsupported.
 * A sequence cannot be part of a key.

Note: the old `#pragma keylist` will be converted into the equivalent `@key` annotated version. There are `keylist`s possible that cannot be converted into `@key` style annotations: these will be rejected by the IDL compiler.

## Extensibility `@final`, `@appendable` and `@mutable`

Used to mark the extensibility of a struct, union, bitmask or enum. Can also be applied to a module to set the default for all nested entries.

Notes:

 * `@mutable` is only supported for structs.
 * The CycloneDDS IDL compiler takes as default extensibility `@final` while the standard says it should be `@appendable`. By taking `@final` as the default your types stay compatible with non-XTypes DDS.

## `@external`

Used to make a "non-pointer-type" a "pointer-type". Could be applied to things that are already "pointer-type" like strings but will do nothing.

## `@optional`

Used to make a struct or union member optional (nullable). Often implies `@external`.

## `@bit_bound`

Annotate how many bits a enum or bitmask can use.

## `@autoid`

Can be `HASH` or `SEQUENTIAL`. Used to match struct or union members when type evolution is used. When using struct inheritance `@autoid(HASH)` is strongly recommended. Can be applied to unions or structs. Can be applied to modules to set the default for all nested entries.

## `@id`

Set the member id of a member of a union or struct explicitly.

## `@hashid`

Calculate the id of this member by hashing the name of the member or hashing a string you supply.

## `@value`

Set the value of an enumerator in an enum manually.

## `@position`

Set the bit position of an field in a bitmask manually.

## `@must_understand`

Used to mark a member in a `@mutable` struct as `must_understand`. This means the type match will be rejected if that field is not present in the others type representation. `@key` implies `@must_understand`.

## `@data_representation`

Used to mark what data representations are allowed for a struct or union. Can be applied to modules to set the default for all nested entries. Values are `XCDR1` and `XCDR2`. Value `XML` is accepted but this data representation is not supported by CycloneDDS.

## `@nested`

Do not generate topic descriptor for this type.

## `@topic`

Generate topic descriptor for this type (the default).

## `@default_nested`

Annotate a module so all contained entities are `@nested` by default.

# Unsupported annotations

The IDL compiler will generally accept this syntax, but these annotations are unimplemented:

 * `@default` (support is planned)
 * `@default_literal` (support is planned)
 * `@unit` (support is planned)
 * `@min` (support is planned)
 * `@max` (support is planned)
 * `@try_construct` (support is planned)
 * `@verbatim`
 * `@ami`
 * `@service`
 * `@ignore_literal_names`
 * `@non_serialized`
