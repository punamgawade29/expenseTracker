// FileName: TransactionItem.js

import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px 20px;
  border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")};
  margin-bottom: 10px;
  margin-left:360px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  background-color: #ff4757;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e84118;
  }
`;

const TransactionItem = ({ transaction, onRemoveTransaction }) => {
  return (
    <ItemWrapper isExpense={transaction?.transType === "expense"}>
      <span>{transaction.details}</span>
      <span>₹{transaction.amount}</span>
      <RemoveButton onClick={() => onRemoveTransaction(transaction.id)}>Remove</RemoveButton>
    </ItemWrapper>
  );
};

export default TransactionItem;
