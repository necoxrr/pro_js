//题目：对于网址字符串中含有非.的特殊字符需要全部都替换成单个"."
//例如：https://baidu&#￥）））yonghu%&&&&com
// var data = "https://baidu&#￥）））yonghu%&&&&com";
// var data = "blog!!!example!!!com/posts/2022/05";
var data = "https://baidu&#￥）））yonghu%&&&&com";
var patt1 = /[^.:\/0-9A-Za-z\s]+/g;
const replacedString = data.replace(patt1, '.');
console.log(replacedString);