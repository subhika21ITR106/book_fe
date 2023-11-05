import React, { useState } from 'react';
import './PaymentPage.css';



function PaymentPage() {
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardName, setCardName] = useState('');
  const [country, setCountry] = useState('');

  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const [processingPayment, setProcessingPayment] = useState(false);

  const processPayment = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setPaymentStatus('Please enter a valid amount.');
      return;
    }

    if (!selectedPaymentMethod) {
      setPaymentStatus('Please select a payment method.');
      return;
    }

    if (!cardNumber || !expiration || !cvc || !cardName || !country) {
      setPaymentStatus('Please fill out all the card details.');
      return;
    }

    // Disable input details during payment processing
    setProcessingPayment(true);

    // Simulate a successful payment after a short delay
    setPaymentStatus('Payment sent successfully!');

    setTimeout(() => {
      // Clear the success message and re-enable input details after 3 seconds
      setPaymentStatus('');
      setProcessingPayment(false);
    }, 3000);
  };

  return (
    <>
    <div className="payment-container">
      <div className="payment-methods">
      <h2>Select Payment Method</h2>
        <div
          className={`payment-method ${selectedPaymentMethod === 'gpay' ? 'selected' : ''}`}
          onClick={() => selectPaymentMethod('gpay')}
        >
          <img
            className="payment-icon"
            src="https://static.vecteezy.com/system/resources/previews/021/672/629/non_2x/google-pay-logo-transparent-free-png.png"
            alt="Google Pay"
          />
          Google Pay
        </div>
        <div
          //className={`payment-method ${selectedPaymentMethod === 'phonepe' ? 'selected' : ''}`}
          //onClick={() => selectPaymentMethod('phonepe')}
        >
          <img
            //className="payment-icon"
            //src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
           // alt="PhonePe"
          />
         
        </div>
        <div
         // className={`payment-method ${selectedPaymentMethod === 'upi' ? 'selected' : ''}`}
          //onClick={() => selectPaymentMethod('upi')}
        >
          
        
        </div>
      </div>
      <div>
        {(selectedPaymentMethod === 'gpay') && (
          <img
            className="payment-image"
            src="/Pay.jpg"
            alt={`${selectedPaymentMethod} Image`}
          />
        )}
      </div>
      </div>
      
      </>
  );
}

export default PaymentPage;
