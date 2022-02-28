import React, {useState} from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ContactModal from './ContactModal';
import Typography from '@mui/material/Typography';


export default function ContactRow(props:any){

    const [contact, setContact] = useState(props.contact);

    return(
        <Card className='contact-row-card'>
        <CardContent className="content">
            <div className='card-content'>
                <div className='contact-data-section'>
                <Typography className="contact-column">{contact.name} {contact.last_name}</Typography>
                <Typography className="contact-column" id="phone-column">{contact.telephone}</Typography>
                </div>
                <div className='contact-data-section'>
                <Typography className="contact-column">{contact.email}</Typography>
                <Typography className="contact-column">{contact.age} years</Typography>
                <Typography className="contact-column">{contact.avatar}</Typography>
                <Typography className="contact-column"><a href={`http://${contact.link}`}>{contact.link}</a></Typography>
                <Typography className="contact-column">{contact.tag}</Typography>
                <ContactModal id={contact.id} getContacts={props.getContacts} contact={props.contact}/>
                </div>
            </div>
        </CardContent>
      </Card>
      
    );

}