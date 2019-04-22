//convert number to string 
let n1 = 100 ; 
console.log(n1.toString() +5)
let n2 = 300 ;
console.log(n2 + "" + 55);
//use Math.abs(x) to get the absolute values without sign
let n3 = -200;
console.log( Math.abs(n3));
// use Math.sign(x)
console.log(Math.sign(n2));//1
console.log(Math.sign(n3));//-1
console.log(!!"bayan");//true
console.log(!!"");//false
console.log(!!null);//false
console.log(!!0);//false
console.log(!!undefined);//false
console.log(0 / 0); // NaN
console.log(!!NaN);//false
console.log(NaN==NaN);//false
console.log(1 / 0); // Infinity
// you can access any character of string by using the index of character
let x="bayan";
console.log(x[0]);
console.log(x[2]);
 y="";

/*for(i=0;i < x.length ; i++) 
{

	console.log(x[i]);
}*/
/*for(i=0,t="";i < x.length ; i++) 
{
t+= x[i];
console.log(t);	
}
*/

for(i=0,t="";i < x.length ; i++) 
{
t+= x[i];
}
console.log(t);	
//-------------------------

let array =[];
array[0]="bayan";
array[1]="kawas";
console.log(array);

let array2=["xx","yy"];
array2[2]="zz";
console.log(array2);
console.log(array2[0]);
console.log(array2[4]);
array2[6]='NN';
console.log(array2);
console.log(array2.length);

//--------------------------
// Refactor this code
// function slice (string,indstart){
	// let result = "";

	// if(indstart==0){
		// return string;
	// }else if (indstart < string.length && indstart>0){
		// for(let i=indstart;i < string.length;i++){
			// result+= string[i];
		// }
		// return result;
	// }	
	// else if(indstart >= string.length){
		// return "";
	// }
	// else if(indstart < 0){
		// let start = indstart + string.length ;
		// for(let i = start;i<string.length;i++){
			// result+= string[i];
		// }
		// return result;
	// }
// }
function slice (string,indstart){
	let result = "";

	if(indstart==0){
		return string;
	}
	
	if(indstart >= string.length){
		return "";
	}
	
	let start = indstart;
	if(indstart<0){
		start = indstart + string.length ;	
	}
	for(let i=start;i < string.length;i++){
		result+= string[i];
	}
	return result;
	
	// if(indstart < 0){
		// let start = indstart + string.length ;
		// for(let i = start;i<string.length;i++){
			// result+= string[i];
		// }
		// return result;
	// }
}
// console.log(slice("Bayan", 1));

if (slice('Mohamed', 0) == 'Mohamed'
	&& slice('Bayan', 2) == 'yan'
	&& slice('Max', -1) == 'x'
	&& slice('Beboooo', 12) == ''
) {
    console.log('good tests');
}else {
    console.error('bad tests');
}
//-----------------------
 str= "Greetings!";
	let result ="";
	for (i= str.length-1;i>=0;i--){
	result = result + str[i];
	}
	console.log(result);
	console.log(i);
	
//------------------
// intg =452;
	// t= intg.toString();
	// console.log(t);
	// let res ="";
	// for (i= t.length-1;i>=0;i--){
	// res = res + t[i];
	// }
	// console.log(res);
	
//----------------
console.log(parseInt("51"));//51
console.log(parseInt("-51"));
console.log(parseInt("+51"));
console.log(parseInt("!51"));//nan
console.log(parseInt("51ff"));//51
console.log(parseInt("-51"));
console.log(parseInt("0021"));
console.log(parseInt("5.1"));
console.log(parseFloat("45.1"));
console.log(parseInt("09-"));
console.log(parseInt("0009hh"));
//----------------------
max=[];
console.log(!!max.NaN);
console.log(isNaN(max));
console.log(!!NaN);

//---------------
arr=[1,2,3,4];
console.log(arr);
console.log(arr.length)
arrstring =arr.toString()
console.log(arrstring);
console.log(arrstring.length);














