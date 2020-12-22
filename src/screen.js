import { Message, Style } from './text.js';
import { Container } from 'pixi.js';
export class Screen extends Container {
  constructor(config) {
    super();
  }
  build() {
    this.buildTitle();
  }

  buildTitle() {}
}
