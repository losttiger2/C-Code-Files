function Greet()
{
	alert("Hi,Welcome to the world of client-side scripting");
}
function printMsg()
{
	document.write("This is Another function in external file.");
}

function showDate()
{
	document.getElementById("display").innerHTML=Date();
}

function square(a)
{
    a = prompt("Enter a value for a:");
    document.getElementById("result").innerHTML=(a*a);
}
