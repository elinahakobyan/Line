import { Sprite, Texture } from 'pixi.js'



export class Bar extends Sprite {

    constructor() {
        super(Texture.from('bar'));
        this.anchor.set(0.5)
        this.width = 400
        this.height = 320
        this.position.set(270, 250)

    }
}
