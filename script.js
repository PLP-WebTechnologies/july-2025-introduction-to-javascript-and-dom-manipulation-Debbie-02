

// ======== Part 1: Variables & Conditionals =====
function checkAge() {
    // Get user input
    const age = document.getElementById("userAge").value;

    // Conditional check
    if(age >= 18) {
        document.getElementById("ageResult").innerText = "You are an adult!";
    } else if(age > 0) {
        document.getElementById("ageResult").innerText = "You are a minor!";
    } else {
        document.getElementById("ageResult").innerText = "Please enter a valid age.";
    }
}

// ==== Part 2: Functions ====
// Function to greet a user
function greetUser(name) {
    document.getElementById("greetResult").innerText = `Hello, ${name}! Welcome to JavaScript.`;
}

// Function to calculate sum
function calculateSum(a, b) {
    const sum = a + b;
    document.getElementById("sumResult").innerText = `The sum of ${a} + ${b} is ${sum}`;
}

// ======= Part 3: Loops =================
// Using a for loop to show numbers
function showNumbers() {
    let result = "";
    for(let i = 1; i <= 5; i++) {
        result += i + " ";
    }
    document.getElementById("numbersResult").innerText = result;
}

// Using forEach to list fruits
function listFruits() {
    const fruits = ["Apple", "Banana", "Cherry", "Date"];
    const fruitList = document.getElementById("fruitList");
    fruitList.innerHTML = ""; // Clear previous items
    fruits.forEach(fruit => {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}

// ================= Part 4: DOM Manipulation =================
// Change background color on button click
document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Add new list item dynamically
let itemCount = 1;
document.getElementById("addItemBtn").addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount++;
    document.getElementById("dynamicList").appendChild(newItem);
});



