import { Container, Sprite } from 'pixi.js'
import sampleSize from 'lodash.samplesize'
import sample from 'lodash.sample'
import { BAllS } from './constants';
import { Cell } from './cell.js'

export class Board extends Container {

    constructor(config) {
        super();

        this.config = config
        this.cells = []
        this.balls = []

        this._createCells()
        this._createBalls(this.config.spawn)
    }

    _createCells() {
        const { size } = this.config

        for (let row = 0; row < size; row++) {

            for (let col = 0; col < size; col++) {
                const cell = new Cell()
                cell.x = col * cell.width
                cell.y = row * cell.height
                this.cells.push(cell)

                this.addChild(cell)
            }
        }
    }

    _createBalls(count) {
        const emptyCells = this.cells.map((cell, index) => !cell.ball && cell)
        console.warn((emptyCells));
        for (let i = 0; i < count; i += 1) {
            const ballIndex = Math.floor(BAllS.length * Math.random())
            const frame = BAllS[ballIndex]

            const cellIndex = Math.floor(emptyCells.length * Math.random())

            const cell = emptyCells.splice(cellIndex, 1)[0]

            cell.crateBall(frame)

        }

    }
}