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