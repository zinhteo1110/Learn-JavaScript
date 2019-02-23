// var sole = [];
// var sochan = [];
// var nums = [1,2,3,4,5];

// for(i=0; i<=12; i++)
// {
// 	if(i%2 == 1){
// 		sole.push[i] = i;
// 	}
// 	if(i%2 == 0){
// 		sochan.push[i] = i;
// 	}
// }

// for(j=0; j<=12; j++)
// 	console.log(sole[j]);
// for(k=0; k<=12; k++)
// 	console.log(sochan[k]);


//viet lai bang cach khac

var numbers = parseInt(prompt("nhap vao so trang tong cong: "));
var sole = [];
var sochan = [];

//function indayso(numbers) {
	for(i=0; i<=numbers; i++)
	{
		if(i!=0 && i%2 == 1)
		{
			sole.push(i);
		}
		if(i!=0 && i%2 == 0)
		{
			sochan.push(i);
		}
	}
//}

document.write(sole);
document.write("<br>");
document.write(sochan);

document.write("<br><br>");
