/**
	 *棋盘（背景）类 
	 */
	function DrawBackGround(){
		this.drawBack = function(){
			//  绘制横线
			for (var i = 0; i <= rows;i++) {
				context.beginPath();
				context.moveTo(0,i * boxSize);
				context.lineTo(boxSize * cols,i * boxSize);
				context.closePath();
				context.strokeStyle = "gray";
				context.stroke();
				context.save();			
			}
			// 绘制竖线
			for (var i = 0;i <= cols;i ++) {
				context.beginPath();
				context.moveTo(i * boxSize,0);
				context.lineTo(i * boxSize,boxSize * rows);
				context.closePath();
				context.strokeStyle = "gray";
				context.stroke();
				context.save();
			}
		
		}
	}