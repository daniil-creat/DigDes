var arr = new Array(5);
function fillArray(){

for (var i = 0; i < arr.length ; i++) {
	arr[i]=Math.floor((Math.random()*100+1)-(Math.random()*100+1));
}
}
function replaceFromArray(){
for (var i = 0; i < arr.length ; i++) {
	if (arr[i]<0) {
	arr[i]=0;
   }
 }	
}
function addToArray(){
	for (var i = 0; i < arr.length ; i++) {
	if ((arr[i]==0) && (i%2==0)&&(i!=0) ) {
	arr.splice(i+1,0,-1);
   }
 }	
}
console.log('first');
fillArray();
for (var i = 0; i < arr.length ; i++) {
	console.log(arr[i]);
}
console.log('Second')
replaceFromArray();
for (var i = 0; i < arr.length ; i++) {
	console.log(arr[i]);
}
console.log('Third')
addToArray();
for (var i = 0; i < arr.length ; i++) {
	console.log(arr[i]);
}



