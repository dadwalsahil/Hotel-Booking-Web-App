import React from "react";
import styled from "styled-components";
import { Text } from "../../components/GlobalStyles/TableStyles";
import { getDate } from "../../utils/utilFunctions";

const CardContainer = styled.div`
  background: white;
  box-shadow: 2px 3px 7px 0px #66666682;
  padding: 14px;
  border-radius: 6px;
  max-width: 100%;

  .details {
    margin-top: 16px;

    p {
      text-align: start;
      font-size: 14px;
      color: grey;
    }
  }

  .payment-status {
    padding: 6px;
    border-radius: 4px;
    background: #f16d59;
    text-align: start;
    font-size: 14px;
    width: fit-content;
    margin-top: 6px !important;
    color: #fff;

    &.paid {
      background: #5fffc5;
      color: #008d5a;
    }
  }
`;

const BookingCard = (props) => {
  const { hotel, room, from, to, bookedOn, amount, paid } = props.data;

  return (
    <CardContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            {hotel.location}, {hotel.name}
          </Text>
          <Text className={`payment-status ${paid ? "paid" : ""}`}>
            {paid ? "Paid" : "Not Paid"}
          </Text>
        </div>
      </div>
      <div className="details">
        <Text>{room.name}</Text>
        <Text>
          From {getDate(from)} - To {getDate(to)}
        </Text>
        <Text>Booked On: {getDate(bookedOn)}</Text>
        <Text>Amount: Rs. {amount}</Text>
      </div>
    </CardContainer>
  );
};

export default BookingCard;
