import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.6;
    color: var(--grey-400);
    margin-bottom: 2rem;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .img {
    width: 100%;
    max-width: 200px;
    border-radius: var(--borderRadius);
  }
  @media (min-width: 768px) {
    .flex {
      justify-content: space-around;
    }
    .img {
      max-width: 150px;
    }
  }
`;

export default Wrapper;
