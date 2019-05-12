const filtrButton = document.querySelector(".filtr")
const trElements = document.querySelectorAll("tr");


const findMatching = (e) => {
    e.preventDefault();
    let searchText = document.querySelector(".searchText").value.toLowerCase();
    for (let i = 0; i < trElements.length; i++) {
        let tdElements = trElements[i].querySelector("td");
        if (tdElements.textContent.toLowerCase().indexOf(searchText) > -1) trElements[i].style.display = "";
        else trElements[i].style.display = "none";
    }
}


filtrButton.addEventListener("click", findMatching);