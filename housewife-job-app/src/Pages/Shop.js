import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import teaching from "../Images/teaching.jpg";
import handcrafts from "../Images/handcrafts.jpg";

const Shop = () => {
  return (
    <>
      <div
        class="container"
        style={{
          alignItems: "center",
          marginTop: "10%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card style={{ width: "18rem", borderWidth: 1, borderStyle: "solid" }}>
          <Card.Img variant="top" src={teaching} style={{ width: "100%" }} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ color: "Red" }}>Pradnya Classes</Card.Title>
            <Card.Text>
              Responsibilities: Receptionist
              <br />
              Requirements : 12th pass, Fluency in Hindi and Marathi Language
              <br />
              Timings: Evening,6-9
              <br />
              Location: Mumbai,Mulund
              <br />
              Date posted: 3 Oct,2021
              <br />
              Contact: pradnyaclasses@gmail.com
            </Card.Text>
            <Button
              variant="primary"
              style={{ backgroundColor: "#44A7F7", color: "white" }}
            >
              Apply
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", borderWidth: 1, borderStyle: "solid" }}>
          <Card.Img variant="top" src={handcrafts} style={{ width: "100%" }} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ color: "Red" }}>Pune HandCrafts</Card.Title>
            <Card.Text>
              Responsibilities: Design beautiful Handcrafts
              <br />
              Timings: Afternoon,1-5
              <br />
              Location: Mumbai, Thane
              <br />
              Date posted: 4 Oct,2021
              <br />
              Contact: punehandcrafts@gmail.com
            </Card.Text>
            <Button
              variant="primary"
              style={{ backgroundColor: "#44A7F7", color: "white" }}
            >
              Apply
            </Button>
          </Card.Body>
        </Card>
      </div>
      {/* <div class="container">
     <div class="filterDiv sweets">
     <div class="card" style="width: 12rem;">
        <img src="https://hirasweets.com/wp-content/uploads/2019/10/hirasweetsexclusivesweets.jpg"
         class="card-img-top" alt="cakeimage" style="width:12rem;height:10rem;">
         <div class="card-body" style="background-color:mintcream;color:black;font-family: fantasy;">
         <p class="card-text">Sweet Item  $10</p>
        </div>
      </div>
  </div> */}
    </>
  );
};
export default Shop;
