
import Confetti from 'react-confetti'
import React from 'react'

const Dashboard = () => {
  
  return <div className="title">
    <Confetti
      width={2000}
      height={1000}
      numberOfPieces={300}
    />
  </div>;
};

export default Dashboard;
