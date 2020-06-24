export const collide = (player, puck, speed) => {
    if ( Math.abs((player.x_pos - puck.x_pos)) <= puck.radius * 2
        && Math.abs((player.y_pos - puck.y_pos)) <= puck.radius * 2 ){
        if ( player.x_pos > puck.x_pos ) {
            if ( speed.x > speed.y ){
                puck.x_pos = player.x_pos - puck.radius * 2
            }
            puck.cx = -speed.x
        } else {
            if ( speed.x > speed.y ) {
                puck.x_pos = player.x_pos + puck.radius * 2
            }
            puck.cx = speed.x
        }

        if ( player.y_pos > puck.y_pos ) {
            if ( speed.y > speed.x ) {
                puck.y_pos = player.y_pos - puck.radius * 2
            }
            puck.cy = -speed.y
        } else {
            if ( speed.y > speed.x ) {
                puck.y_pos = player.y_pos + puck.radius * 2
            }
            puck.cy = speed.y
        }
    }
}