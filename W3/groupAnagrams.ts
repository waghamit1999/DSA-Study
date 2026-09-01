function groupAnagrams(sample: string[]):string[][]{
const group=new Map<string,string[]>();
	for(const str of sample){
		const id=str.split("").sort().join("");

		if(!group.has(id)){
		group.set(id,[]);
		} 
		group.get(id)!.push(str);
	}
return Array.from(group.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))