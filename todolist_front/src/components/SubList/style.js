import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 500px;
    height: 750px;
    background-color: white;

    .icon {
        display: flex;
        box-sizing: border-box;
        width: 500px;
        height: 40px;
        border-radius: 3px;
        background-color: #9cf07a;
    }

    .status1 {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-radius: 3px;
        width: 50%;
        height: 100%;
        background-color: #cff0c2;
    }

    .status2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }
`;