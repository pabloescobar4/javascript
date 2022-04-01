//level {1/2/3}


//level 2
1 
let arr =[1, 3, 4, 6, 7, 8]
let  result =[]
for(let i = 0; i < arr.length; i++){
	if(arr[i]%2!==0){
		result.push(arr[i])
	}
}
console.log(result)


2

let str = 'Elie'
let res =""
for(let i = 0; i < str.length; i++){
	if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
		res+=(str[i].toUpperCase())
		
	}else{
	res+=(str[i])
	}
}
console.log(res)


3


let arr1 =  [1, 3, 4, 6, 7, 8, 2, 5]
arr1.sort((a,b) => (b-a))
console.log(arr1[0])