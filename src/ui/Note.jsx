import styled from "styled-components";

const FixedDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #db9a22;
  color: #ebebeb;
  padding: 1rem 7rem;
  text-align: center;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 500;

  & strong {
    font-weight: 900;
    color: #fff;
  }
`;

function Note() {
  return (
    <FixedDiv>
      <p>
        This project uses Supabase to manage backend and database. There is
        currently an issue going on with this project's Supabase authentication
        channel, so right now, the authentication(Signing Up and Logging In)
        does <strong>NOT</strong> work in this project. Please try again after a
        few days
      </p>
    </FixedDiv>
  );
}

export default Note;
