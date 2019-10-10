class Tile {
    itemStack = [];
    entityStack = [];

    addToItemStack(item) {
        this.itemStack.push(item);
    }

    removeFromItemStack(item) {
        // this.itemStack.remove(item);
    }

    popFromitemStack() {
        this.itemStack.pop();
    }

    addToEntityStack(entity) {
        this.entityStack.push(entity);
    }

    removeFromEntityStack(entity) {
        this.entityStack.remove(entity);
    }

    popFromEntityStack() {
        this.entityStack.pop();
    }
}

module.exports = Tile;