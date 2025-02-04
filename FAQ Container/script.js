/* 
- Toggle buttons - querySelector
- Loop nodelist  - forEach
- Btn listener   - addEventListener
- Toggle active  - parentNode & classList.toggle
*/
const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");
const toggles = document.querySelectorAll('.faq-toggle');

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "black";
    } else {
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", () => {
    updateBody()
    updateLocalStorage()
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked)
);
};



toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
})
})



