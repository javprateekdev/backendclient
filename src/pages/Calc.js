
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Calc = () => {
    const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const rate = interestRate / (12 * 100);
    const numerator = rate * Math.pow(1 + rate, tenure);
    const denominator = Math.pow(1 + rate, tenure) - 1;
    setMonthlyEMI(principal * numerator / denominator);
    setTotalInterest(monthlyEMI * tenure - principal);
    setTotalPayment(monthlyEMI * tenure);
  };

  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [principal, totalInterest],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="principal">Principal:</label>
          <input
            type="text"
            id="principal"
            value={principal}
            onChange={(event) => setPrincipal(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate (% p.a):</label>
          <input
            type="text"
            id="interestRate"
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tenure">Tenure (in months):</label>
          <input
            type="text"
            id="tenure"
            value={tenure}
            onChange={(event) => setTenure(event.target.value)}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {monthlyEMI > 0 && (
        <div>
          <p>
            Monthly EMI: <b>{monthlyEMI}</b>
          </p>
          <p>
            Total Interest: <b>{totalInterest}</b>
          </p>
          <p>
            Total Payment: <b>{totalPayment}</b>
          </p>
          <Doughnut data={data} />
        </div>
      )}
    </div>
  )
}

export default Calc;