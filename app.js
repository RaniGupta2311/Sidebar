// console.log("Welcome to sidebar");
const toggleBtn=document.querySelector(".sidebar-toggle");
const sidebarContainer=document.querySelector(".sidebar-container");
const cross=document.querySelector(".cross");
toggleBtn.addEventListener("click",function(){
    // if(sidebarContainer.classList.contains("show-sidebar-container")){
    //     sidebarContainer.classList.remove("show-sidebar-container");
    // }
    // else{
    //     sidebarContainer.classList.add("show-sidebar-container");
    
    // }
    sidebarContainer.classList.toggle("show-sidebar-container");
})
cross.addEventListener("click",function(){
    sidebarContainer.classList.remove("show-sidebar-container");
})