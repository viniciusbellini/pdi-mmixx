import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
    width: 400px;
    background: #E6FFE9;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100px;
        margin: 10px 0 40px;
    }
    p{
        color: #ff3333;
        maring-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    input{
        height: 46px;
        margin-bottom: 10px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        border-radius: 5px;
        width: 90%;
        border: 1px solid #ddd;
        &::placeholder {
            color: #999;
        }
    }
    button {
        color: #fff;
        font-size: 16px;
        background: #32BE41;
        height: 56px;
        border: 0px;
        border-radius: 5px;
        width: 100%;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
      }
`;