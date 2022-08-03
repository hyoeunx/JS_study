var myVar = 100;		// 전역변수
test();
document.write("myVar is " + myVar);

function test() { 		// 지역변수
	var myVar = 50;
}