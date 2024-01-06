// 初始状态为灯灭
var isLightOn = false;

function turnOnLight() {
    // 切换为灯亮的照片
    document.getElementById('lightImage').src = "灯亮的照片.jpg";
    isLightOn = true;
}

function turnOffLight() {
    // 切换为灯灭的照片
    document.getElementById('lightImage').src = "灯灭的照片.jpg";
    isLightOn = false;
}

// 在页面加载完成时，执行一次初始状态设置
document.addEventListener('DOMContentLoaded', function() {
    if (isLightOn) {
        turnOnLight();
    } else {
        turnOffLight();
    }
});// JavaScript Document