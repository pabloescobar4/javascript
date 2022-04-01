// level {1/2/3}


//level 2
let n =6
const fib = (n) => {
	//base case
	let arr = []
	if(n<=1)
	return n;
    
	arr[0] = 0
	arr[1] = 1

	let sum = arr[0] + arr[1]

	for(let i = 2 ; i<=n; i++){
		arr[i] = arr[i - 1] + arr[i - 2];
		sum+=arr[i]
	}
	return sum
	
}
console.log(fib(n))