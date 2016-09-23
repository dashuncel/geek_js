var a = 1, b = 1, c, d;

/*сначала выполняется операция инкреминации, затем присвоения:
1.a=a+1=2
2.c=a=2*/
c = ++a; alert(c); // 2

/*сначала выполняется операция присвоения, затем инкреминации:
1. d=b=1
2. b=b+1=2*/
d = b++; alert(d); // 1

/*
сначала инкреминируется переменная a, затем выполняется операция сложения в скобках, 
затем присваивается значение переменной с:
1. a=a+1=3
2. c=2+3
*/
c = (2+ ++a); alert(c); // 5

/*
сначала выполняется операция сложения в скобках, 
затем присваивается значение переменной с,
затем выполняется операция инкреминации переменной b:
1. c=2+b=4
2. b=b+1=3
*/
d = (2+ b++); alert(d); // 4

alert(a); // 3
alert(b); // 3

/*
2 задание: Чему будет равен x в примере ниже?
Приоритеты выполнения операций:
1. Скобки
2. * в скобках: 2*2
3. = в скобках: a=4
4. + до скобок: 1+4=5
5. присвоение значения переменной x (=) 
*/
var a = 2;
var x = 1 + (a *= 2);
alert("x=" + x);
