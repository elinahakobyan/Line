import { Sprite, Texture } from 'pixi.js'
import { Ball } from '../src/ball'

var clickCount = 0
export class Cell extends Sprite {

    constructor() {
        super(Texture.from('button'));

        this.anchor.set(0.5)
    }

    crateBall(ballFrame) {
        this.ball = new Ball(ballFrame)

        this.addChild((this.ball))
    }

    checkBall() {
        if (this.ball) {
            this.activate()
            return this
        }
    }

    activate() {
        this.ball.alpha = 0.5
        return this
    }

    deactivate() {
        this.ball.alpha = 1

        return this
    }

    delete() {
        this.ball.destroy()
        this.ball = null
    }






}