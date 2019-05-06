// Use Vuex
import Store from '../store';

export default class Leaf {
	private timer: number = 0;
	private options: any;
	private animate: any;
	private leaves: any[] = [];

	constructor(public width: number, public height: number, public style: string[], leaves: number) {
		this.options = {
			numLeaves: leaves,
			wind: {
				magnitude: 1.2,
				maxSpeed: 12,
				duration: 300,
				start: 0,
				speed: 0
			}
		};
	}
	_resetLeaf(leaf: any) {
		leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
		leaf.y = -10;
		leaf.z = Math.random() * 200;
		if (leaf.x > this.width) {
			leaf.x = this.width + 10;
			leaf.y = Math.random() * this.height / 2;
		}
		// 初始化时，随机位置
		if (this.timer == 0) {
			leaf.y = Math.random() * this.height;
		}

		leaf.rotation.speed = Math.random() * 10;
		let randomAxis = Math.random();
		if (randomAxis > 0.5) {
			leaf.rotation.axis = 'X';
		} else if (randomAxis > 0.25) {
			leaf.rotation.axis = 'Y';
			leaf.rotation.x = Math.random() * 180 + 90;
		} else {
			leaf.rotation.axis = 'Z';
			leaf.rotation.x = Math.random() * 360 - 180;
			leaf.rotation.speed = Math.random() * 3;
		}

		// 随机speed
		leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
		leaf.ySpeed = Math.random() + 1.5;

		return leaf;
	}
	_updateLeaf(leaf: any) {
		let leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

		let xSpeed = leafWindSpeed + leaf.xSpeedVariation;
		leaf.x -= xSpeed;
		leaf.y += leaf.ySpeed;
		leaf.rotation.value += leaf.rotation.speed;

		let t =
			'translateX( ' +
			leaf.x +
			'px ) translateY( ' +
			leaf.y +
			'px ) translateZ( ' +
			leaf.z +
			'px )  rotate' +
			leaf.rotation.axis +
			'( ' +
			leaf.rotation.value +
			'deg )';
		if (leaf.rotation.axis !== 'X') {
			t += ' rotateX(' + leaf.rotation.x + 'deg)';
		}
		this.style[leaf.index] = t;
		if (leaf.x < -10 || leaf.y > this.height + 10) {
			this._resetLeaf(leaf);
		}
	}
	_updateWind() {
		if (this.timer === 0 || this.timer > this.options.wind.start + this.options.wind.duration) {
			this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
			this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
			this.options.wind.start = this.timer;

			let screenHeight = this.height;

			this.options.wind.speed = function(t: number, y: number) {
				let a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
				return a * Math.sin(2 * Math.PI / this.duration * t + 3 * Math.PI / 2) + a;
			};
		}
	}
	init() {
		for (let i = 0; i < this.options.numLeaves; i++) {
			let leaf = {
				index: i,
				x: 0,
				y: 0,
				z: 0,
				rotation: {
					axis: 'X',
					value: 0,
					speed: 0,
					x: 0
				},
				xSpeedVariation: 0,
				ySpeed: 0,
				path: {
					type: 1,
					start: 0
				},
				image: 1
			};
			this._resetLeaf(leaf);
			this.leaves.push(leaf);
		}
	}
	render() {
		this._updateWind();
		for (let i = 0; i < this.leaves.length; i++) {
			this._updateLeaf(this.leaves[i]);
		}

		this.timer++;

		this.animate = requestAnimationFrame(() => this.render());

		Store.commit('leaf/saveStyle', []);
		Store.commit('leaf/saveStyle', this.style);
	}
	destroy() {
		cancelAnimationFrame(this.animate);
	}
}
