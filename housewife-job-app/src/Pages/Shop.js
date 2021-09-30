import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import IMG from "../Images/IMG.jpeg";

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
          <Card.Img variant="top" src={IMG} style={{ width: "100%" }} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ color: "Red" }}>
              Kashmiri HandCrafts
            </Card.Title>
            <Card.Text>
              Responsibilities: Design beautiful kashmir style HandCrafts
              <br />
              Location: Bangalore
              <br />
              Date posted: 1 Oct,2021
              <br />
              Contact: kashmirhandcrafts@gmail.com
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
          <Card.Img variant="top" src={IMG} style={{ width: "100%" }} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ color: "Red" }}>
              Kashmiri HandCrafts
            </Card.Title>
            <Card.Text>
              Responsibilities: Design beautiful kashmir style HandCrafts
              <br />
              Location: Bangalore
              <br />
              Date posted: 1 Oct,2021
              <br />
              Contact: kashmirhandcrafts@gmail.com
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
