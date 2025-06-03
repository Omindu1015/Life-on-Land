document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.querySelector('.button[type="reset"]');
    const formInputs = document.querySelectorAll('.formin input, .formin select');

    clearButton.addEventListener('click', function(event) {
        event.preventDefault();
        formInputs.forEach(function(input) {
            input.value = ''; // Clearing the value of each input/select element
        });
    });
});
