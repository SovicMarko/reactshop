import React from "react";
// import styled from "@emotion/styled";

const FormatPrice = ({ price }) => {

    // 1234567 ->  1.234.567

    let n = Number(price).toFixed(0);
    n = n.toString().split("").reverse();
    if (n.length > 3) { n.splice(3, 0, ".") };
    if (n.length > 7) { n.splice(7, 0, ".") };
    let formattedPrice = n.reverse().join("");

    return (<>{formattedPrice}</>);
};

export default FormatPrice;
