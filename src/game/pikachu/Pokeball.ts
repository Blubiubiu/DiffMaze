import DataStore from '../DataStore';
import Sprite from '../Sprite';

class Pokeball extends Sprite {
	x: number;
	private x1: number;
	y: number;
	private count: number;
	private aX: number;
	img: any;

	constructor() {
		const image = Sprite.getImage('pokeball');
		super(image, 0, 0, 13, 13, DataStore.getInstance().canvas.width, 0, 13, 13);
		this.x = 0;
		this.x1 = 0;
		this.y = DataStore.getInstance().canvas.height - 30;
		this.count = 0;
		this.aX = Math.random() * 500 + 500;
	}
	draw() {
		this.count++;
		this.x += 3;
		this.x1 += 3;
		if (this.count >= 15) {
			this.count = 0;
		}
		if (this.x >= DataStore.getInstance().canvas.width) {
			this.x = 0;
		}
		if (this.x1 >= DataStore.getInstance().canvas.width + this.aX) {
			this.x1 = 0;
			this.aX = Math.random() * 500 + 500;
		}
		super.draw(this.img, 14 * this.count, 0, 13, 13, DataStore.getInstance().canvas.width - this.x, this.y, 13, 13);
		super.draw(
			this.img,
			14 * this.count,
			0,
			13,
			13,
			DataStore.getInstance().canvas.width + this.aX - this.x1,
			this.y,
			13,
			13
		);
	}
}

export default Pokeball;
