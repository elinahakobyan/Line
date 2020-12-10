import EventEmitter from 'eventemitter3'
import { Application } from 'pixi.js'
import { Board } from './board.js'

const emitter = new EventEmitter()

export function getEmiter() {
    return emitter
}

export class Game extends Application {
    constructor() {
        super({
            width: window.innerWidth,
            height: window.innerHeight
        })

        document.body.appendChild(this.view)
        this._loadAssets()
        const emmiter = getEmiter()

        emitter.on("game_over", this.gameOver, this)
    }

    _loadAssets() {
        this.loader.add('button', 'assets/grey_button13.png')
            .add('ball1', 'assets/blue_circle.png')
            .add('ball2', 'assets/blue_boxTick.png')
            .add('ball3', 'assets/green_boxTick.png')
            .add('ball4', 'assets/green_circle.png')
            .add('ball5', 'assets/red_boxTick.png')
            .add('ball6', 'assets/red_circle.png')
            .add('ball7', 'assets/yellow_boxTick.png')
            .add('ball8', 'assets/yellow_circle.png')
            .add('bar', 'assets/bar.png')
            .add('button1', 'assets/button.png')
        this.loader.load(() => {
            this._onLoadComplete()
        })
    }

    _onLoadComplete() {
        this._board = new Board({
            entry: 5,
            spawn: 3,
            size: 8
        })
        this._board.position.set(100, 100)
        this.stage.addChild(this._board)
    }
    gameOver() {
        this._board.destroy()
        this._onLoadComplete()
    }
} 