import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > div{
        width: 100%;
        height: 100%;
    }

    .hide{
        display: none;
    }

    .fa-spinner{
        font-size: 30px;
        align-self: center;
    }
`;

export const Sidebar = styled.div`
    background: #fff;
    width: 320px;
    height: 100%;
    padding: 30px;
    box-shadow: 0px 0px 8px #ccc;
`;

export const Form = styled.form`
    display: flex;
    padding-bottom: 25px;
    border-bottom: 1px solid #eee; 

    input{
        background: #eee;
        height: 42px;
        border: 0;
        font-size: 15px;
        color: #444;
        border-radius: 3px;
        width: 193px;
        padding: 10px;

        &.error{
            border: 1px solid #f00;
            color: #f00;
        }
    }

    button{
        height: 42px;
        padding: 0 20px;
        margin-left: 10px;
        font-size: 20px;
        color: #fff;
        background: #63f5b8;
        border: none;
        cursor: pointer;

        &:hover{
            background: #5fe4ad;
        }
    }
`;

export const Repositories = styled.div`

    margin-top: 20px;

    ul{
        list-style: none;

        li{
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            cursor: pointer;

            img{
                width: 45px;
                height: 45px;
            }

            .detail{
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-left: 10px;
            }

            i{
                color: #ccc;
            }
        }
    }

    img{
        width: 45px;
        height: 45px;
    }
`;