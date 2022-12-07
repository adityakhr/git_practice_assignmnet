let number = 11;

let factors = 0;
for(let i = 1 ; i<=number ; i++){
	if(number%i==0){
		factors++;
	}
}
if(factors===2){
	console.log("A Prime Number!");
}else{
	console.log("Not a Prime Number!");
}