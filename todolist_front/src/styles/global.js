import { css } from "@emotion/react"

export const reset = css`
    html, body, #root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: 16px;
        background-color: #fafafa;
    }
`;