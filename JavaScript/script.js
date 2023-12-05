function calculateLoan() {
    var getInputValue = (id) => document.getElementById(id).value;
    var formatCurrency = (amount) => amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2 });

    var employeeId = getInputValue("employeeId");
    var employeeName = getInputValue("employeeName");
    var employeeAddress = getInputValue("employeeAddress");
    var employeeDesignation = getInputValue("employeeDesignation");
    var loanAmount = parseFloat(getInputValue("loanAmount"));
    var interestRate = parseFloat(getInputValue("interestRate"));

    if (!/^E.{3,}$/.test(employeeId)) {
        alert("Employee ID must start with 'E' and have at least four characters");
        return;
    }

    var designationFactor = { "manager": 1.2, "developer": 1.1 }[employeeDesignation] || 1;
    var totalInterest = (loanAmount * interestRate * designationFactor) / 100;
    var totalLoanAmount = loanAmount + totalInterest;

    var resultMessage = `
    <h2>Loan Details</h2>
    <p><strong>Employee ID:</strong> ${employeeId}</p>
    <p><strong>Employee Name:</strong> ${employeeName}</p>
    <p><strong>Employee Address:</strong> ${employeeAddress}</p>
    <p><strong>Employee Designation:</strong> ${employeeDesignation}</p>
    <p><strong>Loan Amount:</strong> ₹${loanAmount.toFixed(2)}</p>
    <p><strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}</p>
    <p><strong>Total Loan Amount Payable:</strong> ₹${totalLoanAmount.toFixed(2)}</p>
`;

    document.getElementById("result").innerHTML = resultMessage;
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
    }
}



