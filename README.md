# node-baidu-trans-api
百度翻译API的封装 node.js版本

##使用方法
1. 在[百度翻译官网](http://api.fanyi.baidu.com/api/trans/product/index)申请接入
2. 打开管理控制台，将APP ID与密钥填写在config.example.js中，更改文件名为config.js，补全salt等信息(也可以在代码中随机产生)
3. 引入文件并使用。
```
const transapi = require('./transapi.js');

let postData = {
	q: 'a group of men standing next to each other',
	from: 'en',
	to: 'zh'
}

transapi.translate(postData, (res)=>{
	if(res){
		console.log(res);
	}
})
```
