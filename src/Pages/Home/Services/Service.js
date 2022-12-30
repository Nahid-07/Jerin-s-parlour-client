import React from 'react';
import { Card } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

const Service = ({service}) => {
    // console.log(service);
    const handleBooked = (id)=>{
        const bookedItems = {
            bookedItemsName : service.serviceName,
            bookedImg : service.img,
            price : service.price,
            details: service.details,
            id : id
        }
        alert('Are you sure you want to book this service?')
        if(alert){
            fetch('http://localhost:5000/booklists',{
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(bookedItems)
        })
        }
        toast.success('Your service has beed added to you booklist please pay the payment')
    }
    return (
        <>
            <Card
            className="shadows position-relative"
            style={{ padding: "15px" }}
          >
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={service.img} alt="" width="80px" />
              <Card.Title>{service.serviceName}</Card.Title>
              <Card.Subtitle
                style={{
                  color: "#F73E7B",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
                className="mb-2"
              >
                {service.price}
              </Card.Subtitle>
              <Card.Text style={{ textAlign: "center" }}>
                {service.details}
              </Card.Text>
              <div className="bookbtnDiv">
                <button onClick={()=>handleBooked(service._id)}>Book Now</button>
              </div>
            </Card.Body>
          </Card>
        </>
    );
};

export default Service;