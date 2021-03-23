import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Start = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Start Page</h2>

          <div className="w-100 text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Start;
