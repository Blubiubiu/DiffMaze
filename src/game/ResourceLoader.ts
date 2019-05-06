class ResourceLoader {
    private map: any;

    constructor(resources: any) {
        this.map = new Map(resources);
        for (let [key, value] of this.map) {
            const image = new Image();
            image.src = value;
            this.map.set(key, image);
        }
    }

    onLoaded(callback: Function) {
        let aleadyNum = 0;
        for (let value of this.map.values()) {
            value.onload = () => {
                aleadyNum++;
                if (aleadyNum >= this.map.size) {
                    callback && callback(this.map)
                }
            }
        }
    }

    static create(resources: any) {
        return new ResourceLoader(resources)
    }
}

export default ResourceLoader