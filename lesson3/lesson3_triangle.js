var cnt = 1;
var num = 0;
var ResStr = "";
while (cnt <= 7)
{ 
	for (num = 1; num <= cnt; num++)
	{ 
		ResStr = ResStr + "#";
	}
	ResStr = ResStr + "\n";
	cnt++;
}

alert(ResStr);
console.log(ResStr);