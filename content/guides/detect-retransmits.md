---
Title:       Detect Retransmits
Author:      Sven Trittler
Date:        2024-10-18
Template:    plain_markdown
---

# Detecting and Optimizing DDS Retransmissions with Wireshark

## Understanding DDS Retransmissions

DDS (Data Distribution Service) relies on UDP, meaning messages can be lost due to network conditions or QoS settings. With reliable QoS, lost messages must be retransmitted, which can introduce latency spikes. Retransmissions can only be detected through heartbeats, which are sent either at regular intervals or with every data message. These heartbeats signal which sequence numbers have been successfully received and indicate any missing messages that need to be retransmitted.

## Detecting Retransmissions in Wireshark

DDS retransmissions are not explicitly marked in the data stream. However, retransmissions are triggered by a NACK (Negative Acknowledgment). To identify NACKs in Wireshark, you can use the following filter `rtps.bitmap.num_bits > 0`.
This filter allows you to focus on NACKs and, in most cases, is sufficient for detecting retransmits.

You may also filter by submessage IDs:

- ACKNACK: 0x6
- NACKFRAG: 0x12

### Wireshark Example of a Retransmit

In the Wireshark screenshot below, you can see an example of a retransmission.

1. A message with sequence number 7530 is received.
2. Sequence number 7532 is received, but the heartbeat indicates that sequence 7531 was lost.
3. Sequence number 7531 is retransmitted.
4. Sequence number 7533 is received.

![`wireshark retransmit`](/images/wireshark-retransmit.jpg)

## Tuning Heartbeat Intervals for Faster Recovery

The speed at which lost data is detected and retransmitted depends on the heartbeat interval or the frequency of data transmission. By default, the heartbeat interval is set to 100 ms, but for low-rate periodic data, you can reduce this interval for example to 5 ms:
```xml
<Internal>
  <HeartbeatInterval minsched="5ms" min="5ms">5ms</HeartbeatInterval>
</Internal>
```
With this adjustment, lost data can be recovered in approximately 5.1 ms (5 ms for the heartbeat, plus ~2x50µs for network processing).


