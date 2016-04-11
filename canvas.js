/**
 * Created by huangchaohui on 16/4/9.
 */
window.onload = myFunc;
function myFunc() {
  var canvas = document.getElementById('barrage');
  var ctx = canvas.getContext("2d");
  var bg = document.getElementById('barrage_bg');
  var height = bg.offsetHeight;
  var width = bg.offsetWidth;
  canvas.width = width;
  canvas.height = height;
  var colorArr = ["white"];
  var textArr = [
    "高达19999软妹币的转向奖金等你来拿!",
    "报名要钱伐!",
    "钱赞企尼玛喊你吃饭啦",
    "13种绝世武功你哈哪个?",
    "干死黄旭东!",
    "王者荣耀我来了!KOF98我来了!",
    "谁说电竞女子不如男?!",
    "给弹幕跪了_(:3」∠)_"
  ];
  ctx.font = "40px Courier New";
  var numArrL = [80, 200, 5, 200, 250, 230, 123, 213];
  var numArrT = [50, 110, 170, 230, 290, 350, 410, 470];
  setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    for (var j = 0; j < textArr.length; j++) {
      numArrL[j] -= (j + 1) * 0.6;
      ctx.fillStyle = colorArr[0];
      ctx.fillText(textArr[j], numArrL[j], numArrT[j]);
    }
    for (var i = 0; i < textArr.length; i++) {
      if (numArrL[i] <= -500) {
        numArrL[i] = canvas.width;
      }
    }
    ctx.restore();
  }, 30);
}
