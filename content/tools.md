# Tools

Tools are important to learn about your DDS System.
CycloneDDS provides two tools, a graphical tool and a command-line tool.

Especially when DDS systems grow larger debugging and monitoring getting more and more important.

- Which applications are online?
- Why does app x does not receive data from app y?
- On which domain is running what?
- Is my system healthy?
- etc

To answer these questions tools are essential.

## CycloneDDS Insight

CycloneDDS Insight is a graphical tool to visualize the current DDS system.

The tool can be [downloaded here](https://github.com/eclipse-cyclonedds/cyclonedds-insight).

![`cyclonedds insight`](/images/cyclonedds-insight.png)

What it can do:

- Show topics
- Show reader/writer on a topic
- Show qos of each reader/writer
- Show qos mismatches
- Dark and light mode support
- Runs on MacOS, Windows, Linux

And even more features to come!

## CycloneDDS Commandline Tool

The commandline tool `cyclonedds` provides informations about the DDS system via console. Click [here](https://github.com/eclipse-cyclonedds/cyclonedds-python?tab=readme-ov-file#command-line-tooling) for more details.
