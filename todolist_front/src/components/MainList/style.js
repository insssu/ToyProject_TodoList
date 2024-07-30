import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 500px;
    height: 750px;
    background-color: white;

    .input-box {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        width: 100%;
        height: 40px;
    }

    .input-box > input {
        box-sizing: border-box;
        margin-right: 10px;
        border: 1px solid black;
        border-radius: 3px;
        padding: 0 10px;
        width: 100%;
        height: 100%;
    }

    .input-box > button {
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 3px;
        width: 50px;
        height: 100%;
        background-color: #fafafa;
        cursor: pointer;
        &:hover {
            background-color: #eeeeee;
        }
        &:active {
            background-color: #dbdbdb;
        }
    }

    .mini-box {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 20px;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    .mini-box::-webkit-scrollbar {
        display: none;
    }

    .card {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        border: 1px solid #dbdbdb;
        padding: 10px;
        width: auto;
        height: 150px;
    }

    .info {
        position: relative;
        display: flex;
        align-items: center;
    }

    .info > input[type=checkbox] {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .info > p {
        display: inline-block;
        margin: 0;
    }

    .buttons {
        position: absolute;
        right: 0;
    }

    .buttons > button {
        border: none;
        border-radius: 3px;
        margin-left: 10px;
        text-decoration: underline;
        background-color: white;
        color: #818181;
        cursor: pointer;
        &:hover {
            font-weight: 600;
        }
        &:active {
            color: #3ade69;
            font-weight: 600;
        }
    }

    .card > p {
        display: flex;
        justify-content: center;
        font-size: 20px;
    }
`;