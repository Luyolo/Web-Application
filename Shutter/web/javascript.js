/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myImage = document.getElementById("myPhoto");
var imageArray=["images.jpg","2.jpg","3.jpg"];

var imageIndex = 0;
function changeImage(){
    myPhoto.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>=imageArray.length){
        imageIndex=0;
    }
}
var intervalHandle = setInterval(changeImage,2000);

myPhoto.onclick=function(){
    clearInterval(intervalHandle);
};



