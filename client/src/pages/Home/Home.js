import React, { useContext, useEffect } from "react";
import HomeBG from "../../assets/payroo.jpg";
import styled from "styled-components";
import { GlobalContext } from "../../utils/Context";
import { PageContainer, Text } from "../../components/GlobalStyles/PageStyles";
import SearchBox from "../../components/SearchBox/SearchBox";
import TravelImg from "../../assets/emailsignatures.png";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-image: url(${HomeBG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 100px;
  height: 450px;
  position: relative;
  border-radius: 0 0 40px 40px;

  @media (max-width: 700px) {
    padding: 16px;
  }
`;
const ImgContainer = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-conent: center;
  margin-top: 80px;

  img {
    width: 100%;
  }
`;

const Home = () => {
  const { setPage } = useContext(GlobalContext);

  useEffect(() => {
    setPage("Home");
  }, []);

  return (
    <PageContainer
      style={{
        minHeight: "100vh",
        marginTop: "0px",
        padding: "0px",
      }}
    >
      <HomeContainer>
        <SearchBox
          styles={{
            position: "absolute",
            bottom: "-32px",
            margin: "0 16px",
          }}
        />
      </HomeContainer>

      <ImgContainer>
        <img
          src={TravelImg}
          alt="/"
          loading="lazy"
          style={{ borderRadius: "10px", border: "1px solid black;" }}
        ></img>
      </ImgContainer>
    </PageContainer>
  );
};

export default Home;
