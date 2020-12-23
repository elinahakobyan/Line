import { Sprite, Texture } from 'pixi.js';

export class Image extends Sprite {
  constructor(config) {
    // console.warn(config);
    super(Texture.from(config.image));
    this.anchor.set(0.5);
    this.portraitX = config.portraitX;
    this.portraitY = config.portraitY;
    this.landscapeX = config.landscapeX;
    this.landscapeY = config.landscapeY;
    this.pageOrintation = config.pageOrintation;
    this.pageH = config.pageH;
    this.pageW = config.pageW;
    this.build();
  }
  build() {
    this.decidePosition();
    this.scaleChanging();
  }

  decidePosition() {
    if (this.pageOrintation === 'landscape') {
      this.position.set(this.landscapeX, this.landscapeY);
    } else {
      this.position.set(this.portraitX, this.portraitY);
    }
  }

  scaleChanging() {
    if (this.pageW < this.width || this.pageH < this.height) {
      if (this.pageW > this.pageH) {
        this.scale.set(this.pageH / this.width);
      } else {
        this.scale.set(this.pageW / this.width);
      }
    }
  }
}
