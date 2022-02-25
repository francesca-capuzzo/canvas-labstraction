class RectSprite {
    constructor(x, y, width, height, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    update(canvas) {

        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.width || this.x < 0) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > canvas.height - this.height || this.y < 0) {
            this.speedY = this.speedY * -1;
        }
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}

class CircleSprite {
    constructor(x, y, radius, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    update(canvas) {
        this.speedX = (Math.random() < 0.02 ? MathC.randomFloatFromInterval(-1, 1) : this.speedX);
        this.speedY = (Math.random() < 0.02 ? MathC.randomFloatFromInterval(-1, 1) : this.speedY);
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > canvas.height - this.radius || this.y < this.radius) {
            this.speedY = this.speedY * -1;
        }
    }

    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill()
    }

}


