import { Application, Sprite, Texture } from 'pixi.js';

import { Screen } from './screen.js';

export class Game extends Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xffffff,
    });
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    document.body.appendChild(this.view);
    this._loadAssets();
  }
  _loadAssets() {
    this.loader
      .add('burgundyDivan', 'assets/ui/burgundyDivan.png')
      .add('grayDivan', 'assets/ui/grayDivan.png')
      .add('orangeDivan', 'assets/ui/orangeDivan.png')
      .add('torquoiseDivan', 'assets/ui/torquoiseDivan.png')
      .add('hand', 'assets/ui/hand.png')
      .add('like', 'assets/ui/icon_like.png')
      .add('logo', 'assets/ui/logo.png')
      .add('chair1', 'assets/furniture/chair1.png')
      .add('chair2', 'assets/furniture/chair2.png')
      .add('chair3', 'assets/furniture/chair3.png')
      .add('chair4', 'assets/furniture/chair4.png')
      .add('table1', 'assets/furniture/table1.png')
      .add('table2', 'assets/furniture/table2.png')
      .add('font', 'assets/font/kenvector_future.ttf');

    this.loader.load(() => {
      this._onLoadComplete();
    });
  }

  _onLoadComplete() {
    this.build();
  }

  build() {
    this.buildTitle();
  }

  buildTitle() {
    const title = Sprite.from('logo');
    title.position.set(this.width / 2, (this.height * 1) / 5);
    this.stage.addChild(title);
  }
}
