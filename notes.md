// Add your code here
//fetch is a mini browser within your browser
//you chain call to fetch() with then()
//each then())call takes a callback function as its argument.TouchEventbased on the actions of the call back we can display or update the content in the dom

//constuct a POST request using fetch()
//fetch(destinationURL,configurationObj)
// configurationObj-hav 3 objects
// the HTTP verb
//--const configurationObj ={

// methos:'POST',
// headers:{ "Content-Type": "application/json",
// "Accept": "application/json"},
// body:your data goes hear(the data is sent as text)use JSON.stingify()


// };
// the Headers
// the body
const formData={dogName: "Byron", dogBreed: "Poodle", id: 0} 
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({formData
    }),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject);