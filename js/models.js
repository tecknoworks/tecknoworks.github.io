// Generated by CoffeeScript 1.9.3
var Cloud, Paper,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Cloud = (function(superClass) {
  extend(Cloud, superClass);

  function Cloud(options) {
    var geometry, i, plane;
    Cloud.__super__.constructor.call(this);
    this.options = options;
    plane = new THREE.Mesh(new THREE.PlaneGeometry(64, 64));
    geometry = new THREE.Geometry;
    i = 0;
    while (i < options.cloudSize) {
      plane.position.x = Math.random() * 1000 - 500;
      plane.position.y = -Math.random() * Math.random() * 200 - 15;
      plane.position.z = i;
      plane.rotation.z = Math.random() * Math.PI;
      plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
      plane.updateMatrix();
      geometry.merge(plane.geometry, plane.matrix);
      i++;
    }
    this.mesh = new THREE.Mesh(geometry, this.material());
  }

  Cloud.prototype.material = function() {
    var texture;
    texture = THREE.ImageUtils.loadTexture('imgs/cloud10.png');
    texture.magFilter = THREE.LinearMipMapLinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    return new THREE.ShaderMaterial({
      uniforms: {
        'map': {
          type: 't',
          value: texture
        }
      },
      vertexShader: document.getElementById('vs').textContent,
      fragmentShader: document.getElementById('fs').textContent,
      depthTest: false,
      transparent: true
    });
  };

  return Cloud;

})(BaseModel);

Paper = (function(superClass) {
  extend(Paper, superClass);

  Paper.FAR_AWAY = -250;

  function Paper(options) {
    var geometry, material, texture, url;
    Paper.__super__.constructor.call(this);
    this.options = options;
    url = "imgs/" + options.key + ".png";
    texture = THREE.ImageUtils.loadTexture(url, {});
    texture.minFilter = THREE.LinearFilter;
    material = new THREE.MeshBasicMaterial({
      transparent: true,
      map: texture
    });
    geometry = new THREE.PlaneGeometry(options.sX, options.sY);
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(options.x, options.y, options.z);
  }

  Paper.prototype.farAwayPosition = function() {
    return {
      x: Paper.FAR_AWAY,
      y: Paper.FAR_AWAY
    };
  };

  Paper.prototype.targetPosition = function() {
    return {
      x: this.options.tX,
      y: this.options.tY
    };
  };

  return Paper;

})(BaseModel);
