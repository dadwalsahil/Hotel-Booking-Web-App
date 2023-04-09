import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../../components/GlobalStyles/PageStyles";
import Loader from "../../components/Loaders/Loader";
import BookingCard from "./BookingCard";

const GridContainer = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
`;

const Container = styled.div`
  margin-top: 90px;

  .grid-container {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    @media (max-width: 375px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`;

const BookingsList = (props) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const curDate = new Date().setHours(0, 0, 0, 0);

  let upcomingBookings = props.bookings
    ? props.bookings.filter((b) => new Date(b.from) > curDate)
    : [];
  let oldBookings = props.bookings
    ? props.bookings.filter((b) => new Date(b.from) <= curDate)
    : [];

  upcomingBookings = upcomingBookings.filter((b) => {
    return b.hotel.name.toLowerCase().includes(query.toString().toLowerCase());
  });
  oldBookings = oldBookings.filter((b) => {
    return b.hotel.name.toLowerCase().includes(query.toString().toLowerCase());
  });

  return (
    <Container>
      <Text style={{ fontSize: "20px", margin: "26px 0" }}>
        Upcoming Bookings
      </Text>

      <GridContainer className="grid-container">
        {!loading ? (
          upcomingBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              data={booking}
              setLoading={setLoading}
              loading={loading}
              setModal={props.setModal}
            />
          ))
        ) : (
          <Loader />
        )}
      </GridContainer>
      {upcomingBookings.length === 0 && (
        <Text
          className="small"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          No Bookings
        </Text>
      )}

      <br />

      <Text style={{ fontSize: "20px", margin: "26px 0" }}>Old Bookings</Text>
      <GridContainer className="grid-container">
        {!loading ? (
          oldBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              data={booking}
              setLoading={setLoading}
              loading={loading}
              setModal={props.setModal}
              isOld={true}
            />
          ))
        ) : (
          <Loader />
        )}
      </GridContainer>
      {oldBookings.length === 0 && (
        <Text
          className="small"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          No Bookings
        </Text>
      )}
    </Container>
  );
};

export default BookingsList;
