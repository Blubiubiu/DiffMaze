import DataStore from '../DataStore';
import Sprite from '../Sprite';
import Store from '../../store';

class Pikachu extends Sprite {
	x: number;
	y: number;
	private positionY: number;
	private count: number;
	private dropUp: number;
	private dropDown: number;
	private flag: boolean;

	constructor() {
		const image = Sprite.getImage('pikachu');
		super(image, 0, 96, 48, 48, 0, 0, 48, 48);
		this.x = 0;
		this.y = DataStore.getInstance().canvas.height - 48;
		this.positionY = 96;
		this.count = 0;
		this.dropUp = 10;
		this.dropDown = 0;
		this.flag = true;
	}
	draw(direction: string) {
		switch (direction) {
			case 'right':
				this.positionY = 96;
				this.x += 5;
				this.count++;
				if (this.count > 3) {
					this.count = 0;
				}
                //进入右边界
				if (this.x >= DataStore.getInstance().canvas.width) {
					Store.commit('pikachu/saveDirection', 'right');
				}

				super.draw(this.img, 48 * this.count, this.positionY, 48, 48, this.x, this.y, 48, 48);
				break;
			case 'left':
				this.positionY = 48;
				this.x -= 5;
				this.count++;
				if (this.count > 3) {
					this.count = 0;
                }
                //进入左边界
				if (this.x < 80) {
					Store.commit('pikachu/saveDirection', 'left');
				}
				super.draw(this.img, 48 * this.count, this.positionY, 48, 48, this.x, this.y, 48, 48);
				break;
			case 'up':
				if (DataStore.getInstance().flag && this.flag) {
					this.dropUp--;
					this.y -= this.dropUp * 3;
				} else if (!this.flag) {
					this.dropDown++;
					this.y += this.dropDown * 0.1;
				}
				if (this.y <= DataStore.getInstance().canvas.height - 300) {
					this.flag = false;
				} else if (this.y >= DataStore.getInstance().canvas.height - 48) {
					this.y = DataStore.getInstance().canvas.height - 48;
					DataStore.getInstance().flag = false;
					this.flag = true;
					this.dropUp = 10;
					this.dropDown = 0;
				}
				super.draw(this.img, 48 * this.count, this.positionY, 48, 48, this.x, this.y, 48, 48);
				break;
		}
	}
	init() {
		super.draw(this.img, 48 * this.count, this.positionY, 48, 48, this.x, this.y, 48, 48);
	}
}

export default Pikachu;
