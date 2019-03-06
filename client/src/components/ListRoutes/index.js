import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import './style.css';

const ListRoutes = ({train}) => {
  let index = 0;
  return _.map(train, ({ _id, start, end, distance }) => {
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

function mapStateToProps({ train }) {
  return { train };
}

export default connect(mapStateToProps)(ListRoutes);
