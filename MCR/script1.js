document.getElementById('submitBtn').addEventListener('click', function() {
    // Gather form data
    const clientName = document.getElementById('clientName').value;
    const generatedBy = document.getElementById('generatedBy').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Create an object with the form data
    const formData = {
        clientName: clientName,
        generatedBy: generatedBy,
        month: month,
        year: year
    };

    // Store the form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to receiver.html
    window.location.href = 'index2.html';
});
