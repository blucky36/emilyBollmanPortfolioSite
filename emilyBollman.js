document.addEventListener("DOMContentLoaded",()=>{
  let moveAway = document.getElementById("move")
  moveAway.addEventListener("mouseover",function move(e) {
     let offsetLeft;
     offsetLeft += 20;
     moveAway.style.right = (offsetLeft)+"px";
     console.log("oof")
     e.preventDefault();     //prevents the page from redirecting
  })
})

item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);
//for appending and unappending events to resume items
