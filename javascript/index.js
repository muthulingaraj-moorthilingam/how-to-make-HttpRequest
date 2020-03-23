document.getElementById('XML').addEventListener("click",xmlrequest);

function xmlrequest(){
	var xmlRequest = new XMLHttpRequest();//create xmlHttprequest constructor initilize

	xmlRequest.open("GET","https://jsonplaceholder.typicode.com/posts/1",true);
	//the third argument is true mean its asynchronous methode

	xmlRequest.send();//sent the request to specific server

	xmlRequest.onload=function(event){
		console.log(event);
		if(xmlRequest.readyState === 4){//check state ite 4 mean "DONE" the operation is completed
			if(xmlRequest.status === 200){//response ststue code 200 mean"Success response"
				console.log(xmlRequest.responseText);
				var id =document.getElementById("Xmldata");
				id.innerHTML=xmlRequest.responseText;
			}

		}//15935283
	}
}

document.getElementById("fetch").addEventListener("click",fetchrequest);

function fetchrequest(event){
	console.log(event);

	fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data);
		var d=document.getElementById("Fetch");
		d.innerHTML=JSON.stringify(data);
	});
}

document.getElementById("Fetch-promise").addEventListener("click",promise);

function promise(){
	var pro=promise_request("GET","https://jsonplaceholder.typicode.com/posts/1");
	pro.then(function(data){
		console.log(data);
		document.getElementById("Fetch-pro").innerHTML=JSON.stringify(data);
	});	
}

function promise_request(methode,url){
	return new Promise(function(resolve,reject){
		var xml=new XMLHttpRequest();
		xml.open(methode,url);
		xml.send();
		xml.onload=function(){
			resolve(xml.response);
		}
	})
}