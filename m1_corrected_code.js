let number = 11;

let co = 0;
for(let i = 1 ; i<=number ; i++){
	if(number%i==0){
		co++;
	}
}
if(co==2){
	console.log("It is a Prime Number");
}else{
	console.log("It is not a Prime Number");
}