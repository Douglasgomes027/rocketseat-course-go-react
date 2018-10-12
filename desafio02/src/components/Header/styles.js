import styled from 'styled-components';

export const Container = styled.div`
    width: 99.8%;
    height: 100px;
    margin-left: .2%;
    padding: 30px;
    background: #fff;
    display: flex;
    justify-content: space-between;

    select {
        height: 42px;
        border: 1px solid #ddd;
        padding: 0 20px;
    }
`;

export const Repository = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 45px;
        height: 45px;
    }

    .detail{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
`;