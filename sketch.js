let points = [[0.5, -3], [-0.5, -8], [0, -9],[1,-9.5],[2,-9.5],
[2,-8.5],[1,-7.5],[4,-3],[6,-3],[14,-10],[15,-10],[16,-9],
[15.5,-8],[15,-8],[11,-4],[10,0],[10.5,2],[12,3.5],[14,3],[15,4],
[15,5],[14,6.5],[13.5,7.5],[12.5,8],[11.5,9.5],[10,8],[8,7],
[6,5.5],[4,5.6],[0,6.5],[-6,7.5],[-9,7],[-10,7],[-12,9],[-12.5,11],
[-12.5,12.5],[-11,14],[-10,14.2],[-9.5,13.5],[-9,13.5],[-9,15],
[-10,16],[-11,16.5],[-13,16],[-15,14],[-15.3,12.6],[-15,10],
[-14,7],[-12.5,5],[-13,0],[-16,-3],[-17,-7],[-16,-9],[-15,-9],
[-15,-8],[-15.5,-7.5],[-15,-5],[-10.5,-3],[-10,-4],[-11,-6],
[-8,-9.5],[-6,-10],[-5,-9],[-5.5,-8.5],[-6.2,-8.5],[-8,-6],
[-7,-5.5],[-6,-3],[-2,-2]]; //list資料，cat

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); 
  //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
	ctx = canvas.getContext('2d');
	ctx.lineWidth =5;
	ctx.lineCap = 'round'
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 10; //把points 內的值都*10
    }
  }
}

function draw() {
  gradientLine(ctx,10,300,100,60, "#6C3365", "#FF9797") //由咖啡色漸層至紅色
  background(245);
  //translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  //scale(1, -1);  //上下翻轉
  textSize(50)  //文字大小
  fill("#5A5AAD");  //設定顏色
  text("CAT",10+mouseX,-85+mouseY)  //顯示文字
  for (let i = 0; i < points.length-1; i++) {
    line(mouseX-points[i][0], mouseY-points[i][1], mouseX-points[i+1][0], mouseY-points[i+1][1]);
  }
  line(mouseX-points[points.length-1][0], mouseY-points[points.length-1][1], mouseX-points[0][0], mouseY-points[0][1]); 
  //最後一點跟第一點連線
    
function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);
  ctx.moveTo(x1*3, y1*3);ctx.lineTo(x2*3, y2*3);
  ctx.moveTo(x1*6, y1*6);ctx.lineTo(x2*6, y2*6);
  ctx.moveTo(x1*10, y1*10);ctx.lineTo(x2*10, y2*10);
  ctx.moveTo(x1*15, y1*15);ctx.lineTo(x2*15, y2*15);
  ctx.stroke();
  }
}