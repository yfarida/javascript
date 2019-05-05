var a=10;
console.log(a);
var b="learning java";
console.log(b);
function d(){
    console.log("call the function");
}
d();
var e=10,f=199;
function add(e,f){
    console.log("addition:",e+f);
} 
add(e,f);
var g; 
function printvalueFromZerotoNum(num)
{
    
    for(i=0;i<=num;i++)
    {
        console.log("num:",i);
    }
}
var num=10;
printvalueFromZerotoNum(num);
function position(marks)
{
    if(marks >=85)
    {
        console.log("Distinction");
    }
    else if((marks >=60) && (marks<85))
    {
        console.log("First class");
    }
    else if((marks <60) && (marks>=45))
    {
        console.log("Second class");
    }
    else{
        console.log("Fail");
    }
}
var marks=prompt("enter marks:");
position(marks);