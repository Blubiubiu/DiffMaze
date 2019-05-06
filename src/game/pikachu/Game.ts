import { resources } from './resources';
import ResourceLoader from '../ResourceLoader';
import DataStore from '../DataStore';
import Pikachu from './Pikachu';
import Pokeball from './Pokeball';
import Store from '../../store';

class Game {
	canvas: any;
	ctx: any;
	dataStore: any;
	private animate: any;

	d = document.getElementById('app') as HTMLElement;

	constructor(id: string) {
		this.canvas = document.getElementById(id);
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = this.d.clientWidth;
		this.canvas.height = this.d.clientHeight;
		this.dataStore = DataStore.getInstance();
		const loader = ResourceLoader.create(resources);
		loader.onLoaded((map: any) => this.onResourceFirstLoaded(map));
	}
	onResourceFirstLoaded(map: any) {
		this.dataStore.canvas = this.canvas;
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		this.dataStore.flag = false;
		this.init();
		this.run();
	}
	private check(): boolean {
		let status: boolean = true;
		let pikachuX = this.dataStore.get('Pikachu').x;
		let pikachuY = this.dataStore.get('Pikachu').y;
		let PokeballX = this.dataStore.get('Pokeball').x;
		let PokeballX1 = this.dataStore.get('Pokeball').x1;
		let PokeballY = this.dataStore.get('Pokeball').y;

		let pikachuBorder = {
			top: pikachuY + 48,
			left: pikachuX,
			right: pikachuX + 48,
			bottom: pikachuY
		};

		let PokeballBorder = {
			top: PokeballY + 13,
			left: this.canvas.width - PokeballX + 7,
			right: this.canvas.width - PokeballX,
			bottom: PokeballY
		};

		let PokeballBorder1 = {
			top: PokeballY + 13,
			left: this.canvas.width - PokeballX1 + 7 + this.dataStore.get('Pokeball').aX,
			right: this.canvas.width - PokeballX1 + this.dataStore.get('Pokeball').aX,
			bottom: PokeballY
		};

		for (let item of [ PokeballBorder, PokeballBorder1 ]) {
			if (
				pikachuBorder.bottom < item.top - 40 ||
				pikachuBorder.right < item.left ||
				pikachuBorder.left > item.right
			) {
				status = true;
			} else {
				document.getElementsByTagName('body')[0].onkeydown = (e) => {
					return false;
				};
				return false;
			}
		}
		return status;
	}
	private init() {
		this.dataStore.put('Pikachu', Pikachu);
		this.dataStore.put('Pokeball', Pokeball);
		this.dataStore.get('Pokeball').draw();
	}
	private run() {
		if (this.check()) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.dataStore.flag) {
				this.dataStore.get('Pikachu').draw('up');
			}
			document.getElementsByTagName('body')[0].onkeydown = (e) => {
				if (e.keyCode == 39) {
					this.dataStore.get('Pikachu').draw('right');
				} else if (e.keyCode == 37) {
					this.dataStore.get('Pikachu').draw('left');
				} else if (e.keyCode == 38) {
					this.dataStore.flag = true;
				}
			};
			this.dataStore.get('Pikachu').init();
			this.dataStore.get('Pokeball').draw();
			this.animate = requestAnimationFrame(() => this.run());
		} else {
			Store.commit('pikachu/saveDirection', 'bomb');
			this.destroy();
		}
	}
	destroy() {
		cancelAnimationFrame(this.animate);
		this.dataStore.destroy();
	}
}

export default Game;
