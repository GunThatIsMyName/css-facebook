const dots = [...document.querySelectorAll(".dot")];
const slides = [...document.querySelectorAll(".slides")];

const activeRemove=(items)=>{
    items.map(item=>{
        item.classList.remove("active");
    })
}
const adtiveAttach=(items)=>{
    items.classList.add("active");
}

dots.map((item,idx)=>{
    item.addEventListener("click",(e)=>{
        activeRemove(dots)
        activeRemove(slides)
        adtiveAttach(slides[idx])
        adtiveAttach(e.target)
    })
})