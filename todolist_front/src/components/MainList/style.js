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
        margin-right: 20px;
        width: 270px;
        height: 25px;
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

    .card-container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 10px;
        width: 100%;
        height: 700px;
        overflow-y: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .card {
        position: relative;
        margin-bottom: 5px;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 5px 10px 5px;
        width: 100%;
        height: 150px;
    }

    .card-tag {
        display: flex   ;
        box-sizing: border-box;
        width: 100%;
        height: 30px;
    }

    .edit {
        position: absolute;
        right: 12%;
        border: none;
        background-color: #ffffff;
        cursor: pointer;
    }

    .delete {
        position: absolute;
        right: 2%;
        border: none;
        background-color: #ffffff;
        cursor: pointer;
    }

    p {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    label {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        width: 100%;
        height: 100px;

    }
`;