import { Sprite, Texture } from 'pixi.js'
import { Ball } from '../src/ball'

export class Cell extends Sprite {

    constructor() {
        super(Texture.from('button'));
        this.anchor.set(0.5)
    }

    isEmpty() {
        return !this.ball
    }

    setBall(ball) {
        this.addChild((this.ball = ball))
    }

    activate() {
        this.ball.alpha = 0.5

        return this
    }

    deactivate() {
        this.ball.alpha = 1

        return this
    }
    remove() {
        if (this.ball) {
            this.ball.destroy();
            this.ball = null;
        }

    }
}