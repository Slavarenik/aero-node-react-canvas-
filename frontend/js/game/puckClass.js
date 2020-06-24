export class Puck {
    constructor( x_pos, y_pos, cx, cy, radius, ctx, canvas, friction ) {
        this.x_pos = x_pos
        this.y_pos = y_pos
        this.cx = cx
        this.cy = cy
        this.radius = radius
        this.ctx = ctx
        this.friction = friction
        this.canvas = canvas
    }

    draw () {
        // Friction
        if ( this.cx <= 0 ) {
            this.cx += this.friction
        } else {
            this.cx -= this.friction
        }

        if ( this.cy <= 0 ) {
            this.cy += this.friction
        } else {
            this.cy -= this.friction
        }
        // End friction

        // Clamp data
        if ( this.x_pos <= this.radius ) {
            this.x_pos = this.radius
            this.cx = -( this.cx / 1.5 )
        }

        if ( this.x_pos >= ( this.canvas.width - this.radius )) {
            this.x_pos = this.canvas.width - this.radius
            this.cx = -( this.cx / 1.5 )
        }

        if ( this.y_pos >= ( this.canvas.height - this.radius )) {
            this.y_pos = this.canvas.height - this.radius
            this.cy = -( this.cy / 1.5 )
        }

        if ( this.y_pos <= this.radius ) {
            this.y_pos = this.radius
            this.cy = -( this.cy / 1.5 )
        }
        // End Clamp data

        this.ctx.beginPath()
        this.ctx.fillStyle = '#ccc'
        this.ctx.arc( this.x_pos += this.cx, this.y_pos += this.cy, this.radius, 0, Math.PI * 2, true)
        this.ctx.fill()
    }
}