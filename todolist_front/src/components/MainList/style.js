import { css } from "@emotion/react";

export const container = css`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 20px;
        width: 400px;
        height: 800px;
        background-color: #fafafa;
        
    input {
        margin-right: 20px;
        border-radius: 5px;
        width: 270px;
        height: 30px;
    }

    .input-box {
        margin-bottom: 20px;
        box-sizing: border-box;
        border: 1px solid aqua;
        width: 100%;
        height: 40px;
    }

    .sublist-container {
        display: flex;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        width: 400px;
        height: 800px;
        background-color: #fafafa;
        
    }

    .submit-button {
        width: 50px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #dbdbdb;
        }
        &:active {
            background-color: #a39b9b;
        }
    }

    .card-container {
        display: flex;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 10px;
        width: 100%;
        height: 700px;
        
    }

    .card {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        width: 100%;
        height: 130px;
    }

    .button-box {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        border: 1px solid aqua;
        width: 100%;
        height: 40px;
    }

    .button-box > input {
        
    }

    .button-box > button {
        font-size: 12px;
        width: 50px;
        height: 20px;
    }
`;

