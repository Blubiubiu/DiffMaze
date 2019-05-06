import DataStore from "../DataStore"
import Sprite from "../Sprite"

class Doraemon extends Sprite {
    constructor() {
        const image = Sprite.getImage('doraemon');
        super(image, 0, 0, 25, 33, 0, 0, 25, 33);
        this.x = 0;
        this.y = 0;
        this.position = [{
            x: 0,
            y: 0
        }]
        this.count = 0;
        this.num = 1;
    }
    draw() {
        
        this.count++
        if (this.count >= 200) {
            this.count = 0;
            this.num += 2;
        }
        // super.draw(this.img, 25 * parseInt(this.count/50), 0, 25, 33, 25, 33, 25, 33);
        for (let i = 0; i < this.num; i++) {
            super.draw(this.img, 25 * parseInt(this.count/50), 0, 24, 33, 24 * this.position[i].x, 33 * this.position[i].y, 24, 33);
        }
    }
}

export default Doraemon