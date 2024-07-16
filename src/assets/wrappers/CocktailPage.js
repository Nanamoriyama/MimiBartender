import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 2rem;
  }
  .btn-container {
    text-align: center;
    margin-top: 2rem; /* ボタンの上にマージンを追加 */
  }
  .name {
    color: #f0e68c;
    font-size: 35px;
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.8rem;
  }
  .drink-info p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    color: #deb887;
    letter-spacing: var(--letterSpacing);
    font-weight: 400;
  }
  .ingredients {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--grey-900);
  }
  .vertical-line {
    border-left: 1px solid #deb887;
    height: 100%;
    margin: 0 1rem;
  }
  .instructions {
    max-width: 400px;
  }
  .ing {
    display: block;
    margin-bottom: 0.5rem;
    position: relative;
    font-weight: 400;
    color: #f0e68c;
  }
  .ing::after {
    content: "";
    display: block;
    border-bottom: 1px solid #deb887;
    width: 100%;
    margin-top: 0.5rem;
  }
  .instructions p {
    font-weight: 400;
    color: #f0e68c;
  }
`;

export default Wrapper;
