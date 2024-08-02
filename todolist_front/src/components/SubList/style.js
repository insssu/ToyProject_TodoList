import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 500px;
  height: 750px;
  background-color: #fafafa;

    .icon {
      position: relative;
      display: flex;
      margin-bottom: 10px;
      box-sizing: border-box;
      width: 500px;
      height: 40px;
      border-radius: 3px;
      cursor: pointer;
    }

    .move {
      position: absolute;
      border-radius: 3px;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: #9cf07a;;
      transition: 200ms ease-in-out;
    }

    .right {
      left: 50%;
    }

    .status {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      border-radius: 3px;
      z-index: 10;
      background-color: transparent;
      font-family: 'GangwonEduSaeeum_OTFMediumA';
      font-size: 24px;
    }

    .mini-box {
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }


  .card {
        display: flex;
        flex-direction: column;
        border: 1px solid #dbdbdb;
        padding: 10px;
        width: auto;
        height: 150px;
        margin-bottom: 10px;
    }

  `;
