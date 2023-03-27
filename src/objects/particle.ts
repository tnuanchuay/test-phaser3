import { GameObjects, Scene } from 'phaser';

export class Particle {
    private particle: GameObjects.Particles.ParticleEmitterManager;

    constructor(scene: Scene) {
        this.particle = scene.add.particles('red');
    }

    Object() {
        this.particle;
    }

    AutoEmitter() {
        var emitter = this.particle.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        return emitter;
    }
}