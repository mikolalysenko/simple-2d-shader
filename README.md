simple-2d-shader
================
A 2D webgl shader with a varying color attribute

**TODO: Need to add more documentation and extra configuration stuff**

## Example

```javascript
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
```

## Install

    npm install simple-2d-shader

## API

### `var shader = require("simple-2d-shader")(gl)`
Creates a simple 2D shader

## Credits
(c) 2013 Mikola Lysenko. MIT License
