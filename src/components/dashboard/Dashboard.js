import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from 'react-router-dom';

import Dash from './Dash';
const Dashboard = () => {
  return (
    <Card className="m-1">
      <Card.Img variant="top" src="../images/cover-bg.jpg" />
      <Card.Body>
        <Card.Title> Tip of the Day</Card.Title>

        <Dash p={1} />

        <NavLink to='/book' className="btn btn-secondary">See Your Appointments</NavLink>
        </Card.Body>
    </Card>
  );
};

export default Dashboard;
