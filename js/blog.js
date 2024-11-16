
// TO switch between Tab 
const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');

function toggleTab(activeTab) {
    if (activeTab === 'donation') {
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

    else if (activeTab === 'history') {
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
donationTab.addEventListener('click', function () {
    toggleTab('donation');
});

historyTab.addEventListener('click', function () {
    toggleTab('history');
});

