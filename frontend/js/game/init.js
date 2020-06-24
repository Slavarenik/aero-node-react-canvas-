import { Puck } from './puckClass'
import { Player } from './playerClass'
import { collide } from './collide'
import { getPlayerSpeed } from "./getPlayerSpeed"

export const init = ( id ) => {
    const canvas = document.getElementById(id)
    const ctx = canvas.getContext('2d')
    const cx = 20
    const cy = 20
    const friction = 0.015

    let speed = { x: 0, y: 0 }

    canvas.width = 550
    canvas.height = 300

    // Player position on mouse move
    canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect()
        let mouse_pos = {
            x: 0,
            y: 0
        }

        mouse_pos.x = e.clientX - rect.left
        mouse_pos.y = e.clientY - rect.top

        player1.x_pos = e.clientX - rect.left
        player1.y_pos = e.clientY - rect.top
    })

    let player1 = new Player(canvas, 0, 0, ctx)
    let puck = new Puck(50, 50, cx, cy, 20, ctx, canvas, friction)

    // get player speed interval
    setInterval( () => {
        getPlayerSpeed(player1, speed).then( res => {
            speed = {
                x: res.x_speed/5,
                y: res.y_speed/5
            }
        })
    }, 200)

    const animate = () => {
        ctx.clearRect(0,0,550,300)
        puck.draw()
        player1.draw()

        collide( player1, puck, speed )

        requestAnimationFrame(animate)
    }

    animate()
}