import React from 'react';

const Review = () => {
    return (
        <div>
      <div className="payment-field">
        <input
          type="text"
          className="same-size-field"
          placeholder="Your name "
        />
        <br />
        <input type="text" className="same-size-field" placeholder="Company’s name, Designation" />
        <br />
        <textarea name="" id="" cols="30" rows="5" className="same-size-field" placeholder='Description'>

        </textarea>
        <br />
        <button className='submitBtn'>Submit</button>
    
        
      </div>
    </div>
    );
};

export default Review;