// Variables 
var nameOfExpense = document.querySelector('#expense');

var dateOfExpense = document.querySelector('#date');

var amountOfExpense = document.querySelector('#amount');

var expenseButton = document.querySelector('#submit');

var noExpense = document.querySelector('.f-row');

// Event Listeners
expenseButton.addEventListener('click', function () {

    // li after an expense has been made
    var li = document.createElement('li');
    li.classList.add('table-row');
    // li.classList.add('f-row');

    // div 1 as a child of li
    var div1 = document.createElement('div');
    div1.classList.add('col');
    div1.classList.add('col-1');
    div1.innerText = nameOfExpense.value;
    li.appendChild(div1);

    // div 2 as a child of li
    var div2 = document.createElement('div');
    div2.classList.add('col');
    div2.classList.add('col-2');
    div2.innerText = dateOfExpense.value;
    li.appendChild(div2);

    // div 3 as a child of li
    var div3 = document.createElement('div');
    div3.classList.add('col');
    div3.classList.add('col-3');
    div3.innerText = '$' + amountOfExpense.value;
    li.appendChild(div3);

    // div 8 as a child of li
    var div4 = document.createElement('div');
    div4.classList.add('col');
    div4.classList.add('col-4');
    div4.innerHTML = "<i class='bx bx-x btn'></i>";
    li.appendChild(div4);

    // The if statement to identify if an entry has been made in name 
    if(nameOfExpense.value === ''){
        alert('Enter an expense');
    } else{
        noExpense.appendChild(li);
    }
    if(dateOfExpense.value === ''){
        alert('Enter the date the expense was made');
    } else{
        noExpense.appendChild(li);
    }
    if(amountOfExpense.value === ''){
        alert('Enter an amount');
    } else{
        noExpense.appendChild(li);
    }
   

    nameOfExpense.value = '';
    dateOfExpense.value = '';
    amountOfExpense.value = '';

    div4.addEventListener('click', function (evt) {
        var target = evt.target;
        target.parentElement.parentElement.remove();
    });
    
});



