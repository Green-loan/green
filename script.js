const ctx = document.getElementById('investmentChart').getContext('2d');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Investment', 'Returns'],
    datasets: [{
      data: [10000, 5000],
      backgroundColor: ['gold', '#388E3C'],
    }]
  }
});

window.onload = function() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    document.getElementById('logged-in-user').innerText = `Welcome, ${loggedInUser}`;
  }
};

function updateClock() {
  const now = new Date();
  document.getElementById('calendar').innerHTML = now.toDateString() + ' ' + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

function showInvestOptions() {
  Swal.fire({
    title: 'Investment Options',
    showDenyButton: true,
    confirmButtonText: 'Deposit',
    showDenyButton: false,
  }).then((result) => {
    if (result.isConfirmed) {
      showDepositForm();
    } else if (result.isDenied) {
      Swal.fire('Edit Investment Selected', '', 'info');
    }
  });
}

window.onload = function() { 
  const loggedInUser = localStorage.getItem('loggedInUser') || 'Guest';
  const message = `Welcome, ${loggedInUser}, did you know...`;
  document.getElementById('scrolling-message').innerText = message;
};

function showDepositForm() {
  Swal.fire({
    title: 'Deposit Funds',
    html: `
      <div class="payment-grid">
        <div class="payment-option" onclick="showPaypalPopup()">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal">
        </div>
        <div class="payment-option" onclick="showCapitecPopup()">
          <img src="assets/stand.png" alt="standardbank">
        </div>
      </div>
    `,
    showConfirmButton: false,
  });
}

function showPaypalPopup() {
  window.open('https://www.paypal.com/signin', 'PayPal', 'width=500,height=500');
}

function showCapitecPopup() {
  Swal.fire({
    title: 'Investment Payment Form',
    html: `
      <div class="payment-instructions">
        <p><strong>Before filling this form, pay the invested amount to the following account:</strong></p>
        <p>Bank Name: Standard Bank</p>
        <p>Account Number: 123456789</p>
        <p>Account Holder: Green Loan</p>
      </div>
      <form id="capitecForm">
        <input type="text" id="fullName" class="swal2-input" placeholder="Full Name" required>
        <input type="text" id="idNumber" class="swal2-input" placeholder="ID Number" required>
        <input type="text" id="address" class="swal2-input" placeholder="Address" required>
        <input type="number" id="amount" class="swal2-input" placeholder="Amount Investing" required oninput="calculateAmountToReceive()">
        <input type="number" id="amountToReceive" class="swal2-input" placeholder="Amount to Receive" readonly>
        <input type="number" id="period" class="swal2-input" placeholder="Period of Investment (Years)" required>
        <input type="text" id="accountNumber" class="swal2-input" placeholder="Account Number" required>
        <select id="bankName" class="swal2-select" required>
          <option value="">Select Bank</option>
          <option value="Capitec">Capitec</option>
          <option value="ABSA">ABSA</option>
          <option value="Standard Bank">Standard Bank</option>
          <option value="FNB">FNB</option>
        </select>
        <input type="file" id="proofOfPayment" class="swal2-file" placeholder="Upload Proof of Payment" required>
        <label>
          <input type="checkbox" id="terms" required> 
          I accept the <span class="terms-link" onclick="showTerms()">terms and conditions</span>
        </label>
      </form>
    `,
    showCancelButton: true,
    confirmButtonText: 'Submit',
    preConfirm: () => {
      const fullName = Swal.getPopup().querySelector('#fullName').value;
      const idNumber = Swal.getPopup().querySelector('#idNumber').value;
      const address = Swal.getPopup().querySelector('#address').value;
      const amount = Swal.getPopup().querySelector('#amount').value;
      const amountToReceive = Swal.getPopup().querySelector('#amountToReceive').value;
      const period = Swal.getPopup().querySelector('#period').value;
      const accountNumber = Swal.getPopup().querySelector('#accountNumber').value;
      const bankName = Swal.getPopup().querySelector('#bankName').value;
      const proofOfPayment = Swal.getPopup().querySelector('#proofOfPayment').files[0];
      const terms = Swal.getPopup().querySelector('#terms').checked;

      if (!fullName || !idNumber || !address || !amount || !period || !accountNumber || !bankName || !proofOfPayment || !terms) {
        Swal.showValidationMessage('Please fill out all fields and accept the terms and conditions');
      }

      return { fullName, idNumber, address, amount, amountToReceive, period, accountNumber, bankName, proofOfPayment, terms };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Submitted!', 'Your investment details have been submitted.', 'success');
    }
  });
}
   window.onload = function() { 
      const loggedInUser = localStorage.getItem('loggedInUser') || 'Guest';
      const message = `Welcome, ${loggedInUser}, did you know...`; // Corrected template literal syntax
      document.getElementById('scrolling-message').innerText = message;

function showWithdrawOptions() {
  Swal.fire({
    title: 'Withdraw Funds',
    html: `
      <input type="number" id="withdrawAmount" class="swal2-input custom-input" placeholder="Enter withdrawal amount" required>

      <select id="investmentChoice" class="swal2-input custom-input">
        <option value="100">R100 Investment</option>
        <option value="300">R300 Investment</option>
      </select>

      <select id="withdrawOption" class="swal2-input custom-input" required>
        <option value="">Select Withdrawal Method</option>
        <option value="Bank Transfer">Bank Transfer</option>
        <option value="Cash Send">Cash Send</option>
        <option value="Voucher">Voucher</option>
      </select>

      <p class="note">Note: Please be aware that if you choose to withdraw your investment before the due time, a fee of 10% of the invested amount will be charged. Make sure to consider the timing of your withdrawal to avoid any unnecessary charges.</p>
    `,
    showCancelButton: true,
    confirmButtonText: 'Withdraw',
    preConfirm: () => {
      const withdrawAmount = Swal.getPopup().querySelector('#withdrawAmount').value;
      const withdrawOption = Swal.getPopup().querySelector('#withdrawOption').value;

      if (!withdrawAmount || !withdrawOption) {
        Swal.showValidationMessage('Please enter withdrawal amount and select a method');
      }

      return { withdrawAmount, withdrawOption };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { withdrawAmount, withdrawOption } = result.value;
      Swal.fire(`Withdrawal of R${withdrawAmount} via ${withdrawOption} requested.`, '', 'success');
    }
  });
}
