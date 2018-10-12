import styled from 'styled-components';

export const Container = styled.ul`
    padding: 30px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &:after {
         flex-basis: 32%; 
        content:"";
    }

    li{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        background: #fff;
        padding: 20px;
        width: 32%;

        img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        .detail{
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            a{
                display: block;
                background: #b289d1;
                color: #fff;
                text-decoration: none;
                padding: 10px 20px;
                font-size: 13px;
                margin-top: 5px;
                width: 200px;

                i{
                    margin-right: 5px;
                }

                &:hover{
                    background: #d9acfb;
                }
            }
        }
    }
`;