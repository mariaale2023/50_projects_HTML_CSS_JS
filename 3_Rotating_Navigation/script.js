/*

    getElementById and querySelector are both methods used in JavaScript to select elements in the DOM (Document Object Model) of a web page, but they have differences in their syntax and selection capabilities.

    getElementById selects an element from the DOM by its id attribute. This method is very efficient and fast in searching for a specific element by its unique identifier. Its syntax is as follows:

    
        document.getElementById("myId");  
        
        
    On the other hand, querySelector allows you to select elements by any valid CSS selector, including classes, tags, attributes, and pseudoclasses. The advantage of querySelector is that it is more flexible than getElementById, as it can select multiple elements at once and uses a syntax similar to CSS selectors. The desevantage is that querySelector should be check  whole the DOM to find the element, so this is less efficiente. Its syntax is as follows:


      document.querySelector("#myId"); // to select by id
      document.querySelector(".myClass"); // to select by class

    To select an element by class in querySelector, you use the CSS class selector .myClass, and to select by id you use the CSS id selector #myId.


*/

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");
const btnClose = document.querySelector(".close");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});

btnClose.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
