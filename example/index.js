var shell = require("gl-now")()
var createBuffer = require("gl-buffer")
var createSimpleShader = require("../shader.js")

var shader, buffer

shell.on("gl-init", function() {
  var gl = shell.gl
  
  shader = createSimpleShader(gl)
  
  buffer = createBuffer(gl, [ 0, -1, -1, 0, 1, 1 ])
})

shell.on("gl-render", function(t) {
  shader.bind()

  buffer.bind()
  shader.attributes.position.pointer()
  shader.attributes.position.enable()

  shader.attributes.color = [1, 1, 0]

  buffer.draw(shell.gl.TRIANGLES, 3)
})
