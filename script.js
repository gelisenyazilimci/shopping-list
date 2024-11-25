"use strict";

let items = [];

const shoppingList = document.querySelector(".shopping-list");

const input = document.createElement("input");
const li = document.createElement("li");
const deleteIcon = document.createElement("span");
const div = document.createElement("div");


loadItems();

function loadItems() {
    items = [
        {id:1, name: "Yumurta", completed: false },
        {id:2, name: "Balık", completed: false },
        {id:3, name: "Süt", completed: false },
        {id:4, name: "Zeytin", completed: false },
        {id:5, name: "Yumurta", completed: false },
        {id:6, name: "Balık", completed: false },
        {id:7, name: "Süt", completed: false },
        {id:8, name: "Zeytin", completed: false },
        {id:9, name: "Yumurta", completed: false },
        {id:10, name: "Balık", completed: false },
        {id:11, name: "Süt", completed: false },
        {id:12, name: "Zeytin", completed: false },
    ];

    shoppingList.innerHTML = "";

    for (let item of items) {
        const list = ItemList(item);
        shoppingList.appendChild(list);
    }
}

function ItemList(item) {

    input.type = "checkbox";
    input.classList.add("form-check-input");
    input.checked = item.completed;

    div.textContent = item.name;
    div.classList.add("item-name");

    li.className = "border rounded p-3 mb-1";
    li.dataset.id = item.id;
    li.toggleAttribute("to-doS-completed", item.completed);

    li.addEventListener("change", itemChange);

    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(deleteIcon);


    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
    deleteIcon.addEventListener("click", listDeleteItem);


    return li;
}

function itemChange (e) {
    const itemInArray = items.find(i => i.id === parseInt(li.dataset.id));
    if (itemInArray) {
        itemInArray.completed = e.target.checked;
        if (itemInArray.completed) {
            li.style.textDecoration = "line-through";
            li.style.color = "red";
        } else {
            li.style.textDecoration = "none";
            li.style.color = "black";
        }
    } else {
        console.error("Item bulunamadı! data-id:", li.dataset.id);
    }
}

function listDeleteItem (e) {
   const itemID = parseInt(e.target.parentElement.dataset.id);
   const itemIndex = items.findIndex(i => i.id === itemID);
    if (itemIndex > -1)
   {
       items.splice(itemIndex, 1);
       e.target.parentElement.remove();
   } else {
        console.log("Item bulunamadı!")
    }
}

