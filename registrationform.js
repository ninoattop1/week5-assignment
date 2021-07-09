const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pword = document.getElementById('pword');
const rpword = document.getElementById('rpword');

const SubmitBtn = document.querySelector('#submit');

SubmitBtn.addEventListener('click', function (event) {
    if ( fname.value === lname.value) {
        alert('FirstName and LastName must not be the same')
        event.preventDefault();
    } 
    if ( pword.value !== rpword.value) {
        alert('Password did not match')
        event.preventDefault();
    }
    else {
        event.submit();
    }
})