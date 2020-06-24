import React, { useEffect } from 'react'
import { init } from '../js/game/init'
import './Game.scss'

export const Game = () => {
    useEffect(() => {
        init('game')
    }, [])

    return(
        <div className="field-wrapper">
            <canvas id="game" />
        </div>
    )
}