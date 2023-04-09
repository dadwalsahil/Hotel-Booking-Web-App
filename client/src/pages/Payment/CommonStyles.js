import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 80px auto 10px auto;
  border: 2.5px solid #d8d8d8;
  &.buttons {
    justify-content: space-between;
    border: 0;
    margin-top: 10px;
    @media (max-width: 576px) {
      flex-direction: row;
    }
  }
  .section {
    margin: 16px;
    :first-child {
      flex-basis: 60%;
      border-right: 2.5px solid #d8d8d8;
      @media (max-width: 576px) {
        border-right: 0;
      }
    }
    :last-child {
      flex-basis: 40%;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    button {
      width: fit-content;
      margin-bottom: 16px;
    }
  }
`;

export const Confirmation = styled.div`
  max-width: 100px;
  margin: 110px auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
