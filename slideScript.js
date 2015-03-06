// JavaScript Document
var myImage=document.getElementById("myPhoto");
var imageArray=["20150116-0009.jpeg","1.jpeg","20140814-0010.jpeg","20140814-0028.jpeg"];
var imgindex =0;
function changeimage(){
    slideshow.setAttribute("src",imageArray[imageindex]);
    imageindex++;
    if(imageindex>=imageArray.length){
        imageindex=0;
    }
    
}
var intervalhandle = setInterval(changeimage,1000);
myPhoto.onclick=function(){
    clearInterval(intervalhandle);
}

function c(val)
{
document.getElementById("d").value=val;
}
function v(val)
{
document.getElementById("d").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  

