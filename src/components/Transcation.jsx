// FileName: AddTransaction.js

import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  background-color: #f8f9fa;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #ccc;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #218838;
  }
`;

const Transaction = ({ setFormVisible, addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");

  const handleAddTransaction = () => {
    addTransaction({
      amount: Number(amount),
      details,
      transType,
      id: Date.now(),
    });
    setFormVisible(false);
  };

  return (
    <Wrapper>
      <InputField
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <InputField
        type="text"
        placeholder="Enter Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <RadioWrapper>
        <RadioInput
          type="radio"
          id="expense"
          name="type"
          value="expense"
          checked={transType === "expense"}
          onChange={(e) => setTransType(e.target.value)}
        />
        <Label htmlFor="expense">Expense</Label>

        <RadioInput
          type="radio"
          id="income"
          name="type"
          value="income"
          checked={transType === "income"}
          onChange={(e) => setTransType(e.target.value)}
        />
        <Label htmlFor="income">Income</Label>
      </RadioWrapper>

      <SubmitButton onClick={handleAddTransaction}>Add Transaction</SubmitButton>
    </Wrapper>
  );
};

export default Transaction;
