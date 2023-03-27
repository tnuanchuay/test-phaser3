import { GameObjects, Physics, Scene } from "phaser"
export class Logo{
    private image: Physics.Arcade.Image;
    
    Object() {
        return this.image;
    }

    constructor(scene: Scene) {
        this.image = scene.physics.add.image(100, 100, 'logo');

        this.image.setVelocity(100, 200);
        this.image.setBounce(1, 1);
        this.image.setCollideWorldBounds(true);
    }
}