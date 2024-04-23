// console.log("Hello, World!");
// 题目是：一个网址中的每个 `.` 被替换成 任意个数（>0） 的 * ，如何将替换后的字符串，重新转换为原始网址
// case 1: http://test*what*******baidu****com 
// case 2: test*what*baidu*com
// 题目：将一个网址中的'.'替换成随机个数的'*'，的字符串（// * 的个数是随机的）
// res: test.what.baidu.com
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getRandomStars(match) {
  const numStars = Math.floor(Math.random() * 10) + 1; // 随机生成 1 到 10 的星号数量
  return '*'.repeat(numStars); // 返回由随机数量的星号组成的字符串
}
rl.question('请选择要进行的转换操作：\n1. 将 "*" 转换为 "."\n2. 将 "." 转换为 "*"\n', (choice) => {
  if (choice === '1') {
    rl.question('请输入字符串:', (userInput) => {
      const replacedString = userInput.replace(/\*+/g, '.');
      console.log(replacedString);
      rl.close();
    });
  } else if (choice === '2') {
    rl.question('请输入字符串:', (userInput) => {
      const replacedString = userInput.replace(/\./g, getRandomStars);
      console.log(replacedString);
      rl.close();
    });
  } else {
    console.log('无效的选项！');
    rl.close();
  }
});




