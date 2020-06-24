export class Player {
    constructor(canvas, x_pos, y_pos, ctx) {
        this.canvas = canvas
        this.x_pos = x_pos
        this.y_pos = y_pos
        this.ctx = ctx
    }

    draw () {
        this.ctx.beginPath()
        this.ctx.fillStyle = '#000'
        this.ctx.arc( this.x_pos, this.y_pos, 20, 0, Math.PI * 2, true)
        this.ctx.fill()
    }
}