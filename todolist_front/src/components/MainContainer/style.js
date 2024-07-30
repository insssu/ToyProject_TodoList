import { css } from "@emotion/react";


export const container = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    .tag {
        display: flex;
        justify-content: center;
    }

    .children-container {
        display: flex;
        justify-content: space-around;
    }
`;

