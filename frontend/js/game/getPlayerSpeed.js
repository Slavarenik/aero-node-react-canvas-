export const getPlayerSpeed = async player => {
    let playerStartPos = {
        x: player.x_pos,
        y: player.y_pos
    }

    let playerEndPos = {
        x: player.x_pos,
        y: player.y_pos
    }

    let new_speed = {}

    const speedPromise = new Promise((resolve, reject) => {
        setInterval( () => {
            resolve(playerEndPos = {
                x: player.x_pos,
                y: player.y_pos
            })
        }, 300)
    })

    await speedPromise.then( val => {
        new_speed = {
            x_speed: Math.abs(playerStartPos.x - val.x),
            y_speed: Math.abs(playerStartPos.y - val.y)
        }
    })

    return new_speed
}