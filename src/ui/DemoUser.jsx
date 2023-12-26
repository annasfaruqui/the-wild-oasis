import styled from "styled-components";

const StyledDemoUser = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-lg);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & span {
    padding: 0 5px;
    border-radius: var(--border-radius-sm);
    color: var(--color-brand-500);
    background-color: var(--color-grey-200);
  }
`;

function DemoUser() {
  return (
    <StyledDemoUser>
      <p>
        Demo Email:
        <br />
        <span>demo@wildoasis.com</span>&nbsp;(or)&nbsp;
        <span>annas@wildoasis.com</span>
      </p>
      <p>
        Demo Password: &nbsp;<span>demouser</span>
      </p>
    </StyledDemoUser>
  );
}

export default DemoUser;
