import React, { Component, useState, useEffect } from 'react';
import Camp from './Camp.jsx';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table
} from 'reactstrap';

/* the returnHome button here is currently hard coded to link back to our landing page at a presentation link
this button's functionality needs to be better fleshed out or maybe the routing needs to be fixed. 

Apart from that, we also wanted to get our favorites buttons that are rendered by Camp.jsx to function. 

In order to do this, we might have to create a function to push favorites into our hasFavs state variable in 
App.jsx and prop drill that function down to Camp.jsx. This function could take advantage of a synthetic event to grab
information about the camp from which it was rendered. See both signup(e) and login(e) in App.jsx for examples 

We would also have to create a button on this page that calls a function with a fetch request that will eventually 
INSERT INTO the favorites table on the database with both the userID and the list of favorites.
*/

const Results = props => {
  const { queriedGrounds, getWeather } = props;

  // deconstruct hook to hold latitude/longitude locally

  const [longitudes, setLongitude] = useState([]);
  const [latitudes, setLatitude] = useState([]);

  console.log(queriedGrounds, 'this is query GROUNDS information');
  const longAndLat = queriedGrounds.map((current, index) => {});

  let homeButton;
  let tableResults;

  const results = queriedGrounds.map(curr => {
    return <Camp userId={props.userId} camp={curr} getWeather={getWeather} />;
  });
  return (
    <div className='Results'>
      <h1>Your Next Adventure Awaits</h1>
      <Link to='/'>
        <Button
          className='returnHome'
          onClick={props.resetQueried}
          outline
          color='info'
        >
          Return Home{' '}
        </Button>
      </Link>
      <div
        style={{
          maxHeight: '800px',
          overflowY: 'auto'
        }}
      >
        <Table
          userId={props.userId}
          className='Table'
          scrollY
          maxHeight='400px'
        >
          <thead>
            <tr>
              <th>Camp</th>
              <th>Pets</th>
              <th>Sewer-hookup</th>
              <th>Water-hookup</th>
              <th>waterfront</th>
              {/* <th>Longitude</th> */}
              {/* <th>Latitude</th> */}
              <th>Map It</th>
              <th>Favorite</th>
              <th>Weather</th>
            </tr>
          </thead>
          <tbody>{results}</tbody>
        </Table>
      </div>
      {/* {homeButton} */}
    </div>
  );
};
export default Results;
