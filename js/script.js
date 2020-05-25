/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//global variables 
const students = document.querySelectorAll(".student-item.cf");
const displayCount = 10;
let ul = document.querySelector(".student-list");

//Create the `showPage` function to hide all of the items in the 
//list except for the ten you want to show.
function showPage(list,page) {
   let startIndex = (page * displayCount) - displayCount;
   let endIndex = (page * displayCount) - 1;
   for(let i = 0; i < list.length; i++){
      let all = list[i]; 
      all.style.display = "none";                 
      }
     for(let i = 0; i < list.length; i++){
       if( i >= startIndex && i <= endIndex){
         let item = list[i];
         item.style.display = "block";
       }
      }
}
//calling function to show first page
showPage(students,1);

//`appendPageLinks function` to generate, append, and add 
//functionality to the pagination buttons.
function appendPageLinks(list){
  const div = document.querySelector(".page");
  const pagination = document.createElement("div");
  pagination.className = "pagination";
  div.appendChild(pagination);
  let uL = document.createElement("ul");
  pagination.appendChild(uL);
    for(let i = 0; i < (list.length/displayCount); i++){
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = "#";
      a.text = i+1;
      uL.appendChild(li);
      li.appendChild(a);
    }
    const btns = document.querySelectorAll('a');
    btns[0].className = "active";
    for(let i = 0; i < btns.length; i++){
      btns[i].addEventListener("click", (event) =>{
        for(let i = 0; i < btns.length; i++){
        btns[i].classList.remove("active");
        }
        let selected = event.target;
        selected.className = "active";
        let page = selected.textContent;
        showPage(students,page);
      })
    }
}

appendPageLinks(students);





// Remember to delete the comments that came with this file, and replace them with your own code comments.