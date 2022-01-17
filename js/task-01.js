//bubbling

/* const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert("Parent click handler");
});

child.addEventListener("click", () => {
  alert("Child click handler");
});

descendant.addEventListener("click", () => {
  alert("Descendant click handler");
}); */

//event.target
//event.currentTarget

/* const parent = document.querySelector('#parent');

parent.addEventListener('click', (event) => {
    console.log('event target:', event.target);
    console.log('event current Target:', event.currentTarget);
}) */

// stop event bubbling

/* const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert(
    "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

child.addEventListener("click", () => {
  alert(
    "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

descendant.addEventListener("click", (event) => {
    event.stopPropagation();
    //event.stopImmediatePropagation();
  alert("Descendant click handler");
}); */
