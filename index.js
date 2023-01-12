
function submitData(name, email) {
    const data = {
      name: 'Steve',
      email: 'steve@steve.com'
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
    return fetch('http://localhost:3000/users', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        let newId = data.id;
        let newIdNode = document.createElement("div");
        newIdNode.innerHTML = newId;
        document.body.appendChild(newIdNode);
      })
      .catch(error => {
        let errorNode = document.createElement("div");
        errorNode.innerHTML = error.message;
        document.body.appendChild(errorNode);
      });
  }
  
 
  
  
  
  
  