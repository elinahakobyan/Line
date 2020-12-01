import { Sprite, Texture } from 'pixi.js'
import { Ball } from '../src/ball'

export class Cell extends Sprite {

    constructor() {
        super(Texture.from('button'));

        this.anchor.set(0.5)
    }

    crateBall(ballFrame) {
        this.addChild((this.ball = new Ball(ballFrame)))
    }
}