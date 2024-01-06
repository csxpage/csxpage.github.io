
function calculateAverage() {
    // 获取输入框中的值
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);

    // 检查输入是否为数字
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('请输入有效的数字！');
        return;
    }

    // 计算平均值
    var average = (num1 + num2 + num3) / 3;

    // 使用对话框显示结果
    alert('平均值为: ' + average.toFixed(2));
}
