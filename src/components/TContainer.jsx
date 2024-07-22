// FileName: TransactionsContainer.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Wrapper = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #ccc;
  background-color: #f8f9fa;
  margin-bottom: 25px;
`;

const TransactionsList = styled.div``;

const TContainer = ({ transactions, onRemoveTransaction }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filterTransactions = (query) => {
    if (!query || !query.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    const filtered = transactions.filter((transaction) =>
      transaction.details.toLowerCase().includes(query.toLowerCase().trim())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filterTransactions(searchQuery);
  }, [transactions, searchQuery]);

  return (
    <Wrapper>
      <Heading>Transactions</Heading>

      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <TransactionsList>
        {filteredTransactions.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              onRemoveTransaction={onRemoveTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </TransactionsList>
    </Wrapper>
  );
};

export default TContainer;
