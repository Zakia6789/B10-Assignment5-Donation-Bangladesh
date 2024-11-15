
const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');

// TO switch between Tab 
function toggleTab(activeTab) {
    if (activeTab === 'donation'){
        // set donation tab as active tab 
        donationTab.classList.add(
            'text-colorFour',
            'font-semibold',
            'bg-colorTwo',
            'hover:bg-lime-400')

        donationTab.classList.remove(
            'text-gray-600',
            'bg-gray-100',
            'hover:bg-gray-200',
            'border-2')


        // set historyTab as inactive 
        historyTab.classList.remove(
            'text-colorFour',
            'font-semibold',
            'bg-colorTwo',
            'hover:bg-lime-400')

        historyTab.classList.add(
            'text-gray-600',
            'bg-gray-100',
            'hover:bg-gray-200',
            'border-2')
        // show donation section and hide historysection 
        document.getElementById('cards').classList.remove('hidden');
        document.getElementById('history-section').classList.add('hidden');
    }

    else if(activeTab ==='history'){
        historyTab.classList.add(
            'text-colorFour',
            'font-semibold',
            'bg-colorTwo',
            'hover:bg-lime-400')

        historyTab.classList.remove(
            'text-gray-600',
            'bg-gray-100',
            'hover:bg-gray-200',
            'border-2')


        // setr donation tab as inactive 
        donationTab.classList.remove(
            'text-colorFour',
            'font-semibold',
            'bg-colorTwo',
            'hover:bg-lime-400')
        donationTab.classList.add('text-gray-600',
            'bg-gray-100',
            'hover:bg-gray-200',
            'border-2')


        // show history section and hide the donation section 
        document.getElementById('cards').classList.add('hidden');
        document.getElementById('history-section').classList.remove('hidden');
    }
};
// set addEventListener to toggle 
donationTab.addEventListener('click', function(){
    toggleTab('donation');
});

historyTab.addEventListener('click', function(){
    toggleTab('history');
});



//////////////////////

function addTransactionHistory(donationName, amount) {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    // create a transactionCard 
    const transaction = document.createElement('div');
    transaction.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'border', 'border-gray-200', 'mb-4');

    // set Transaction Details on innerHtml 
    transaction.innerHTML = `
    <p class=" font-bold text-lg text-gray-colorThree "> ${amount.toFixed(2)} BDT donated for ${donationName}</p>

    <p class="text-colorThree text-sm "> ${formattedDate}, ${formattedTime} - ${donationName}</p>
    `;

    // appendChild
document.getElementById('transaction-history').appendChild(transaction);
}







//Get value by id using function Function for (card 1 Noakhali) 
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}
// add event listener for 'Donate Now' button for noakhali ('btn-donate-none')

document.getElementById('btn-donate-one').addEventListener('click', function () {
    // get the current balance from the inputs 
    const noakhaliCurrency = getInputValueById('noakhali-currency');
    const donateAmountNoakhali = getInputValueById('donate-ammount-noakhali');
    // get the main balance from the text content 
    const mainBalance = parseFloat(document.getElementById('main-balance').textContent.replace('BDT', '')) || 0;
    console.table(noakhaliCurrency, donateAmountNoakhali, mainBalance,);

    // Input validation 
    if (isNaN(donateAmountNoakhali) || donateAmountNoakhali <= 0) {
        alert("Enter a valid donation amount greater than 0 ");
        return;
    };


    if (document.getElementById('donate-ammount-noakhali').value.trim() === '') {
        alert('Please! Fill in the donation amount field');
        return;
    }
    if (donateAmountNoakhali > mainBalance) {
        alert('Insufficient ballance! The donation amount is greater than your current balamnce ');
        return;
    };


    // calculate the balance 
    const newNoakhaliCurrency = noakhaliCurrency + donateAmountNoakhali
    const newMainBalance = mainBalance - donateAmountNoakhali;

    // update the UI / DOM  ( fields with the DOM)
    document.getElementById('noakhali-currency').value = newNoakhaliCurrency.toFixed(2);
    document.getElementById('main-balance').textContent = newMainBalance.toFixed(2) + 'BDT';
       
});


// get input value by id using function (card 2 Feni)
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}
// set addEventListener
document.getElementById('btn-donate-two').addEventListener('click', function () {
    // get the current balance from input fields 
    const feniCurrency = getInputValueById('feni-currency');
    const donateAmountFeni = getInputValueById('donate-ammount-feni');
    const mainBalance = parseFloat(document.getElementById('main-balance').textContent.replace('BDT', '')) || 0;
    console.table(feniCurrency, donateAmountFeni, mainBalance);

    // Input validation 
    if (isNaN(donateAmountFeni) || donateAmountFeni <= 0) {
        alert("Enter a valid donation amount greater than 0 ");
        return;
    };


    if (document.getElementById('donate-ammount-feni').value.trim() === '') {
        alert('Please! Fill in the donation amount field');
        return;
    }
    if (donateAmountFeni > mainBalance) {
        alert('Insufficient ballance! The donation amount is greater than your current balamnce ');
        return;
    };

    // cacheslculate the balance 
    const newFeniCurrency = feniCurrency + donateAmountFeni;
    const NewMainBalance = mainBalance - donateAmountFeni;
    // Update the fields with the UI / DOM 
    document.getElementById('feni-currency').value = newFeniCurrency.toFixed(2);
    document.getElementById('main-balance').textContent = NewMainBalance.toFixed(2) + 'BDT';
});


// get input value by id from (card 3 Quota) by using function 
function getInputValueById(id) {
    return (parseFloat(document.getElementById(id).value)) || 0;
};

// set addEventListener on btn "btn-donate-three"
document.getElementById('btn-donate-three').addEventListener('click', function () {
    // get the input's values 
    const quotaCurrency = getInputValueById('quota-currency');
    const donateAmmountQuota = getInputValueById('donate-ammount-quota');
    const mainBalance = parseFloat(document.getElementById('main-balance').textContent.replace('BDT', '')) || 0;
    console.table(quotaCurrency, donateAmmountQuota, mainBalance);


    // Input validation 
    if (isNaN(donateAmmountQuota) || donateAmmountQuota <= 0) {
        alert("Enter a valid donation amount greater than 0 ");
        return;
    };


    if (document.getElementById('donate-ammount-quota').value.trim() === '') {
        alert('Please! Fill in the donation amount field');
        return;
    }
    if (donateAmmountQuota > mainBalance) {
        alert('Insufficient ballance! The donation amount is greater than your current balamnce ');
        return;
    };

    // calcule the balance 
    const newQuotaCurrency = quotaCurrency + donateAmmountQuota;
    const newMainBalance = mainBalance - donateAmmountQuota;

    // Update the fields with UI / DOM 
    document.getElementById('quota-currency').value = newQuotaCurrency.toFixed(2);
    document.getElementById('main-balance').textContent = newMainBalance.toFixed(2) + 'BDT';
})


// Modal 
// select the modal and close button (Common Function)
const successModal =document.getElementById('success-modal');
const closeModalButton  =document.getElementById('close-modal');

// function to show the modal 
function showSucessModal(){
    successModal.classList.remove('hidden');
}

// function to hide the modal by clicking "close"
closeModalButton.addEventListener('click', () =>{
    successModal.classList.add('hidden');
});

// common function to handle donation and show the success modal 
function handleDonation (buttonId){
    document.getElementById(buttonId).addEventListener('click', () =>{
        showSucessModal();
    });
}

// handleDonation Function to each button 
handleDonation('btn-donate-one');
handleDonation('btn-donate-two');
handleDonation('btn-donate-three');

