// --------
import "./index.css"
import logo from "./img/ToDo-List.png"


document.querySelector("#myform").addEventListener("submit", Detail);

var arr = JSON.parse(localStorage.getItem("items")) || [];
tableOfList(arr);



function Detail(e) {
    e.preventDefault();

    var title = document.querySelector("#title").value;

    var itemsObj = {
        itemTitle: title,
    };

    arr.push(itemsObj);

    localStorage.setItem("items", JSON.stringify(arr));
    tableOfList(arr);
}

function tableOfList(arr) {
    document.querySelector(".appendDiv").innerHTML = "";
    document.querySelector(".logo").innerHTML = "";



    const myimg = new Image();
    myimg.src = logo;
    document.querySelector(".logo").appendChild(myimg)

    arr.map(function (elem, index) {
        var display = document.createElement("div")
        display.classList.add("display")
        var h2 = document.createElement("h2");
        h2.textContent = elem.itemTitle;


        var h3 = document.createElement("button");
        h3.classList.add("remove-btn")
        h3.textContent = "Remove";
        h3.addEventListener("click", function () {
            deleteTask(index);
        });
        display.append(h2, h3)
        document.querySelector(".appendDiv").append(display);
    });
}
function deleteTask(index) {
    arr.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(arr));
    tableOfList(arr);
}