function submitData(name,email){
    fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        body:JSON.stringify({name:'name',email:'email'})
//name:`${name}`,email:`${email}`
    })    
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(data=>console.log(data))
    catch(error=>alert('Error'))
    //return fetch()
}




function init(){
    submitData('testName','test@email.com')
}

document.addEventListener('DOMContentLoaded',init)