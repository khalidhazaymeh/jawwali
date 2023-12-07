let nums=document.querySelectorAll(".stats .number");
let section=document.querySelector(".stats");
let started=false;



window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
        if(!started){
            nums.forEach((num)=>startcount(num));
        }
        started=true;
    }

}

function startcount(el){
let goal=el.dataset.goal;
let count =setInterval(() => {
    el.textContent++; 
    if(el.textContent == goal){
        clearInterval(count);

    }
}, 2000 / goal);
};



//Get Slider Items | Array.from [ES6 Feature]
var sliderImages=Array.from(document.querySelectorAll('.slider-container img'));
//Get number of slider
var slidesCount = sliderImages.length;
//set current slide
var currentSlide =1;
//slider number string element
var slideNumberElement=document.getElementById('slide-number');

//previous and next botton
var nextBotton = document.getElementById('next');
var prevBotton = document.getElementById('prev');

//Handle Click on previous and next botton
nextBotton.onclick=nextSlide;
prevBotton.onclick=prevSlide;

//create main ul element 
var paginationElement = document.createElement('ul');
//Set Id on created Element
paginationElement.setAttribute('id','pagination-ul');

//creat li based on array or slides count
for(var i=1; i<=slidesCount;i++){
// create li
var paginationItem = document.createElement('li');
//set custom Attribute 
paginationItem.setAttribute('data-index',i);

//set item content
paginationItem.appendChild(document.createTextNode(i));
//Append item to the main parent
paginationElement.appendChild(paginationItem)
}

//add the ul element to the page 
document.getElementById('indicators').appendChild(paginationElement);



//get the new created ul 
var paginationCreatedUl=document.getElementById('pagination-ul');

//Get pagenation items | Array.from [ES6 Feature]
var pagenationsBullets=Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through bullets items 
for(var i =0; i<pagenationsBullets.length; i++){

    pagenationsBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        theChecker ();  
    }

    
}



//tregger the checker function
theChecker ();



//function next slide

function nextSlide(){
 if(currentSlide==slidesCount){ 
    currentSlide=1;
    theChecker ();
    
 }else{
    currentSlide++;
    theChecker ();
    
 }


};
function prevSlide(){
    // if(prevBotton.classList.contains('disabled'))
    if( currentSlide==1){
        // return false;
        currentSlide=slidesCount; 
        theChecker ();
        currentSlide=slidesCount;
       

    
     }
     else if(currentSlide==-1){
        currentSlide=0;
        theChecker ();
     }
     else{
        currentSlide--;
        theChecker ();
     }



     

    
};


//create checker function 
// *********************************************************************************
function theChecker (){
    //set the slide number 
    slideNumberElement.textContent='Slide # '+(currentSlide) + 'of ' + (slidesCount);
// remove active slide from all images 
removeAllActive();
 //set active slide on current slide 
    sliderImages[currentSlide - 1].classList.add('active');
  //set active class on current pagenation item
paginationCreatedUl.children[currentSlide - 1].classList.add('active');
//check if the current slide is the first
if(currentSlide== -1){
    
    // //disable class on prev btn
    // prevBotton.classList.add('disabled');
    // currentSlide=slidesCount-1;
    // paginationCreatedUl.children[currentSlide].classList.add('active');
}else{
     //remove disabled class on prev btn
     prevBotton.classList.remove('disabled');
};
//check if the last one
if(currentSlide==slidesCount){
    //disable class on prev btn
    // nextBotton.classList.add('disabled');    
    currentSlide=0;
    
}else{
     //remove disabled class on next btn
     nextBotton.classList.remove('disabled');
};


}
// ********************************************************************************

//remove all active clss from image and polites 
function removeAllActive(){
    //loop for on images 
    sliderImages.forEach(function(img){
        img.classList.remove('active')


    });
//loop for pagenation bullets
    pagenationsBullets.forEach(function(bullet){
        bullet.classList.remove('active')

    });
}
// ********************************************************************************
