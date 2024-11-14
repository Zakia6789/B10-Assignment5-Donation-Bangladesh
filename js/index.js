// function for sticky top navigation 
window.addEventListener('scroll', function(){
    const header =document.querySelector('header');

    if(window.scrollY > 0){
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width ='100%';
        header.style.zIndex = '1000';
    }
    else{
        header.style.position = 'relative';
    }
});
// Tab functionalities 
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        'text-colorFour',
        'font-semibold',
       'bg-colorTwo'
    );
historyTab.classList.remove(
    'text-gray-600',
    'bg-gray-100',
    'hover:bg-gray-200',
    'border-2'
    );

  

    donationTab.classList.remove(
        'text-colorFour',
        'font-semibold',
       'bg-colorTwo',
       'hover:bg-lime-400'
   
      
    );
    donationTab.classList.add(
        'text-gray-600',
           'bg-gray-100',
    'hover:bg-gray-200',
    'border-2'
    );
 });









//Get value by id using function Function for (card 1) 
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value) || 0;
}
// add event listener for 'Donate Now' button for noakhali ('btn-donate-none')

document.getElementById('btn-donate-one').addEventListener('click', function(){
    // get the current balance from the inputs 
    const noakhaliCurrency = getInputValueById('noakhali-currency');
    const donateAmountNoakhali= getInputValueById('donate-ammount-noakhali');
    // get the main balance from the text content 
    const mainBalance =parseFloat(document.getElementById('main-balance').textContent.replace('BDT', '')) || 0;
    console.table(noakhaliCurrency, donateAmountNoakhali, mainBalance,);

    // Input validation 
    if(isNaN(donateAmountNoakhali) || donateAmountNoakhali <= 0) {
        alert("Enter a valid donation amount greater than 0 ");
        return;
    };


    if(document.getElementById('donate-ammount-noakhali').value.trim() === ''){
        alert('Please! Fill in the donation amount field');
        return;
    }
    if(donateAmountNoakhali > mainBalance){
        alert('Insufficient ballance! The donation amount is greater than your current balamnce ');
        return;
    };


    // calculate the balance 
    const newNoakhaliCurrency =noakhaliCurrency + donateAmountNoakhali
    const newMainBalance = mainBalance - donateAmountNoakhali;

    // update the UI / DOM  ( fields with the DOM)
    document.getElementById('noakhali-currency').value =newNoakhaliCurrency.toFixed(2);
    document.getElementById('main-balance').textContent= newMainBalance.toFixed(2) + 'BDT';

})

 
// get input value by id using function (card 2)
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value)|| 0;
}
// set addEventListener
document.getElementById('btn-donate-two').addEventListener('click', function(){
    // get the current balance from input fields 
    const feniCurrency = getInputValueById('feni-currency');
    const donateAmountFeni = getInputValueById('donate-ammount-feni');
    const mainBalance = parseFloat(document.getElementById('main-balance').textContent.replace('BDT', '')) || 0;
    console.table(feniCurrency, donateAmountFeni, mainBalance);

       // Input validation 
       if(isNaN(donateAmountFeni) || donateAmountFeni <= 0) {
        alert("Enter a valid donation amount greater than 0 ");
        return;
    };


    if(document.getElementById('donate-ammount-feni').value.trim() === ''){
        alert('Please! Fill in the donation amount field');
        return;
    }
    if(donateAmountFeni > mainBalance){
        alert('Insufficient ballance! The donation amount is greater than your current balamnce ');
        return;
    };

    // cacheslculate the balance 
    const newFeniCurrency = feniCurrency + donateAmountFeni;
    const NewMainBalance  = mainBalance - donateAmountFeni;
    // Update the fields with the UI / DOM 
    document.getElementById('feni-currency').value = newFeniCurrency.toFixed(2);
    document.getElementById('main-balance').textContent = NewMainBalance.toFixed(2) + 'BDT';
});


// get input value by id from (card 3) by using function 
function getInputValueById(id){
    return (parseFloat(document.getElementById(id).value)) || 0;
};

// set addEventListener on btn "btn-donate-three"
document.getElementById('btn-donate-three').addEventListener('click', function(){
    // get the input's values 
    const quotaCurrency = getInputValueById('quota-currency');
    const donateAmmountQuota = getInputValueById('donate-ammount-quota');
    const mainBalance  = parseFloat(document.getElementById('main-balance').textContent.replace('BDT', '')) || 0;
    console.table(quotaCurrency, donateAmmountQuota, mainBalance);


        // Input validation 
        if(isNaN(donateAmmountQuota) || donateAmmountQuota <= 0) {
            alert("Enter a valid donation amount greater than 0 ");
            return;
        };
    
    
        if(document.getElementById('donate-ammount-quota').value.trim() === ''){
            alert('Please! Fill in the donation amount field');
            return;
        }
        if(donateAmmountQuota > mainBalance){
            alert('Insufficient ballance! The donation amount is greater than your current balamnce ');
            return;
        };

    // calcule the balance 
    const newQuotaCurrency = quotaCurrency + donateAmmountQuota;
    const newMainBalance   = mainBalance - donateAmmountQuota;

    // Update the fields with UI / DOM 
    document.getElementById('quota-currency').value = newQuotaCurrency.toFixed(2);
    document.getElementById('main-balance').textContent = newMainBalance.toFixed(2) + 'BDT';
})

