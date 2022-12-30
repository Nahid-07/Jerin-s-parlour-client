import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

const Booklist = () => {
  const [bookedItems, setBookedItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booklist")
      .then((res) => res.json())
      .then((data) => setBookedItems(data));
  }, []);
  console.log(bookedItems);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-3 gap-3">
      {bookedItems.map((booked) => (
        <Card className="shadows position-relative" style={{ padding: "15px" }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <img src={booked.bookedImg} alt="" width="80px" />
            <Card.Title>{booked.bookedItemsName}</Card.Title>
            <Card.Subtitle
              style={{
                color: "#F73E7B",
                fontWeight: "600",
                fontSize: "20px",
              }}
              className="mb-2"
            >
              {booked.price}
            </Card.Subtitle>
            <Card.Text style={{ textAlign: "center" }}>
              {booked.details}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Booklist;
