import Transform from "../../lib/Transform.js";

class Model extends Transform {
  constructor(mesh) {
    super();
    this.mesh = mesh;
  }

  preRender() {
    this.updateMatrix();
    return this;
  }
}

export default Model;
