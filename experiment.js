let expense = [];
let income = [];
let totalincome = 0;
let totalexpense = 0;
let totalamount = 0;

const incomeCurrency = document.getElementById("incomeCurrency");
// const addIncome = document.getElementById("addIncome");
// const addExpense = document.getElementById("addExpense");
const incomeDescription = document.getElementById("incomeDescription");
const expenseDescription = document.getElementById("expenseDescription");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseCurrency = document.getElementById("expenseCurrency");
const incomeAmount= document.getElementById("incomeAmount");

function addIncomeValue() {

    const description = document.getElementById('incomeDescription').value;
    const amount = document.getElementById('incomeAmount').value;
    const currency = document.getElementById('incomeCurrency').value;
    
    if (description === '' || amount === '' || currency === '') 
    {
        alert('Please fill in all fields');
        return;
    }

    if (amount <= 0)
      {
        alert('input invalid');
        return;
      }

     // Here you can handle the addition of income data, like sending it to a server or storing it locally
     console.log('Income Description:', description);
     console.log('Income Amount:', amount);
     console.log('Currency:', currency);
     document.getElementById('incomePopup').style.display = 'none';


//======== calculation of total income =============

    income.push(incomeAmount.value);
    income = income.map(Number);
    console.log(income);

    totalincome = 0;
    for (let i = 0; i < income.length; i++) 
    {
      totalincome = totalincome + income[i];
    }

  // Output the income
  console.log("The sum of income is:", totalincome);

  //=========== calculation of savings ============

totalamount = totalincome - totalexpense ;
console.log("savings ", totalamount);



}

  function addExpense() 
  {
    var description = document.getElementById('expenseDescription').value;
    var amount = document.getElementById('expenseAmount').value;
    var category = document.getElementById('expenseCategory').value;
    var currency = document.getElementById('expenseCurrency').value;
    
    if (description === '' || amount === '' || category === '' || currency === '') {
      alert('Please fill in all fields');
      return;
    }

    if (amount <= 0)
      {
        alert('input invalid');
        return;
      }
    
    // Here you can handle the addition of expense data, like sending it to a server or storing it locally
    console.log('Expense Description:', description);
    console.log('Expense Amount:', amount);
    console.log('Category:', category);
    console.log('Currency:', currency);
    document.getElementById('expensePopup').style.display = 'none';

    expense.push(expenseAmount.value);
    expense = expense.map(Number);
    console.log(expense); 

    totalexpense = 0;
    for (let j = 0; j < expense.length; j++) 
    {
      totalexpense = totalexpense + expense[j];
    }
  
  // Output the expense
  console.log("The sum of expense is:", totalexpense);


  //=========== calculation of savings ============

totalamount = totalincome - totalexpense ;
console.log("savings ", totalamount);


}

  document.getElementById('addIncome').addEventListener('click', function() {
    document.getElementById('incomePopup').style.display = 'block';
  });

  document.getElementById('addExpense').addEventListener('click', function() {
    document.getElementById('expensePopup').style.display = 'block';
  });

  function closePopup(id) {
    document.getElementById(id).style.display = 'none';
  }

  function resetForm(id) {
    document.getElementById(id).querySelectorAll('input[type=text], input[type=number], select').forEach((element) => {
      element.value = '';
    });

//================ Display outputs =================

// document.getElementById("outputIncome").innerHTML = totalincome;
// document.getElementById("outputExpense").innerHTML = totalexpense;
// document.getElementById("outputSaving").innerHTML = totalamount;


document.getElementById('income-display').querySelector('span').innerText = '$' + totalincomeincome;
document.getElementById('expense-display').querySelector('span').innerText = '$' + totalexpenseexpense;
document.getElementById('total-display').querySelector('span').innerText = '$' + totalamount;
}







// Function to add a new task
function addTask(expenseDescription, expenseAmount, expenseCurrency, expenseCategory) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <strong>${expenseCurrency}</strong> &nbsp &nbsp&nbsp &nbsp${expenseCategory}&nbsp&nbsp&nbsp[${expenseDescription}]&nbsp&nbsp&nbsp&nbsp&nbsp&nbspRs.${expenseAmount}
    <span class="delete">❌</span>
  `;

    document.getElementById('task-list').appendChild(listItem);
}

// Function to handle form submission
document.getElementById('expenseForm').addEventListener('submit', function(e) {
   
// Stop propagation to prevent hiding the form
    const taskInput = document.getElementById('expenseDescription');
    const amountInput = document.getElementById('expenseAmount');
    const dateInput = document.getElementById('expenseCurrency');
    const categoryInput = document.getElementById('expenseCategory');

    const expenseDescription = taskInput.value;
    const expenseAmount = amountInput.value;
    const expenseCurrency = dateInput.value;
    const expenseCategory = categoryInput.value;

    if (expenseDescription.trim() === '' || expenseAmount.trim() === '' || expenseCurrency.trim() === '' || expenseCategory.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    addTask(expenseDescription, expenseAmount, expenseCurrency, expenseCategory);

    dateInput.value = '';
    categoryInput.value = '';
    taskInput.value = '';
    amountInput.value = '';
});

// Function to handle task deletion
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Show/hide form when "Add Payment" button is clicked
let addPaymentsVisible = false; // Track if "Add Payments" is visible
document.getElementById('expensePopup').addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click event from reaching document
    const formContainer = document.querySelector('.form-container');
    if (addPaymentsVisible) {
        // If "Add Payments" is already visible, hide it
        formContainer.style.display = 'none';
    } else {
        // Otherwise, show it
        formContainer.style.display = 'block';
        document.getElementById('task-list').style.display = 'none';
    }
    addPaymentsVisible = !addPaymentsVisible; // Toggle the visibility status
});

// Show/hide task list when "View Payments" button is clicked

    document.getElementById('view-payments-btn').addEventListener('click', function() {
        console.log("Button clicked"); // Add this line
        const taskList = document.getElementById('task-list');
        taskList.style.display = taskList.style.display === 'none' ? 'block' : 'none';
    });
    
