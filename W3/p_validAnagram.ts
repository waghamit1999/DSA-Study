function validAnagram(str1:string,str2:string):boolean{
const map=new Map<string,number>();
	for(const char of str1)
	{
	map.set(char,(map.get(char) ?? 0) + 1);
	}

	for(const char of str2)
	{
		if(!map.has(char)){
		return false;
		}

	let count=map.get(char);
		if(count===1) map.delete(char);
	
		if(count>1){
		map.set(char,count--);
		}
	}
return map.size===0;
}

console.log(validAnagram("listen", "s!lent"));
console.log(validAnagram("listen", "silent"));

