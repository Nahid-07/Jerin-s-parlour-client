import React from "react";
import { toast } from "react-hot-toast";
import "./addservice.css";

const AddService = () => {
  const handleAddServices=(e)=>{
    e.preventDefault()
    const form = e.target;
    const title = form.title.value;
    const file = form.file.value;
    const description = form.description.value;
    const service = {
      title,
      file,
      description
    }
    fetch('https://jerins-parlour-server.vercel.app/services', {
      method:"POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success('Service added');
        form.reset()
      }
    })

  }
  return (
    <div className="serviceBG">
      <form onSubmit={handleAddServices} className="payment-field">
        <input
          type="text"
          className="same-size-field"
          placeholder="Service Title"
          name="title"
        />
        <input type="file" id="" className="fileUpload" name='file' />
        <br />
        <textarea
          id=""
          cols="30"
          rows="5"
          className="same-size-field"
          placeholder="Description"
          name='description'
        ></textarea>
        <br />
        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
