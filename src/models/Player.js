const Entity = require('./Entity');

class Player extends Entity {
    constructor({x, y} = {}) {
        super({x, y});
        this.onMoved = () => null;
    }

    tick() {
        super.tick();
    }

    move(x = this.x, y = this.y) {
        this.x = x;
        this.y = y;
        this.onMoved();
    }
}

module.exports = Player;