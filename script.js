var counterContainer = document.querySelector(".websiteCounter");
var visitCount = localStorage.getItem("page_view"); 


if (visitCount){
    visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}

visitCount = 1;

visitCount = Number(visitCount) + 1;





counterContainer.innerHTML = visitCount;

// initializing the visitCount to 1 and adding the entry 
//using localStorage.setItem(“”) with “page_view” as the key.
//Because no veiwer it will be undefined 
// Update local storage value
//assigning the visitCount variable to element.innerHTML