let user = prompt('who\'s there?', 'nobody');
if (user == null || user == undefined)
    alert('Canceled');
else if (user == 'Admin'){
    let pw = prompt('Password?', 'password');
    if (pw == null || pw == undefined)
        alert('Canceled');
    else if (pw == 'Master')
        confirm('welcome!');
    else
     alert('wrong password');
}
else
    alert('I don\'t know you');
    