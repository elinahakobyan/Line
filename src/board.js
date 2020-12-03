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
    }

    _createBalls(count) {
        const emptyCells = sampleSize(this.cells.filter((cell) => !cell.ball), count)
        emptyCells.forEach(cell => {
            const frame = sample(BAllS)
            const ball = new Ball(frame)
            cell.setBall(ball)
            // console.warn(frame);
        })

        this._checkForMatch()
        this._checkForGameOver()
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
    }

    _checkForMatch(cell) {
        const { size } = this.config
        let count = 0;
        let arr = []
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const a = this.cells2D[i][j]
                const b = this.cells2D[i][j + 1]
                console.warn(a.ball);
                // console.warn(a);
                if (a & b) {
                    if ((a['ball']) && (b['ball'])) {
                        if (a['ball']['frame'] === b['ball']['frame']) {
                            count++
                            // arr.push(this.cells2D[i][j]['ball']['frame'])
                            if (count > 4) {
                                console.warn('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                                // arr.forEach(cell =>
                                //     cell.remove())
                            }
                        }
                    } else {
                        count = 0;
                        // arr = []
                    }
                }
            }

        }

    }

    _checkForGameOver() {
        // if (!this.) {
        //     console.warn('GAME OVER');
        // }
    }
}
