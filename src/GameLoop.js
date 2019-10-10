const GameObject = require('./models/GameObject');

module.exports = class GameLoop {
    _gameObjectList = [];
    _loopTimer = null;
    id = 0;

    _loop() {
        this._gameObjectList.forEach(gameObject => {
            gameObject.tick();
        });
    }

    start() {
        const UPS = 60;
        this._loopTimer = setInterval(() => {
            this._loop();
        }, 1000 / UPS);
    }

    stop() {
        if (this._loopTimer) {
            clearInterval(this._loopTimer);
            this._loopTimer = null;
        }
    }

    addGameObject(gameObject) {
        if ((!gameObject instanceof GameObject)) {
            throw new Error('Object must be an instance of GameObject');
        }
        this._gameObjectList.push(gameObject);
    }
};