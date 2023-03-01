# Supported QoS and Features

This table represents the various QoS and features supported by CycloneDDS across the various language implementations.

| QoS / Feature 	| C Support 	| C++ Support 	| Python Support 	| Remarks 	|
|---	|---	|---	|---	|---	|
| USER_DATA 	| Yes 	| Yes 	| Yes 	|  	|
| TOPIC_DATA 	| Yes 	| Yes 	| Yes 	|  	|
| GROUP_DATA 	| Yes 	| Yes 	| Yes 	|  	|
| DURABILITY 	| Partial 	| - 	| - 	| only volatile and transient-local 	|
| DURABILITY_SERVICE 	| Partial 	| - 	| - 	| service_cleanup_delay and resource limits are not supported 	|
| PRESENTATION 	| Partial 	| - 	| - 	| only the default (INSTANCE, non-coherent, non-ordered) 	|
| DEADLINE 	| No 	| No 	| No 	|  	|
| LATENCY_BUDGET 	| Yes 	| Yes 	| Yes 	|  	|
| OWNERSHIP 	| Yes 	| Yes 	| Yes 	|  	|
| OWNERSHIP_STRENGTH 	| Yes 	| Yes 	| Yes 	|  	|
| LIVELINESS 	| Yes 	| Yes 	| Yes 	|  	|
| TIME_BASED_FILTER 	| Ongoing 	| No 	| No 	| [cyclonedds#1506](https://github.com/eclipse-cyclonedds/cyclonedds/pull/1506) 	|
| PARTITION 	| Yes 	| Yes 	| Yes 	|  	|
| RELIABILITY 	| Yes 	| Yes 	| Yes 	|  	|
| TRANSPORT_PRIORITY 	| Yes 	| Yes 	| Yes 	|  	|
| LIFESPAN 	| Yes 	| Yes 	| Yes 	|  	|
| DESTINATION_ORDER 	| Yes 	| Yes 	| Yes 	|  	|
| HISTORY 	| Yes 	| Yes 	| Yes 	|  	|
| RESOURCE_LIMITS 	|  	|  	|  	|  	|
| ENTITY_FACTORY 	| No 	| No 	| No 	|  	|
| WRITER_DATA_LIFECYCLE 	|  	|  	|  	|  	|
| READER_DATA_LIFECYCLE 	|  	|  	|  	|  	|
| CONTENT_FILTER 	| No 	| No 	| No 	|  	|
| Async Publisher 	| Yes 	| - 	| - 	| [cyclonedds#685](https://github.com/eclipse-cyclonedds/cyclonedds/pull/685) 	|