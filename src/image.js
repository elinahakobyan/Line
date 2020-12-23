import { Container, Texture } from 'pixi.js';
import { Message, Style } from './text.js';

export class Image extends Container {
  constructor(image, text, pageW, pageH) {
    super();
    this.anchor.set(0.5);
    this.image = Texture.from(image);
    this.text = new Message(text, this.style);
    this.pagew = pageW;
    this.pageH = pageH;
    this.build();
  }

  build() {
    this.buildImage();
    this.scaleChanging();
  }

  buildImage() {
    const portraitX = this.pageW / 2;
    const portraitY = (this.pageH * 9) / 20;
    const landscapeX = this.pageW / 5;
    const landscapeY = (this.pageH * 9) / 20;
    this.decidePosition(this, portraitX, portraitY, landscapeX, landscapeY);
    this.scaleChanging();
  }
  decidePosition(portraitX, portraitY, landscapeX, landscapeY) {
    if (this.pageOrintation() === 'landscape') {
      element.position.set(landscapeX, landscapeY);
    } else {
      element.position.set(portraitX, portraitY);
    }
  }
  scaleChanging() {
    if (this.pageW < this.width || this.height < this.height) {
      if (this.pageW > this.height) {
        this.scale.set(this.height / this.width);
      } else {
        this.scale.set(this.pageW / this.width);
      }
    }
  }
}
