import DataStore from './DataStore';

class Sprite {
	dataStore: any;
	ctx: any;
	img: any;
	private cutX: number;
	private cutY: number;
	private cutW: number;
	private cutH: number;
	x: number;
	y: number;
	private width: number;
	private height: number;

	constructor(
		img = null,
		cutX: number,
		cutY: number,
		cutW: number,
		cutH: number,
		x = 0,
		y = 0,
		width = document.documentElement.clientWidth,
		height = document.documentElement.clientHeight
	) {
		this.dataStore = DataStore.getInstance();
		this.ctx = this.dataStore.ctx;
		this.img = img;
		this.cutX = cutX;
		this.cutY = cutY;
		this.cutW = cutW;
		this.cutH = cutH;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	static getImage(key: string) {
		return DataStore.getInstance().res.get(key);
	}
	draw(
		img = this.img,
		cutX = this.cutX,
		cutY = this.cutY,
		cutW = this.cutW,
		cutH = this.cutH,
		x = this.x,
		y = this.y,
		width = this.width,
		height = this.height
	) {
		this.ctx.drawImage(img, cutX, cutY, cutW, cutH, x, y, width, height);
	}
}

export default Sprite;
