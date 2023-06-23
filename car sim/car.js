AFRAME.registerComponent("carModel", {
    schema: {
      modelRef: { type: "string", default: "../assets/car/scene.gltf" }
    },
    init: function() {
       this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = { x: 0, y: 50, z: 80 };
        const rotation = { x: 0, y: -90, z: 0 };
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
      }
    });