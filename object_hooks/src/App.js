import React from "react"
import './App.css';

//updating the state objects
// updating the state of the star(favorite) so that 
//when the user clicks, it changes 
export default function App() {
    const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
  })
  
  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
  
  function toggleFavorite() {
      
      setContact(prevContact => {   
          return{                               
              ...contact,           // here the whole object should be open, it's like copying all the elements of the
              isFavorite : !prevContact.isFavorite //of the object and specifying in "," which one to change
                                          //Also, notice as it is an object, it is wrapped around {} coz we are returning an object
          }
      })
  }
  
  return (
      <main>
          <article className="card">
              <img src="./images/user.png" className="card--image" />
              <div className="card--info">
                  <img 
                      src={`../images/${starIcon}`} 
                      className="card--favorite"
                      onClick={toggleFavorite}
                  />
                  <h2 className="card--name">
                      {contact.firstName} {contact.lastName}
                  </h2>
                  <p className="card--contact">{contact.phone}</p>
                  <p className="card--contact">{contact.email}</p>
              </div>
              
          </article>
      </main>
  )
  
}

