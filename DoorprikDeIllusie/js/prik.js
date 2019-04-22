class Circle {
    constructor(x, y, radius, color) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
    }
    get radius() {
        return this._radius;
    }
    get color() {
        return this._color;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        this._x = value;
    }
    set y(value) {
        this._y = value;
    }
}

class Game {
    constructor() {
        
    }
    get circles() {
        return this._circles;
    }
    get seconds() {
        return this._seconds;
    }
    get numberRedBalls() {
        return this._numberRedBalls;
    }
    get gameTime() {
        return ++this._seconds;
    }
    createCircles() {
        
    }
    checkClick(x, y) {
        
    }
    checkEndGame() {
        
    }
}

class DPDIComponent {
    constructor(canvas, storage) {
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
        
    }
    get canvas() {
        return this._canvas;
    }
    get game() {
        return this._game;
    }
    drawGame() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this.drawCircles();
        this.showNumberRedBalls();
    }
    drawCircles() {
        this.game.circles.forEach((c) => {
            c.x = Math.random() * this._canvas.width;
            c.y = Math.random() * this._canvas.height;
            this._ctx.beginPath();
            this._ctx.arc(c.x, c.y, c.radius, 0, 2 * Math.PI, true);
            this._ctx.fillStyle = c.color;
            this._ctx.fill();
        });
    }
    showNumberRedBalls() {
        
    }
    startChronometer() {
        
    }
    stopChronometer() {
        
    }
    checkClick(x, y) {
        
    }
    showTime() {
        
   }
    getTimeRecordFromStorage() {
        
    }
    setTimeRecordInStorage() {
        
    }
    showRecordTime() {
        const recordTime = this.getTimeRecordFromStorage()?parseInt(this.getTimeRecordFromStorage()):Number.MAX_VALUE;
        document.getElementById('tt').innerHTML = recordTime === Number.MAX_VALUE?
            "Nog geen toptijd":convertSeconds(recordTime);
    }
    checkEndGame() {
        return this._game.checkEndGame();
    }
    stopGame() {
        
    }
}
const convertSeconds = function(seconds){
    const m = parseInt(seconds / 60); 
    const min = m < 10 ? `0${m}` : m;
    const s = seconds % 60;
    const sec = s < 10 ? `0${s}` : s;
    return `${min}:${sec}`;  
}
const init = function () {
    const canvas = document.getElementById("gameCanvas");
    
}
window.onload = init;