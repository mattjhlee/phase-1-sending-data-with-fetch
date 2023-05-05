// Add your code here
function submitData(name, email){
    const formData = {
        name: `${name}`,
        email: `${email}`,
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }
    
    return fetch ("http://localhost:3000/users", configObj)
        .then( (resp) => resp.json())
        .then( (data) => document.body.textContent = `${data.id}`)
        .catch( (error) => {
            alert("BAD BAD BAD")
            document.body.textContent = `${error.message}`
        })
}
