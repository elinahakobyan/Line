import { Sprite, Texture } from 'pixi.js'
import { Board } from './board.js'

export class Ball extends Sprite {

    constructor(frame) {
        super(Texture.from(frame));
        this.frame = frame
        this.anchor.set(0.5)
    }
}