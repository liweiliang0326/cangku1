// 操作类
	function HandleGame(){
		// 1、有没有死亡
		this.isDieHandle = function(aSnake){
			// 碰撞检测
			// 1、碰到边界的时候死亡
			// 蛇头 x < 0 || x = boxSize * cols y < 0 || y = boxSize * rows
			var snakeHead = aSnake.locationArray[aSnake.bodyLength - 1];
				if (snakeHead.x < 0 || snakeHead.x == boxSize * cols || snakeHead.y < 0 || snakeHead.y == boxSize * rows) {
					alert("game Over");
					// 让蛇停止移动
					clearInterval(timer);
					
				}
			// 2、碰到自己身体的时候死亡
			for (var i = 0; i < aSnake.bodyLength - 1;i++) {
				if (snakeHead.x == aSnake.locationArray[i].x &&  snakeHead.y == aSnake.locationArray[i].y) {
					alert("game Over");
					// 让蛇停止移动
					clearInterval(timer);
					break;
					
				}
			}
		}
		
		// 判断是否吃了食物
		this.isEatFood =  function(aSnake,aFood){
			// 拿出蛇头
			var snakeHead = aSnake.locationArray[aSnake.bodyLength - 1];
			
			if (snakeHead.x == aFood.foodX && snakeHead.y == aFood.foodY) {
				// 吃到了食物
				//1、蛇长度加1
				//2、蛇的身体（locationArray）多一个元素
				aSnake.addBody();
				//3、改变下一次食物的位置
				aFood.changeFoodPos();
				// 4、加分
				score += 10;
				scoreDiv.innerHTML = "分数:" + score;
			}
			
			
		}
		
	}