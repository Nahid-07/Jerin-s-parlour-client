import React from 'react';
import './addservice.css'

const AddService = () => {
    return (
        <div className='serviceBG'>
      <div className="payment-field">
        <input
          type="text"
          className="same-size-field"
          placeholder="Service Title"
        />
        <input type="file" name="" id="" className='fileUpload'/>
        <br />
        <textarea name="" id="" cols="30" rows="5" className="same-size-field" placeholder='Description'>

        </textarea>
        <br />
        <button className='submitBtn'>Submit</button>
    
        
      </div>
    </div>
    );
};

export default AddService;