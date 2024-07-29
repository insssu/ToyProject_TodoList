import { css } from "@emotion/react";

export const form = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    height: 800px;
    background-color: white;

    input {
        box-sizing: border-box;
        border: 1px solid #acacac;
        border-radius: 5px;
        padding: 0;
        margin-right: 10px;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    button {
        margin: 0;
        border: 1px solid #acacac;
        border-radius: 5px;
        padding: 0;
        width: 60px;
        height: 100%;
        background-color: #fafafa;
        &:hover {
            background-color: #eeeeee;
        }
        &:active {
            background-color: #dbdbdb;
        }
    }

    h2 {
        box-sizing: border-box;
        margin: 0 auto;
        margin-bottom: 20px;
    }
`;

export const box = css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
`;

export const con = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #acacac;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    overflow: auto;
`;
