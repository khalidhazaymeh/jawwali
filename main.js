/////////////////////////////////////////////////////

let section=document.querySelector(".our-skills");
let spans=document.querySelectorAll(".skills .skill span");


// window.onscroll=function(){
//     if(window.scrollY>=section.offsetTop){
        
//         spans.forEach(spans => {
//             spans.style.width=spans.dataset.width;
//         });
//     }
//     };

    ////////////////////////////////////////////////////

// count number
let nums=document.querySelectorAll(".stats .number");
let statssection =document.querySelector(".stats");
let started=false;



window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
        
        spans.forEach(spans => {
            spans.style.width=spans.dataset.width;
        });
    }
    if(window.scrollY>=statssection.offsetTop){
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


