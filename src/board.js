import { Container, Sprite } from 'pixi.js'
import sampleSize from 'lodash.samplesize'
import sample from 'lodash.sample'
import { BAllS } from './constants';
import { Cell } from './cell.js'
import { Ball } from './ball';
import chunk from 'lodash.chunk'


export class Board extends Container {

    constructor(config) {
        super();

        this.config = config
        this.cells = []
        this.balls = []

        this._createCells()
        this._createBalls(this.config.entry)
    }

    _createCells() {
        const { size } = this.config
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const cell = new Cell()
                cell.interactive = true
                cell.on('pointerdown', this._onCellClick.bind(this, cell))
                cell.x = col * cell.width
                cell.y = row * cell.height
                this.cells.push(cell)
                this.addChild(cell)
            }
        }

        this.cells2D = chunk(this.cells, size)
        // console.warn(this.cells2D);
    }

    _createBalls(count) {
        const emptyCells = sampleSize(this.cells.filter((cell) => !cell.ball), count)
        emptyCells.forEach(cell => {
            const frame = sample(BAllS)
            const ball = new Ball(frame)
            cell.setBall(ball)
        })

        this._checkForMatch()
        this._checkForGameOver()
        this._movment()


            ;

    }

    _onCellClick(cell) {
        if (this._activeCell) {
            this._activeCell.deactivate()
        }

        if (cell.ball) {
            this._activeCell = cell.activate()
        } else if (cell.isEmpty() && this._activeCell) {
            cell.setBall(this._activeCell.ball)
            this._activeCell.ball = null
            this._activeCell = null

            this._createBalls(this.config.spawn)
        }
        // console.warn(cell.x)
        // console.warn(this._activeCell.x);
    }

    _checkForMatch(cell) {
        const { size } = this.config
        let arr = []
        let ballFrame = ''
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const cell = this.cells2D[i][j]
                if (cell && cell.ball && cell.ball.frame === ballFrame) {
                    arr.push(cell)
                } else {
                    if (arr.length <= 4) {
                        arr = []
                    } else {
                        arr.forEach(element => {
                            element.remove()
                        })
                        arr = []
                    }
                    if (cell && cell.ball && cell.ball.frame) {
                        ballFrame = cell.ball.frame
                        arr.push(cell)
                    }
                }
            }
            if (arr.length <= 4) {
                arr = []
            } else {
                arr.forEach(element => {
                    element.remove()
                })
                arr = []
            }
        }

        let arr1 = []
        let ballFrame1 = ''
        for (let j = 0; j < size; j++) {
            for (let i = 0; i < size; i++) {
                const cell1 = this.cells2D[i][j]
                if (cell1 && cell1.ball && cell1.ball.frame === ballFrame1) {
                    arr1.push(cell1)
                } else {
                    if (arr1.length <= 4) {
                        arr1 = []
                    } else {
                        arr1.forEach(element => {
                            element.remove()
                        })
                        arr1 = []
                    }
                    if (cell1 && cell1.ball && cell1.ball.frame) {

                        ballFrame1 = cell1.ball.frame
                        arr1.push(cell1)
                    }
                }
            }
            if (arr1.length <= 4) {
                arr1 = []
            } else {
                arr1.forEach(element => {
                    element.remove()
                })
                arr1 = []
            }
        }

    }

    _movment() {
        const { size } = this.config

        const matrix = []
        for (let i = 0; i < size; i++) {
            matrix[i] = []
            for (let j = 0; j < size; j++) {
                if (this.cells2D[i][j].ball) {
                    matrix[i][j] = " 1 "
                } else {
                    matrix[i][j] = " 0"
                }

            }
        }
        console.warn(matrix);


    }

    _checkForGameOver() {

    }
}
