document.getElementById('billingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    function calculateAmount() {
        // Get input values
        const fromLocation = document.getElementById('fromLocation').value;
        const toLocation = document.getElementById('toLocation').value;
        const rideDate = document.getElementById('rideDate').value;
        const baseAmount = parseFloat(document.getElementById('baseAmount').value);
    
        // Here you can add logic to adjust the price based on conditions
        let totalAmount = baseAmount; // This can be modified to include any additional calculations
    
        // Update the ride summary
        document.getElementById('summaryFrom').innerText = fromLocation;
        document.getElementById('summaryTo').innerText = toLocation;
        document.getElementById('summaryDate').innerText = rideDate;
        document.getElementById('summaryAmount').innerText = `$${totalAmount.toFixed(2)}`;
    
        // Optionally, you can show a confirmation message
        document.getElementById('responseMessage').innerText = 'Ride details updated successfully!';
    
        // Prevent default form submission
        return false; // Prevent form submission for demo purposes
    }
    
    
    

    // Collect payment details based on selected method
    let paymentData = { method: userInfo.paymentMethod };

    if (userInfo.paymentMethod === 'card') {
        paymentData.cardName = document.getElementById('cardName').value;
        paymentData.cardNumber = document.getElementById('cardNumber').value;
        paymentData.expiryDate = document.getElementById('expiryDate').value;
        paymentData.cvv = document.getElementById('cvv').value;
    } else if (userInfo.paymentMethod === 'upi') {
        paymentData.upiId = document.getElementById('upiId').value;
    } else if (userInfo.paymentMethod === 'netbanking') {
        paymentData.bankName = document.getElementById('bankName').value;
        paymentData.accountNumber = document.getElementById('accountNumber').value;
        paymentData.cardName = document.getElementById('netbankingCardName').value;
        paymentData.cardNumber = document.getElementById('netbankingCardNumber').value;
        paymentData.expiryDate = document.getElementById('netbankingExpiryDate').value;
        paymentData.cvv = document.getElementById('netbankingCvv').value;
    } else if (userInfo.paymentMethod === 'paypal') {
        paymentData.paypalEmail = document.getElementById('paypalEmail').value;
    }

    // Simulate payment processing
    setTimeout(() => {
        const isPaymentSuccessful = Math.random() > 0.2; // Simulate an 80% success rate

        if (isPaymentSuccessful) {
            document.getElementById('responseMessage').innerText = `Payment of $20.00 was successful! Thank you, ${userInfo.name}.`;
            document.getElementById('responseMessage').style.color = '#5cb85c'; // Green color for success
        } else {
            document.getElementById('responseMessage').innerText = 'Payment failed. Please try again.';
            document.getElementById('responseMessage').style.color = '#d9534f'; // Red color for error
        }
    }, 1000); // Simulate a delay for processing
});

// Show/hide payment fields based on selected payment method
document.getElementById('paymentMethod').addEventListener('change', function () {
    const paymentMethod = this.value;

    // Hide all payment fields
    document.querySelectorAll('.field-group').forEach(field => {
        field.style.display = 'none';
    });

    // Show relevant payment fields based on selected method
    if (paymentMethod === 'card') {
        document.getElementById('cardFields').style.display = 'block';
    } else if (paymentMethod === 'upi') {
        document.getElementById('upiFields').style.display = 'block';
    } else if (paymentMethod === 'netbanking') {
        document.getElementById('netbankingFields').style.display = 'block';
    } else if (paymentMethod === 'paypal') {
        document.getElementById('paypalFields').style.display = 'block';
    }
});
