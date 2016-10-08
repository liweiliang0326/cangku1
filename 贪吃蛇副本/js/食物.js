// 食物类
function Food() {
	this.foodX = parseInt(Math.random() * cols) * boxSize;
	this.foodY = parseInt(Math.random() * rows) * boxSize;

	// 食物位置发生变化
	/*有待完善*/
	this.changeFoodPos = function() {
		this.foodX = parseInt(Math.random() * cols) * boxSize;
		this.foodY = parseInt(Math.random() * rows) * boxSize;
	}

	// 绘制食物
	this.drawFood = function() {
		context.beginPath();
		context.fillStyle = "yellow";
		context.fillRect(this.foodX, this.foodY, boxSize, boxSize);
		context.save();
	}
}