{% for f in [
    "ddspy_read_participant",
    "ddspy_take_participant",
    "ddspy_read_endpoint",
    "ddspy_take_endpoint",
    "ddspy_write",
    "ddspy_write_ts",
    "ddspy_dispose",
    "ddspy_writedispose",
    "ddspy_writedispose_ts",
    "ddspy_dispose_handle",
    "ddspy_dispose_handle_ts",
    "ddspy_register_instance",
    "ddspy_unregister_instance",
    "ddspy_unregister_instance_handle",
    "ddspy_unregister_instance_ts",
    "ddspy_unregister_instance_handle_ts",
    "ddspy_lookup_instance",
    "ddspy_dispose_ts",
    "ddspy_read",
    "ddspy_take",
    "ddspy_read_handle",
    "ddspy_take_handle",
    "ddspy_lookup_instance",
    "ddspy_topic_create"
] -%}
def {{f}}():
    pass
{% endfor %}

DDS_INFINITY = 0
UINT32_MAX = 0
HAS_TYPE_DISCOVERY = True
