import React,{useContext, createContext} from 'react';
import '../App.css';
import CreateContactModal from './CreateContactModal';


export default function ContactActions(props:any){
    return(
        <div className="contact-actions-section">
                <CreateContactModal getContacts={props.getContacts}  />
        </div>
    );
}