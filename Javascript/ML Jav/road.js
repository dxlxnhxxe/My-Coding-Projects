class Road {
    constructor(x, y, width, laneCount = 3) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;

        const laneWidth = this.width / this.laneCount;
        this.laneCenters = [];
        for (let i = 0; i <= laneCount; i++) {
            this.laneCenters.push(this.left + i * laneWidth);
        }
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        // Draw the left border
        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();

        // Draw the right border
        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();

        // Draw lane markings
        ctx.lineWidth = 2;
        ctx.setLineDash([20, 20]);
        for (let i = 1; i < this.laneCount; i++) {
            const x = this.left + i * (this.width / this.laneCount);
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
        ctx.setLineDash([]);
    }
}
