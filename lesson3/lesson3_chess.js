var counter1, counter2 = 0;
var ResStr = "";

for (counter1= 1; counter1 <= 8; counter1++)
{ 
	for (counter2 = 1; counter2 <= 8; counter2++)
	{
		if (counter1 % 2 == 0) 
		{
			ResStr = ResStr + "# ";
		}
		else 
		{
			ResStr = ResStr + " #";	
		}
	}
	ResStr = ResStr + "\n";
}
	
alert(ResStr);
console.log(ResStr);