import { css } from "@emotion/react";

export const container = css`
    position: relative;
    display: flex;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 400px;
    height: 800px;
    background-color: white;

    .uncomplete {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-right: none;
        padding: 7px;
        width: 100%;
        height: 40px;
        background-color: #82ee94;
    }

    .complete {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-left: none;
        padding: 7px;
        width: 100%;
        height: 40px;
        background-color: #4add63;
    }
`;