var number1= 12;
var number2= 10;

// console.log(number1+number2);

//data type
//number data type

// num1 = 12;
// num2 = 12.2;

//String data type

// str1 = "hello world";
// str2 = "I am karan";

//object
// var marks = {
//     ravi : 34,
//     shubham : 78,
//     Karan : 99.99
// }

var num = [12,21,34,54,56] 


//function 
// function avg(a,b)
// {

//     c=(a+b)/2;
//     return c;
// }

// c1 = avg(12,6);
// c2 = avg(10,6);

// console.log(c1,c2);

//if else statement
// var age = 4;

// if(age>8)
// {
//     console.log('you are not kid');
// }
// else{
//     console.log('you are kid');
// }

var arr = [1,2,3,4,5,6,7];

// for (var i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }
// arr.forEach(function(elements){
//     console.log(elements);
// })

//while loop
let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do---while

// do{
// console.log(arr[j]);
// j++;
// }while(j<arr.length);

//break--continue statement.
// console.log("---------------------example of break------------------------");
// for (var i=0;i<arr.length;i++)
// {
//     if(i == 2)
//     {
//         break;
//     }
//     console.log(arr[i])
// }
// console.log("---------------------example of continue------------------------");
// for (var i=0;i<arr.length;i++)
// {
//     if(i == 2)
//     {
//         continue;
//     }
//     console.log(arr[i])
// }

//array ---- methods
let myarray = ["Fan","Camera",34,null,true];
// console.log(myarray.length);
// myarray.pop();
// console.log(myarray);
// myarray.push("bro");
// console.log(myarray);
// myarray.shift();
// console.log(myarray);
// myarray.unshift("Karan");
// console.log(myarray);
// console.log(myarray.length);

//Dom manipulator
let elem =document.getElementById('click');
// console.log(elem)

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

//elemClass[0].style.background = "yellow";

elemClass[0].classList.add("bg-primary");

elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName("div");
// console.log(tn);

// CreatedElement = document.createElement('p');
// CreatedElement.innerText = "This is created peragraph";
// tn[0].appendChild(CreatedElement);
// CreatedElement2 = document.createElement('b');
// CreatedElement2.innerText = "This is created bold";
// tn[0].replaceChild(CreatedElement2,CreatedElement);


//selecting using querys
// sel = document.querySelector('.container');
// console.log(sel);


// sel = document.querySelectorAll('.container');
// console.log(sel);


// function clicked()
// {
//     console.log("the button was clicked");
// }

// window.onload = function (){
//     console.log('window was loaded');
// }

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>"
//     console.log("click hua")
// })


// JSON

obj = {name: "harry",length:1}
jso = JSON.stringify(obj);
console.log(jso)