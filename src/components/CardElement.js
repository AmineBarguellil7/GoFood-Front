import React from "react";
import Card from "react-bootstrap/Card";

export default function CardElement() {
  return (
    <div className="m-3">
      <Card style={{ width: "18rem", marginTop: "20px", maxHeight: "360px" }}>
        <Card.Img
          variant="top"
          src={require("../img/istockphoto-1309352410-1024x1024.jpg")}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>good</Card.Text>
          <div className="container w-100">
            <select className="m-3 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">half</option>
              <option value="full">full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
