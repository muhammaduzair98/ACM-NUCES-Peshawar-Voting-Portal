import React from 'react';
import
{
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, Form, FormGroup, Label, Input, Badge,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/uzair.jpg';


function PositionCard()
{
  const candidateName = 'Muhammad Uzair'
  return (
    <Container style={{ marginBottom: '30px', alignItems: 'center' }}>
      <div>
        <Card className={"hvr-grow-shadow"}>
          <Row>
            <Col xs={"4"}>
              <div style={{ width: "200px", float: 'left' }}>
                <CardImg src={img} alt="Card image cap" />
              </div>
            </Col>
            <Col xs={"6"} className={"c-position-component-item__padding-top c-position-component-item__padding-right"}>
              <CardBody>

                <div>

                  <h2>Vote For <Badge color="secondary">{candidateName}</Badge></h2>

                </div>
              </CardBody>
            </Col>


          </Row>


        </Card>

      </div>

    </Container>

  );
}

export default PositionCard;