const GameObject = require('./GameObject');

module.exports = class Entity extends GameObject {
    constructor({x = 0, y = 0}) {
        super();
        this.x = x;
        this.y = y;
    }
};