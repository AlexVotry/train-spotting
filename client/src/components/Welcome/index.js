import React from 'react';
import { Link } from 'react-router-dom';
import ListRoutes from '../ListRoutes';

const Welcome = (props) => {
  return (
    <div>
      <div className='title-info'>
        <h1 style={{ textAlign: 'center' }}>Welcome to my train route app!</h1>
        <h4> Below is a list of routes that are available to Ride.</h4>
        <ul>
          <li>If you want to find the distance along one or more stops click the <Link to="/distance">"Distance"</Link> tab</li>
          <li>If you want to find the shortest route between two stops, click on the <Link to="/shortest">"Shortest Route"</Link> tab</li>
          <li>If you want to discover how many trips you can make between two points based on number of stops, click <Link to="/trips">"Number of Trips"</Link> tab</li>
          <li>Finally, if you want to see how many different routes available based on miles, click <Link to="/different">"Different Routes"</Link> tab.</li>
        </ul>
      </div>

    <ListRoutes db={props.db}/>

    </div>
  )
}

export default Welcome;
