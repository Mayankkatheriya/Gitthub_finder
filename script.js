let data = fetch("https://api.github.com/users/Mayankkatheriya")
.then(response => response.json())
.then(data => console.log(data))