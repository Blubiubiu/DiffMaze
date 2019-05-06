import {resources} from "./resources"
import ResourceLoader from "../ResourceLoader"
import DataStore from "../DataStore"
import Doraemon from "./Doraemon"

class Game {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = document.getElementById("app").clientWidth;
        this.canvas.height = document.getElementById("app").clientHeight;
        this.dataStore = DataStore.getInstance();
        const loader = ResourceLoader.create(resources);
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }
    onResourceFirstLoaded(map) {
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
        this.run()
    }
    init() {
        this.dataStore
            .put('Doraemon', Doraemon)
        this.dataStore.get('Doraemon').draw();
    }
    run() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.dataStore.get('Doraemon').draw();
        requestAnimationFrame(() => this.run())
    }
    destory() {
        cancelAnimationFrame(this.run)
    }
}

export default Game