function fun1()
{
    // alert("Hello");
    let element=document.getElementById('box');
    element.style=" box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); transform:scale(1.0); cursor:pointer; transition: transform 1s; font-size:20px;"
    document.getElementById('btn').style="background-color:black; color:white;";
}
function fun2()
{
    let element=document.getElementById('box');
    element.style=" box-shadow:none;"
    document.getElementById('btn').style="background-color:transperant; color:black;";

}
function fun3()
{
    let input=document.getElementById('input');
    input.style="width:90%";
}
function fun4()
{
    let input=document.getElementById('input');
    input.style="width:50%";
    
}
function fun5()
{
    let input=document.getElementById('input');
    input.style.backgroundColor="black";
    input.style.color="white";
    //If you want to add seperate style for each property then you will use this syntax
    
}
function changeHead()
{
    let heading=document.getElementById('heading');
    heading.innerHTML=`Hello This is Ankit Kumar Sharma`;
}
function newPage()
{
    setTimeout(page,2000);
}
function page()
{
    // alert('Hello');
    window.open('https://www.w3schools.com/');
}
