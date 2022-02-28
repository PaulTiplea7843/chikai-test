import React,{useState} from 'react';
import '../App.css';
import { Button } from '@mui/material';
import { Modal, Typography, TextField, Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import axios  from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
};

export default function ContactModal(props:any){
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [avatar, setAvatar] = useState<string | ArrayBuffer>("");
    const [link, setLink] = useState("");
    const [tags, setTags] = useState("");

    const formRef = React.useRef();
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const update = async () => {

      //formRef.current.reportValidity();

      await axios.post(`http://localhost:5000/app/updateContact?name=${name}&last_name=${lastName}&email=${email}&link=${link}&telephone=${telephone}&age=${age}&tags=${tags}&avatar=${avatar}&id=${props.id}`, { avatar: avatar} ).then(res =>{
        props.getContacts();
      })
      setOpen(false);
    }
   

    const onChange =  (event, column:string) => {
      switch(column){
          case 'name': setName(event.target.value);
          break;
          case 'last-name': setLastName(event.target.value);
          break;
          case 'email': setEmail(event.target.value);
          break;
          case 'telephone': setTelephone(event.target.value);
      
          break;
          case 'age': setAge(event.target.value);
          break;
          case 'link': setLink(event.target.value);
          break;
          case 'tags': setTags(event.target.value);
          break;
      }
      console.log(column, event.target.value);
  }

  const storePicture = (event) =>{
      const file = event.target.files[0];

      const reader = new FileReader();

      if(file){
        reader.readAsBinaryString(file);
      }
      reader.onload = (e) =>{
        setAvatar(e.target.result);
      }

      
  }
  
    return (
      <div>
        
        <EditIcon style={{cursor:"pointer"}} onClick={()=>{ handleOpen() }} />
        
        
        <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={{ ...style, width: 800, padding:5, textAlign:"center" }}>
                  <Typography variant='h4'>Edit Contact </Typography>

                <br></br>
                <br></br>
              <div className='box-content'>
              <form   ref={formRef}>
                <div>
                  <TextField required  placeholder={props.contact.name} onChange={(event)=>{ onChange(event, 'name') }}  label="Name" />
                  <br />
                  <br />
                  <TextField required placeholder={props.contact.last_name} onChange={(event)=>{ onChange(event, 'last-name') }}  label="Last Name " />
                  <br />
                  <br />
                  <TextField required placeholder={props.contact.telephone} onChange={(event)=>{ onChange(event, 'telephone') }}  label="Telephone" />
                  <br />
                  <br />
                 <div>
                  <Button
                        variant="contained"
                        fullWidth
                        component="label"
                      >
                        Upload File
                        <input
                          type="file"
                          hidden
                          required
                          onChange={(event) => { storePicture(event) }}
                         
                        />
                      </Button>
                      </div>

                </div>
                <div>
                  <TextField required placeholder={props.contact.age} onChange={(event)=>{ onChange(event, 'age') }}  label="Age" />
                  <br />
                  <br />
                  <TextField required placeholder={props.contact.email} onChange={(event)=>{ onChange(event, 'email') }}  label="Email" />
                  <br />
                  <br />
                  <TextField required placeholder={props.contact.link} onChange={(event)=>{ onChange(event, 'link') }}  label="Link" />
                  <br />
                  <br />
                  <TextField required placeholder={props.contact.tags} onChange={(event)=>{ onChange(event, 'tags') }}  label="Tags" />
                </div>
                </form>
              </div>


              <div className="modal-action" >
                <Button onClick={update}  variant="contained" color="warning">Update</Button>
              </div>
              
            </Box>
      </Modal>
      </div>
    );
}