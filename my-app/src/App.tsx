import React, {useState, useEffect ,useContext} from 'react';
import './App.css';
import ContactRow from './components/ContactRow';
import ContactActions from './components/ContactActions';
import axios from 'axios';




function App() {


const [contacts, setContacts] = useState<Array<Object>>([]);

 const getContacts =async () => {
       await axios({
             method:"GET",
             url:"http://localhost:5000/app/getContacts"
       }).then(res => {
            setContacts(res.data.data)
       })   
 }
 
 useEffect(() => {
       getContacts();
 },[]);



  return (
    <div className="App">
          <div className='title'>
                <h1> - User Contacts -</h1>
          </div>
         
          {contacts.map((contact, index) => (
                 <div key={index}>
                       <div className='contacts-table'>
                              <ContactRow contact={contact} getContacts={getContacts}/>
                       </div>
                   </div>
                    ))}

<           div className='contacts-actions'>
                              <ContactActions  getContacts={getContacts} />
            </div>            
    </div>
  );
}

export default App;
