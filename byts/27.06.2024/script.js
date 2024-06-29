// console.log("asma");
// document.getElementById("a").innerHTML = "changed";

// // getElementsByClassName returns a collection, so you need to specify the index
// let elements = document.getElementsByClassName("b");
// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = "asdsdf";
// }


// // Type conversion 
// console.log(String(1234));
// console.log(Number("1234"));
// console.log((123).toString());
// console.log(parseInt("123"));

// // conditional if 
// a = 10 ;
// b = 20 ;
// if(a>b)
//     console.log(`${a} is greater`)  ;
// else
// console.log(`${b} is greater`)  ;

// //loop
// for(let i = 0 ; i < 5 ;i++)
//     console.log(i);

// //switch
// switch(5)
// {
//     case 1 :
//         console.log("1");
//         break;
//     default :
//     console.log("invalid");
// }

// // ternary operator 
// console.log(5>10 ? true : false);

// variable declaration 

// var , let , const 
// a = 10 ;
// var a = 10 ;
// above both are not advisable

// let a = 10 ;
// const a = 10 ;
// above both are advisable

// a=10;
// if(true){
//     // a = 100 ;// global scope
//     // var a = 100 ; // global scope
//     // let a = 100; // error will come as it takes as block scope
//     // const a = 100 ; //error
//     const a = 500; //error block scope
//     a = 400; //error assignment to constant variable 

// }
// console.log(a);


// let a ;
// console.log(a); //undefined
// a = 100 ;
// console.log(a); // 100


// SOMETIMES YOU HAVE TO UNLEARN TO LEARN NEW THINGS 

// FUNTIONS 
// function declaration 
// function definition
// function call

// function fun() // function definition
// {
//     console.log("function");
//     // return 100;
// }
// let res = fun(); //function call
// console.log(res); // if return 100 is commented means  undefined is the ans
// // or else 100 is the ans 

// if the function not return anything means by default it returns undefined 


// 3 TYPES OF FUNCTION 
// 1 . normal function
// 2 . function expression
// 3 . arrow function

// 1 . Normal Function 
// function add(a,b)
// {
//     return a+b ;
// }
// console.log(add(10,20));


//2 . Function Expression
// let add = function (a,b)
// {
//     return a+b ;
// }
// let res = add(10,20);
// console.log(res);

// 3 . ARROW FUNCTION
// let add =  (a,b) =>{
//     return a+b ;}
// let res = add(10,20);
// console.log(res);

// const func = () => {console.log("HEllo");}
// const func1 = () => {console.log(100);}
// func();
// func1();

// ARROW FUNTION 2 TYPES OF USAGE 
// const fun = (a,b) => a*b ;  // if curly braces not there means no need return keyword 
// const fun = (a,b) => {   // if curly braces present means need return keyword 
//     return a*b } ;
// console.log(fun(50,20));

// console.log(fun2());
// function fun2(){
//     return 1;
// }

// alert("Success");
// let res = confirm("Are you sure want to log in")
// console.log(res);

// let a = prompt("Enter you text");
// console.log(a);

// nullcheck operator -- > ?. - > for safety purpose like try and catch 
// let obj = {
//     data : {
//         name : {
//             first : "Asma" ,
//             last : "Malica"
//         }
//     }
// };

// console.log(obj?.data?.name?.first);
// console.log(obj?.data?.name?.last);
// console.log(obj?.data?.last); //undefined it dont show error as the path is missing

// CALLBACK FUNCTION 
// The function calls another funtion is called callback function 
function callBack()
{
    console.log("I will call after some time");
    console.log("so my name is callback function");
}
function logic(fn){
    fn();
}
logic(callBack);
