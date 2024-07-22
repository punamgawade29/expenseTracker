// FileName: OverviewComponent.js

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const BalanceText = styled.h2`
  font-weight: 500;
  & span {
    font-weight: bold;
  }
`;

const ToggleButton = styled.button`
  cursor: pointer;
  background-color: #007bff;
  color: white;
  padding: 10px 25px;
  font-size: 16px;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const describeC = ({ isFormVisible, setFormVisible, totalIncome, totalExpense }) => {
  const balance = totalIncome - totalExpense;

  return (
    <Wrapper>
      <BalanceText>
        Balance <span>₹{balance}</span>
      </BalanceText>
      <ToggleButton onClick={() => setFormVisible(!isFormVisible)}>
        {isFormVisible ? "Cancel" : "Add"}
      </ToggleButton>
    </Wrapper>
  );
};

export default describeC;
