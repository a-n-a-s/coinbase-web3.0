import React from "react";
import styled from "styled-components";
import Transfer from "./Transfer";
import CoinSelector from "./CoinSelector";
import { TailSpin } from "react-loader-spinner";
import Receive from "./Receive";

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
const TransferModal = ({ sanityTokens, walletAddress, thirdWebTokens }) => {
  const [action, setAction] = useState("Send");
  const [selectedToken, setSelectedToken] = useState(sanityToken[0]);

  const selectedStyle = {
    color: "#3773f5",
  };
  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const selectedModal = (option) => {
    switch (option) {
      case "Send":
        return (
          <Transfer
            selectedToken={selectedToken}
            walletAddress={walletAddress}
            thirdWebTokens={thirdWebTokens}
            setAction={setAction}
          />
        );
      case "Receive":
        return (
          <Receive
            selectedToken={selectedToken}
            walletAddress={walletAddress}
            setAction={setAction}
          />
        );
      case "Select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "Transferring":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              flexDirection: "column",
            }}
          >
            <h2>Transferring...</h2>
            <TailSpin
              height="100"
              width="100"
              color="#3773f5"
              ariaLabel="loading"
            />
          </div>
        );
      case "Transferred":
        return (
          <>
            <div
              style={{
                color: "#27ad75",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              <h2>Transferred</h2>
            </div>
            ;
          </>
        );
      default:
        return <h2>Send</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "Send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("Send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "Receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("Receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;
