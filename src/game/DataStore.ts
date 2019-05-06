class DataStore {
	static instance: DataStore;

	static getInstance(): DataStore {
		if (!DataStore.instance) {
			DataStore.instance = new DataStore();
		}
		return DataStore.instance;
	}

	canvas: any;
	res: any;
	ctx: any;
	flag: boolean = false;

	map: any;
	private constructor() {
		this.map = new Map();
	}

	put(key: any, value: any) {
		if (typeof value === 'function') {
			value = new value();
		}
		this.map.set(key, value);
		return this;
	}

	get(key: any) {
		return this.map.get(key);
	}

	destroy() {
		this.map.clear();
	}
}

export default DataStore;
