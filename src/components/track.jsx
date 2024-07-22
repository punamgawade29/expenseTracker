// FileName: Tracker.js 

import React, { useEffect, useState } from "react"; 
import styled from "styled-components"; 
import AddTransaction from "../components/Transcation"; 
import OverviewComponent from "../components/describeC"; 
import TransactionsContainer from "../components/TContainer"; 


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  background-image: linear-gradient(to right,pink,orange,violet);
  padding: 30px 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-left:360px;
`;

const MainHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const SectionHeading = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: red;
`;

const SummaryBox = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 30px 20px;
  background-color: white;

  text-align: center;

  & span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;

const track = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const calculateTotals = () => {
    let expense = 0;
    let income = 0;

    transactions.forEach((transaction) => {
      if (transaction.transType === "expense") {
        expense += transaction.amount;
      } else {
        income += transaction.amount;
      }
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  };

  useEffect(() => {
    calculateTotals();
  }, [transactions]);

  return (
    <Wrapper>
      <SectionHeading>MYExpenseTracker</SectionHeading>
      <MainHeading>ExpenseApplication</MainHeading>
      <OverviewComponent
        isFormVisible={isFormVisible}
        setFormVisible={setFormVisible}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
      />

      {isFormVisible && <AddTransaction setFormVisible={setFormVisible} addTransaction={addTransaction} />}

      <Summary>
        <SummaryBox isExpense>
          Expense <span>₹{totalExpense}</span>
        </SummaryBox>

        <SummaryBox>
          Budget <span>₹{totalIncome}</span>
        </SummaryBox>
      </Summary>

      <TransactionsContainer transactions={transactions} onRemoveTransaction={removeTransaction} />
    </Wrapper>
  );
};

export default track;
