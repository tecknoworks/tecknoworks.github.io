// Generated by CoffeeScript 1.9.3
var TkwIntro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

TkwIntro = (function(superClass) {
  extend(TkwIntro, superClass);

  function TkwIntro() {
    TkwIntro.__super__.constructor.call(this);
    this.start_time = new Date().getTime();
    this.text = new Paper({
      key: 'text',
      x: 0,
      y: 10,
      z: 5700,
      sX: 26.4,
      sY: 3.65
    });
    this.scene.add(this.text.mesh);
    this.plane = new Paper({
      key: 'plane',
      x: 15,
      y: 12,
      z: 5700,
      sX: 8,
      sY: 5.25
    });
    this.scene.add(this.plane.mesh);
    this.cloud = new Cloud();
    this.scene.add(this.cloud.mesh);
    this.loaded = true;
    setTimeout((function(_this) {
      return function() {
        var tween;
        return tween = new TWEEN.Tween({
          y: camera.position.y
        }).to({
          y: 20
        }, 5000).easing(TWEEN.Easing.Exponential.Out).onUpdate(function() {
          return camera.position.y = this.y;
        }).start();
      };
    })(this), config.raiseDelay);
    setTimeout((function(_this) {
      return function() {
        var tween;
        return tween = new TWEEN.Tween({
          x: -50,
          y: -60
        }).to({
          x: 15,
          y: 12
        }, 4000).easing(TWEEN.Easing.Circular.In).onUpdate(function() {
          scene.plane.mesh.position.x = this.x;
          return scene.plane.mesh.position.y = this.y;
        }).start();
      };
    })(this), config.raiseDelay);
  }

  TkwIntro.prototype.tick = function(tpf) {
    var budge;
    if (!this.loaded) {
      return;
    }
    budge = 50 * tpf;
    camera.position.z -= budge;
    this.text.mesh.position.z -= budge;
    return this.plane.mesh.position.z -= budge;
  };

  TkwIntro.prototype.doMouseEvent = function(event, raycaster) {};

  TkwIntro.prototype.doKeyboardEvent = function(event) {};

  return TkwIntro;

})(BaseScene);