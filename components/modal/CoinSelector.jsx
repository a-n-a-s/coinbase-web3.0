import React, { useState } from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  thirdWebToken,
  walletAddress,
  sanityTokens,
}) => {
  return (
    <Wrapper>
      <Title>Select Asset</Title>
      <CoinList>
        {sanityTokens.map((token, index) => (
          <CoinItem
            key={index}
            token={token}
            sender={walletAddress}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            thirdWebToken={thirdWebToken}
            sanityTokens={sanityTokens}
            setAction={setAction}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
};

export default CoinSelector;
