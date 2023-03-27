import { Types, Game } from 'phaser'
import { SceneA } from './scene';

export const config: Types.Core.GameConfig = {
    width: '100vw',
    height: '100vh',
    title: 'content',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200,
            }
        }
    },
    scene: [new SceneA()]
};

export class SimpleGame extends Game {
    constructor(config: Types.Core.GameConfig) {
        super(config);
    }
};

