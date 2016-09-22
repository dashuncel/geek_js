var cnt = 0; //счетчик цикла
var fizz="fizz";
var buzz="buzz";

while (cnt <= 100) {
	cnt++;

	if (cnt % 3 == 0 && cnt % 5 == 0) 
		console.log("Number %d is %s", cnt, fizz+buzz);
	else if (cnt % 3 == 0)
		console.log("Number %d is %s", cnt, fizz);
	else if (cnt % 5 == 0)
		console.log("Number %d is %s", cnt, buzz);
	else 
		console.log("Number %d is %s", cnt, cnt);
}
