import { Scene } from 'phaser';
import { Logo } from './../objects/logo';
import { Particle } from './../objects/particle';

export class SceneA extends Scene {

    constructor() {
        super('sceneA');
    }
    
    preload() {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        const logo = new Logo(this);
        const particle = new Particle(this);
        particle.AutoEmitter().startFollow(logo.Object());
    }
}