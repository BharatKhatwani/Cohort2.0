fetch('https://randomuser.me/api')
.then(response => {
return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})