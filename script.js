const friend=document.querySelector("#friend")
const frndStatus=document.querySelector("#connect-status")
let isFriend=false;
friend.addEventListener("click",()=>{
    if(isFriend){
        friend.textContent="Add Friend";
        friend.classList.remove("added")
        frndStatus.textContent="Strangers"
        frndStatus.style.color="rgba(204, 19, 19, 0.697)"
    }
    else{
        friend.textContent="Remove"
        friend.classList.add("added")
        frndStatus.textContent="Friends"
        frndStatus.style.color="rgba(19, 19, 139, 0.819)"
    }
    isFriend=!isFriend;
})
const info=document.querySelector("#info")
const about=document.querySelector("#about-section")
info.addEventListener("click",()=>{
    if(about.classList.contains("hidden"))
    {
        about.classList.remove("hidden")
        about.classList.add("show")
        info.textContent="Hide"
    }else{
        about.classList.add("hidden")
        about.classList.remove("show")
        info.textContent="About"
    }
})