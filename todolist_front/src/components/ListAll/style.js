import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    height: 800px;
    background-color: white;
`;

export const input = css`
    input {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        width: 200px;
        height: 30px;
    }

    button {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        width: auto;
        height: 30px;
        background-color: aquamarine;
    }
`;