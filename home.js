// بستن نوار مشکی بالای صفحه  
let closeHeader = document.querySelector(".fa-bars");
let blackHeader = document.querySelector(".upper")
closeHeader.addEventListener("click",function(){
    blackHeader.style.display="none"
    })


//  نمایش موارد بیشتر در قسمت محصولات  جدید
let btnShowAll = document.querySelector(".show-all")
let downbtn = document.getElementById("down")
btnShowAll.addEventListener("click",function(){
    btnShowAll.innerHTML.toggle="close"
    let newProductCpntainer = document.querySelector(".new-products")
    newProductCpntainer.classList.toggle("show")
    downbtn.classList.toggle("rotate")
})

// چپ و راست رفتن مشتری ها
let goleft = document.querySelector(".fa-arrow-left")
let user = document.querySelectorAll(".carousl .user")
let i = 0
goleft.addEventListener("click",function(){
    let container = document.querySelector(".carousl")
    console.log(i);
if(i<user.length-3){
    container.style.transform+="translateX(-395px)"
    i++
}
    
},)
let goright = document.querySelector(".fa-arrow-right")
goright.addEventListener("click",function(){
    let container = document.querySelector(".carousl")
    console.log(i);

    if(i<user.length && i!=0){
        container.style.transform+="translateX(395px)"
        i--
        }
})
// رفتن به قسمت پایین و بالای صفحه 

let goUp =document.getElementById("go-up")
let goDown =document.getElementById("go-down")

goUp.addEventListener("click",function(){
    blackHeader.scrollIntoView({behavior:"smooth",block:"start"})
})

goDown.addEventListener("click",function(){
let end=document.querySelector(".last-footer")
end.scrollIntoView({behavior:"smooth",block:"end"})
})


// رفتن به قسمت های مختلف صفحه با زدن دکمه ها

let newArrivals=document.querySelector(".new-Arrivals")
let newArrivalsTitle=document.querySelector(".title")
newArrivals.addEventListener("click",function(){
    newArrivalsTitle.scrollIntoView({behavior:"smooth",block:"start"})
})

// نمایش منو در موبایل
let menu=document.querySelector("#show-menu")
menu.addEventListener("click",function(){
menu.classList.toggle("fa-times")
let menuBar=document.getElementById("top-list-item")
menuBar.classList.toggle("show-menu-bar") 
})