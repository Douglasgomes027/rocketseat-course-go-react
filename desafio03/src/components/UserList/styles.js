import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 320px;
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const List = styled.ul`
  list-style: none;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    border-bottom: 1px solid #eee;

    strong {
      font-size: 16px;
      color: #333;
    }

    small {
      font-size: 14px;
      color: #999;
      font-style: italic;
    }

    img {
      width: 48px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      width: 55%;
    }

    &:hover {
      cursor: pointer;
      background: #eee;
    }
  }
`;
