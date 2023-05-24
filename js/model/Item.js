export default class Item {
    constructor(name, desc, vars) {
        this.id = Math.floor(Math.random() * 51) + 50;
        this.name = name;
        this.description = desc;
        this.vars = vars;
    }

    toggleDone() {
        this.done = !this.done;
        return this.done;
    }
    
    setOnChangeCallback() {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }
}