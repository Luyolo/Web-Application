/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global slideshow */

var myImage=document.getElementById("slideshow");
var imageArray=["pc1.jpg","pic2.jpg","pic3.jpg"];
var imgindex =0;
function changeimage(){
    slideshow.setAttribute("src",imageArray[imageindex]);
    imageindex++;
    if(imageindex>=imageArray.length){
        imageindex=0;
    }
    
}
var intervalhandle = setInterval(changeimage,2000);
slideshow.onclick=function(){
    clearInterval(intervalhandle);
}



