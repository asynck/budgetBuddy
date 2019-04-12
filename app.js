//get month
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
document.getElementById("month").innerText = n;

//objects & vars
var Entry = function (type, description, value) {
    this.type = type;
    this.description = description;
    this.value = value;
}
let incomeArr = [];
let expensesArr = [];
let ul = null;
let totalIncome = document.getElementById("incomeValue");
let totalExpenses = document.getElementById("expensesValue");
let totalPercentage = document.getElementById("totalPercentage");
let total = document.getElementById("total");

//eventListeners
document.getElementById("enter").addEventListener("click", function() {
    expenseEntry();
    document.getElementById("description").value = "";
    document.getElementById("value").value = "";
    document.getElementById("expenseType").options.selectedIndex = 0;
    totalUpdate();
});

document.getElementById("expenseType").addEventListener("click", function() {
    if (document.getElementById("expenseType").options.selectedIndex == 0) {
        document.getElementById("enter").style.cssText = "background-color: rgb(51, 192, 173); border: 1px solid rgb(51, 192, 173)"
    }
    else {
        document.getElementById("enter").style.cssText = "background-color: rgb(228, 55, 55); border: 1px solid rgb(228, 55, 55)"
    }
});


//functions
function expenseEntry() {
    let description = document.getElementById("description").value;
    let value = document.getElementById("value").value;
    let type = document.getElementById("expenseType").options.selectedIndex;
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    var expenseNew = new Entry(type, description, value);
    if (expenseNew.type == 0) {
        ul = document.getElementById("incomeList");
        incomeArr.push(expenseNew);
        expenseNew.value = '+' + expenseNew.value;
        div2.style.color = "rgb(51, 192, 173)";
    } else {
        ul = document.getElementById("expensesList");
        expensesArr.push(expenseNew);
        expenseNew.value = '-' + expenseNew.value;
        div2.style.color = "rgb(228, 55, 55)";
    }
    ul.appendChild(li);
    li.appendChild(div1);
    li.appendChild(div2);
    div1.innerText = expenseNew.description;
    div2.innerText = expenseNew.value;
} 

function totalUpdate() {
    let suma = 0;
    let sumb = 0;
    for (let i = 0; i < incomeArr.length; i++) {
        let a = parseInt(incomeArr[i].value);
        suma += a;
    }
    totalIncome.innerHTML = suma;   

    for (let i = 0; i < expensesArr.length; i++) {
        let b = parseInt(expensesArr[i].value);
        sumb += b;
    }
    totalExpenses.innerHTML = sumb; 

    total.innerHTML = suma + sumb;

    totalPercentage.innerHTML = Math.trunc((sumb/suma)*100) + "%";
}