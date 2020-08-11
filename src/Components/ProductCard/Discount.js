import React from "react";
import styled from "@emotion/styled";

const Discount = ({ discount }) => {
  const stickerHeight = 80;
  const stickerColor = "goldenrod";

  const Sticker = styled.div`
    width: 80px;
    height: ${stickerHeight}px;
    position: absolute;
    right: 10px;
    top: -2px;
    text-align: center;
    font-size: 25px;
    background-color: ${stickerColor};
    padding-top: 35px;
    color: black;
    font-weight: bold;
  `
  const StickerTriangle = styled.div`
    position: absolute;
    top: ${stickerHeight}px;
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 30px solid ${stickerColor};
  `

  return (
    <Sticker>
      -{discount * 100}%
      <StickerTriangle />
    </Sticker>
  );
};

export default Discount;
