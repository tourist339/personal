
import $ from "jquery"
let colors=[[254, 171, 107, 0.3], //orange
    [155, 207, 224, 0.3],//blue
    [231, 111, 61, 1],
    [0,0,0,1],
    [0,0,0,1],

]
let prevScroll=window.scrollY
let stepsToDecrease=[]
let elProjectSidebar,elProjectSlides,elProjectMain
let sidebarY
let sidebarWidth

let slideWidth
for (let i = 0; i < colors.length-1; i++) {
    stepsToDecrease.push([])
    for (let j = 0; j < 4; j++) {
        stepsToDecrease[i][j]=(colors[i+1][j]-colors[i][j])/window.innerHeight;

    }
}
$(document).ready(()=>{


    elProjectSidebar=document.getElementById("project-sidebar")
    sidebarY=elProjectSidebar.getBoundingClientRect().top
    sidebarWidth=elProjectSidebar.clientWidth
    elProjectSlides=document.getElementById("project-slides")
    elProjectMain=document.getElementById("projects")

    slideWidth=elProjectSlides.offsetWidth
    console.log(elProjectSlides.offsetWidth,elProjectSlides.clientWidth,elProjectSlides.scrollWidth)



})


document.addEventListener("scroll",(e)=>{
    let direction=(window.scrollY-prevScroll)>0?1:-1
    let index=Math.floor(window.scrollY/window.innerHeight)
    let nextIndex=(direction<0)?index-1:index+1
    let newRGBA=[];


    for (let i = 0; i < 4; i++) {
        newRGBA[i]=colors[index][i]+stepsToDecrease[index][i]*(window.scrollY-index*window.innerHeight)
    }

    if(sidebarY!==undefined) {
        if(window.scrollY>sidebarY){
            elProjectSidebar.style.position="fixed"
            elProjectSidebar.style.width=sidebarWidth+"px"

            elProjectSidebar.style.flex=""

            elProjectSlides.style.width=slideWidth+"px"
            elProjectMain.style.display="block"
            elProjectSlides.style.removeProperty("flex")
        }else{
            elProjectSidebar.style.position="relative"
            elProjectMain.style.display="flex"
            elProjectSidebar.style.right="0px"
            elProjectSidebar.style.top="0px"


        }

    }

    document.getElementsByClassName("home-bg")[0].style.backgroundColor="rgba("+newRGBA[0]+","+newRGBA[1]+","+newRGBA[2]+","+newRGBA[3]+")";

})
