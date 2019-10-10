const Grass = require('../Tiles/Grass');
const Map = require('./Map');

const MAP_SIZE = 200;

const buildMainCityMap = () => {
    const lines = new Array(MAP_SIZE);
    lines.forEach(line => {
        line = new Array(MAP_SIZE);
        line.forEach(column => {
            column = new Grass();
        })
    });
    return lines;
};

class MainCity extends Map {
    constructor() {
        super();
        this.map = buildMainCityMap();
    }

    addPlayer(player, x = 99, y = 99) {
        this.map[x][y].addToEntityStack(player);
        player.currentMap = this;
    }

    removePlayer(player) {
        this.map.forEach(line => {
            const tile = line.find(tile => tile.entityStack.contains(player));
            if(tile) {
                tile.popFromEntityStack();
                console.log("PLAYER REMOVED!");
            }
        });
    }

}

module.exports = MainCity;