{%- extends 'markdown.tpl' -%}

{%- block input_group -%}
{%- endblock input_group -%}

{% block data_text scoped %}
{{ output.data['text/markdown'] }}
{% endblock data_text %}
