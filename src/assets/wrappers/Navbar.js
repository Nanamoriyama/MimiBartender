import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
  }
  .logo {
    font-size: clamp(1.5rem, 1vw, 1rem);
    color: #ff339c;
    letter-spacing: 1px;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 1px;
  }
  .nav-link:hover {
    color: #ff339c;
  }
  .active {
    color: #ff339c;
  }
`;

export default Wrapper;
