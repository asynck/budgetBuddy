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
let incomeArr = [];
let expensesArr = [];
let ul = null;
let totalIncome = document.getElementById("incomeValue");
let totalExpenses = document.getElementById("expensesValue");
let totalPercentage = document.getElementById("totalPercentage");
let total = document.getElementById("total");

function Entry (type, description, value) {
    this.type = type;
    this.description = description;
    this.value = value;
}

// setTimeout(function() {
//     li.classList.remove("show");
// }, 0);


// e.target.remove();
        
//         let index = getChildIndex(e.target);
//         this.incomeArr.splice(index, 1);

// Entry.prototype.removeItem = function(e) {
//     let index = getChildIndex(e.target.parentElement);
//         // console.log(e.target.parentElement);
   
// };



//eventListeners
document.getElementById("enter").addEventListener("click", function() {
    expenseEntry();
    document.getElementById("description").value = "";
    document.getElementById("value").value = "";
    document.getElementById("expenseType").options.selectedIndex = 0;
    document.getElementById("enter").style.cssText = "background-color: rgb(51, 192, 173); border: 1px solid rgb(51, 192, 173)"
    totalUpdate();
});

document.getElementById("value").addEventListener("keyup", function() {
    if (event.keyCode == 13) {
    expenseEntry();
    document.getElementById("description").value = "";
    document.getElementById("value").value = "";
    document.getElementById("expenseType").options.selectedIndex = 0;
    document.getElementById("enter").style.cssText = "background-color: rgb(51, 192, 173); border: 1px solid rgb(51, 192, 173)"
    totalUpdate();
    }
});

document.getElementById("expenseType").addEventListener("click", function() {
    if (document.getElementById("expenseType").options.selectedIndex == 0) {
        document.getElementById("enter").style.cssText = "background-color: rgb(51, 192, 173); border: 1px solid rgb(51, 192, 173)"
    }
    else {
        document.getElementById("enter").style.cssText = "background-color: rgb(228, 55, 55); border: 1px solid rgb(228, 55, 55)"
    }
});

document.getElementById("incomeList").onclick = function(e) {
    // setTimeout(function() {
    //     e.target.parentElement.classList.remove("show");
    // }, 0);
    let childIndex = getChildIndex(e.target.parentElement);
    console.log(e.target.parentElement, childIndex)
    e.target.parentElement.remove();
    console.log("a", incomeArr);
    incomeArr.splice(childIndex,1);
    console.log(incomeArr)
};


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

    setTimeout(function() {
        li.className = li.className + " show";
      }, 0);
    
      //TO REMOVE
    //   li.addEventListener("click", function(){
    //     expenseNew.removeItem();
    //   });
};

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

var getChildIndex = function(child) {
    var parent = child.parentElement;
    var children = parent.children;
    var i = children.length - 1;
    for (; i >= 0; i--) {
      if (child == children[i]) {
        break;
      }
    }
    return i;
  };