#version 450 core

layout(set = 0, binding = 0) uniform samplerCube samp;
layout(location = 0) in vec3 inUV;
layout(location = 0) out vec4 oColor;

void main()
{
    oColor = texture(samp, inUV);
}

