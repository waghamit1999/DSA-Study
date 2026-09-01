function twoSum(numbers:number[],target:number):number[]{
const map=new Map<number,number>();
for(let i=0;i<numbers.length;i++)
	{
	const req=target-numbers[i];
		if(map.has(req))
		{
		return [map.get(req),i];
		}
	map.set(numbers[i],i);
	}
return [];
}

console.log(twoSum([2,32,9,6,17],49));