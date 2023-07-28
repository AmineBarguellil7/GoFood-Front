import React from "react";
import Card from "react-bootstrap/Card";

export default function CardElement(props) {



  if (!props.options) {
    return null;
  }

   let options=props.options;
   let priceOptions=Object.keys(options);



  return (
    <div className="m-3">
      <Card style={{ width: "18rem", marginTop: "20px", maxHeight: "360px" }}>
        <Card.Img
          variant="top"
          src={props.imgSrc}
          style={{ height: "200px", width: "285px" }}
        />
        <Card.Body>
          <Card.Title>{props.foodName}</Card.Title>
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
            {priceOptions.map((data) => {
                return <option value={data}>{data}</option>;
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
