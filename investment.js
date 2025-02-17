// Function to handle investment form submission
function submitInvestmentForm() {
  // Get data from input fields
  const fullName = document.getElementById("fullName").value;
  const idNumber = document.getElementById("idNumber").value;
  const address = document.getElementById("address").value;
  const amountInvested = document.getElementById("amount").value;
  const period = document.getElementById("period").value;
  const accountNumber = document.getElementById("accountNumber").value;
  const bankName = document.getElementById("bankName").value;
  const proofOfPayment = document.getElementById("proofOfPayment").files[0];
  const termsAccepted = document.getElementById("terms").checked;

  // Get the current date and time
  const date = new Date().toISOString();

  // Check if all required fields are filled
  if (fullName && idNumber && amountInvested && period && accountNumber && bankName && proofOfPayment && termsAccepted) {
    // Create a new investment object
    const investmentData = {
      fullName: fullName,
      idNumber: idNumber,
      address: address,
      amountInvested: amountInvested,
      period: period,
      accountNumber: accountNumber,
      bankName: bankName,
      proofOfPayment: proofOfPayment.name, // Store file name, not the file itself
      date: date,
      investmentHistory: [{
        amountInvested: amountInvested,
        date: date
      }]
    };

    // Push the investment data to Firebase
    const newInvestmentRef = push(ref(database, 'investors'));
    set(newInvestmentRef, investmentData)
      .then(() => {
        Swal.fire('Investment Successful', 'Your investment has been recorded.', 'success');
      })
      .catch((error) => {
        Swal.fire('Error', `Something went wrong: ${error.message}`, 'error');
      });
  } else {
    Swal.fire('Missing Fields', 'Please fill out all required fields.', 'error');
  }
}
