function submitData(name, email) {
   
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
          })
      })
      .then(function(response) {
        return response.json();
      })
      .then(data=> {
        console.log(data)
        document.body.innerHTML = data.id;
      })
      .catch(error=> {
        document.body.innerHTML = error.message;
      });
  }
  
//   submitData("Steve", "steve@steve.com")