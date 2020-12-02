import { Container, Sprite } from 'pixi.js'
import sampleSize from 'lodash.samplesize'
import sample from 'lodash.sample'
import { BAllS } from './constants';
import { Cell } from './cell.js'
import { Ball } from './ball';

export class Board extends Container {

    constructor(config) {
        super();

        this.config = config
        this.cells = []
        this.balls = []

        this._createCells()
        this.createBalls(this.config.spawn)
        this.checkWin()
    }

    _createCells() {
        const { size } = this.config
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const cell = new Cell()
                cell.interactive = true
                cell.on('pointerdown', () => {
                    this._onCellPointerDown(cell)
                })
                cell.x = col * cell.width
                cell.y = row * cell.height
                this.cells.push(cell)
                this.addChild(cell)
            }
        }
    }

    createBalls(count) {
        const emptyCells = this.cells.filter((cell) => !cell.ball)
        for (let i = 0; i < count; i++) {
            const ballIndex = Math.floor(BAllS.length * Math.random())
            const frame = BAllS[ballIndex]
            const cellIndex = Math.floor(emptyCells.length * Math.random())
            const cell = emptyCells.splice(cellIndex, 1)[0]
            cell.crateBall(frame)
        }
    }

    _onCellPointerDown(cell) {
        if (cell.ball) {
            this.activeCell && this.activeCell.deactivate()
            this.activeCell = cell.checkBall();

            return;
        }

        if (this.activeCell) {
            const frame = this.activeCell.ball.frame
            this.activeCell.delete()
            cell.crateBall(frame)
            this.createBalls(3)

            this.activeCell = null
        }
        this.checkWin()
    }
    checkWin() {
        for (let i = 0; i < this.cells.length; i++) {
            // if (this.cells[i].ball) {

            // }
        }


    }


}