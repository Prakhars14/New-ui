import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactFrom = ({onSubmit} ) =>{

    const [contact , setContact]  = useState({
        name:'',
        email:''
    });

const {name ,email } = contact ; 
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit=() =>{
        onSubmit(contact)
        setShow(false)
    }
    return (

    <>
 <div className="text-center mt-5">
      <button className="btn btn-primary" onClick={handleShow}>
      Generate Complete report
      </button>
</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Downlaod Report!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit ={handleSubmit}>
  <div class="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" name = "name" value={name} onChange={onChange}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="email" class="form-control" id="formGroupExampleInput2"  name = "email" value={email} onChange={onChange}/>
    <input type="submit" class="form-control" id="formGroupExampleInput2"  name = "submit" value={'submit'} />

  </div>
</form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button type= "submit" data-toggle="tooltip" data-placement="right" title="hint: email id is not mandatory ,  you can downlaod directly &#128540;" className="btn btn-primary" onClick={handleSubmit}>
           <i className="fas fa-file-pdf mr-2"> </i> Download pdf
          </button >
        </Modal.Footer>
      </Modal>
    


</>
    )
}

export default ContactFrom;