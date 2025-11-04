
// declare variables 
let shoppingList = [];
let itemInput =  document.getElementById("itemInput");
let itemPrice = document.getElementById("itemPriceInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let unorderedList = document.getElementById("shoppingList");
let totalPrice = 0;
const totalPriceSpan = document.getElementById('total-price');


// define functions 

function addItem(item) {
    if (item.itemName.trim() === "") {
            alert("Cannot add an empty item to the shopping list.");
        return;
    }if (shoppingList.includes(item.itemName.toLowerCase() || item.itemName.toUpperCase()|| item.itemName)){
        alert(`${item} is already in the shopping list.`);
        clearInputValues();
        event.preventDefault();
        return;
    } if(!item.itemPrice || item.itemPrice == '0' ){
       alert(`${item.itemName} needs a price`);
       clearInputValues();
       event.preventDefault();
       return;
    }else{
    shoppingList.push(item);
    console.log(shoppingList);
    console.log(`${item.itemName} added to the shopping list.`);
    renderList(); // Update the displayed list
    clearInputValues(); // Clear the input field after adding
    }
}


// Function to update the total price
function updateTotalPrice(amount) {
     totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
  }


function renderList(){
    unorderedList.innerHTML = ""; 
    shoppingList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.itemName;
        const price = document.createElement("span")
        price.classList.add("priceSpan")
        price.textContent = `   $${item.itemPrice}  `;
        li.appendChild(price);
        const removeButton = document.createElement("button");
        removeButton.textContent = "remove Item";
        removeButton.classList.add("removeButton", "removeItemButton")
        li.appendChild(removeButton);
        unorderedList.appendChild(li);
    });
}


function clearInputValues(){
   itemInput.value = "";
   itemPrice.value ="";
}

// add event listeners to buttons
addItemButton.addEventListener("click", function() {    
    let  newItem = {
        itemName:itemInput.value,
        itemPrice:itemPrice.value,
    }
        event.preventDefault();
        updateTotalPrice(Number(itemPrice.value));
        console.log(newItem)
        addItem(newItem);
});

unorderedList.addEventListener("click",(event) => {
    if(event.target.classList.contains("removeButton")){
    const item = event.target.closest('li');
    const pricestring = item.querySelector(".priceSpan").textContent;
    const price = pricestring.replace(/[^0-9.]/g, '')
    updateTotalPrice(-price)
    item.remove();
    }
})
