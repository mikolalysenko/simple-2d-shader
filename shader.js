"use strict"

var createShader = require("gl-shader")

module.exports = function createSimple2DShader(gl) {
return createShader(gl,
"attribute vec2 position;\
attribute vec3 color;\
varying vec3 fragColor;\
void main() {\
  gl_Position = vec4(position, 0, 1.0);\
  fragColor = color;\
}",
"precision highp float;\
varying vec3 fragColor;\
void main() {\
  gl_FragColor = vec4(fragColor, 1.0);\
}")
}
