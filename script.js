function firstNonRepeatedChar(str) {
 // Write your code here
	let result =''
	let flag =0;
	
	
	for(let i=0;i<str.length;i++){
		let count =0;
		let first_occ =str.charAt(i);
		for(let j =0;j<str.length;j++){
			if(str.charAt(j)==first_occ){
				count +=1;
			}
		}
		if(count ==1){
         result+=first_occ;
		 flag =1;
		}
	}
	if(flag !=0){
		return result;
	}
	else{
		return null;
	}
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
