import { Sprite, Texture } from 'pixi.js'

export class Ball extends Sprite {

    constructor(frame) {
        super(Texture.from(frame));

        this.anchor.set(0.5)
    }
}