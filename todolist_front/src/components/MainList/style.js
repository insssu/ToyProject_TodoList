import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 400px;
    height: 800px;
    background-color: white;

    .input-box {
        margin-bottom: 10px;
        box-sizing: border-box;
        border: 1px solid aqua;
        padding: 10px;
        width: 100%;
        height: 50px;
    }

    .input-box > input {
        border-radius: 5px;
        width: 270px;
        height: 25px;
        margin-right: 25px;
    }

    .input-box > button {
        border-radius: 5px;
        width: 50px;
        height: 30px;
        &:hover {
            background-color: #d4d4d4;
        }
        &:active {
            background-color: #afaeae;
        }
        
    }

    .list-container {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 10px;
        width: 100%;
        height: 700px;
    }

    .list {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        width: 100%;
        height: 150px;
    }

    .list > button {
        position: relative;
        left: 250px;
        border: none;
        background-color: #ffffff;
        cursor: pointer;
    }

    p {
        display: flex;
        flex-direction: center;
    }
`;