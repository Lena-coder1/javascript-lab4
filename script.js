//part 1 :declaring and invoking function 

function greet(name='Jane Doe')
{
    
    return `Hello, ${name} !!`;
   
};
console.log("if no name is entered = ",greet());
console.log("if name is entered = " ,greet('Lena'));

// part 2 : Working with parameters and returning values

function addNumbers ( num1, num2)
{
 let sum = num1 + num2;
 return sum ; 

};
console.log("adding numnbers = ",addNumbers(1,2));

//part3 : function scope 
let a = 18;
function changeValue()
{
let a = 0; 
return a; 
};
console.log(" global value = ",a);
console.log("Function value= ",changeValue(a));

//part4: Closures

function counterFunction()
{
let count = 1;

    return {
        addition()
        {
        count++;
        return count;
    
        },
        subtraction()
        {
        count--;
        return count;
        },
    };

}
let counter = counterFunction();
console.log("Final value in the closures: ");
counterFunction(counter.addition());
counterFunction(counter.addition());
console.log(counter.subtraction());

