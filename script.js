document.getElementById('calculatorForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    let productPrice = parseFloat(document.getElementById('productPrice').value);
    let shippingCost = parseFloat(document.getElementById('shippingCost').value);
    let exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    let totalCostUSD = productPrice + shippingCost;
    let freightInsurance = totalCostUSD * 0.03;
    let cifUSD = totalCostUSD + freightInsurance;

    let cifPGK = cifUSD / exchangeRate;
    let exciseDuty = cifPGK * 0.20;
    let gst = (cifPGK + exciseDuty) * 0.12;
    let totalCost = cifPGK + exciseDuty + gst;

    // Store the result in localStorage to pass it to results.html
    localStorage.setItem('cifResult', cifPGK.toFixed(2));
    localStorage.setItem('exciseDutyResult', exciseDuty.toFixed(2));
    localStorage.setItem('gstResult', gst.toFixed(2));
    localStorage.setItem('totalCostResult', totalCost.toFixed(2));

    // Redirect to results page
    window.location.href = "results.html";
});

// Display the results on the results page
window.onload = function() {
    if (localStorage.getItem('cifResult')) {
        document.getElementById('cifResult').textContent = localStorage.getItem('cifResult');
        document.getElementById('exciseDutyResult').textContent = localStorage.getItem('exciseDutyResult');
        document.getElementById('gstResult').textContent = localStorage.getItem('gstResult');
        document.getElementById('totalCostResult').textContent = localStorage.getItem('totalCostResult');
    }
};
