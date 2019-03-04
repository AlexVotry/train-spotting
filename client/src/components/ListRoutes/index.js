import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';
import _ from 'lodash';

const ListRoutes = (props) => {
  let index = 0;
  return _.map(props.db, ({ _id, start, end, distance }) => {
    index++;
    return (
      <Card className="routeList" key={_id}>
        <Card.Body>
          <Card.Title>Route {index}</Card.Title>
          <Card.Text>Depart: {start.toUpperCase()}</Card.Text>
          <Card.Text>Arrive: {end.toUpperCase()}</Card.Text>
          <Card.Text>Distance: {distance} miles</Card.Text>
        </Card.Body>
      </Card>
    );
  })
}

export default ListRoutes;
