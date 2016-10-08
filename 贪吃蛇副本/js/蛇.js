/*
 * 蛇类
 */
function Snake() {
	//1身体的长度
	this.bodyLength = 4;
	// 2各节身体的位置数组
	// 数组里面存储的是对象{x:... ，y:...}
	this.locationArray = [];
	for(var i = 0; i < this.bodyLength; i++) {
		var pos = {
			x: i * boxSize,
			y: 0
		};
		this.locationArray.push(pos);
	}
	//3 方向
	// 规定：0-左，1-右 2-上  3-下
	this.direction = 1;

	//行为1 绘制身体
	this.drawSnakeBody = function() {
		// 根据locationArray里面存储的坐标信息绘制
		for(var i = 0; i < this.bodyLength; i++) {
			//		 		this.locationArray[i].y
			context.beginPath();
			if(i == this.bodyLength - 1) {
				context.fillStyle = "red";
			} else {
				context.fillStyle = "black";
			}
			context.fillRect(this.locationArray[i].x, this.locationArray[i].y, boxSize, boxSize);
			context.strokeStyle = "white";
			context.strokeRect(this.locationArray[i].x, this.locationArray[i].y, boxSize, boxSize);
			context.save();

		}

	}

	// 蛇的移动
	this.moveSnake = function() {
		// 规定：0-左，1-右 2-上  3-下
		switch(this.direction) {
			case 0:
				{
					var nextPos = {
						x: this.locationArray[this.bodyLength - 1].x - boxSize,
						y: this.locationArray[this.bodyLength - 1].y
					};
					// 把新坐标添加到蛇的数组里面
					this.locationArray.push(nextPos);
					break;
				}
			case 1:
				{
					var nextPos = {
						x: this.locationArray[this.bodyLength - 1].x + boxSize,
						y: this.locationArray[this.bodyLength - 1].y
					};
					// 把新坐标添加到蛇的数组里面
					this.locationArray.push(nextPos);
					break;
				}
			case 2:
				{
					var nextPos = {
						x: this.locationArray[this.bodyLength - 1].x,
						y: this.locationArray[this.bodyLength - 1].y - boxSize
					};
					this.locationArray.push(nextPos);
					break;
				}
			case 3:
				{
					var nextPos = {
						x: this.locationArray[this.bodyLength - 1].x,
						y: this.locationArray[this.bodyLength - 1].y + boxSize
					};
					this.locationArray.push(nextPos);

					break;
				}
			default:
				break;
		}

		// 移除蛇尾，移除数组第一个元素
		this.locationArray.shift();
		// 重新绘制
		this.drawSnakeBody();

	}

	// 增加身体的方法
	this.addBody = function() {
		this.bodyLength++;
		var e = {
			x: 0,
			y: 0
		};
		this.locationArray.unshift(e);
	}

}