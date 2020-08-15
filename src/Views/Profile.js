import React from "react";
import styled from "@emotion/styled";
import PageTitle from "../Components/Shared/PageTitle";

const Profile = (props) => {

    const ImgContaner = styled.div`
        width : 300px;
        height : 300px;
        border-radius: 50%;
        background-color: gainsboro;
    `

    return (
        <div className="container">
            <PageTitle title="Profile Page" />
            <div className="row">
                <div className="col col-sm-4">
                    <ImgContaner > </ImgContaner>
                </div>
                <div className="col col-sm-8"></div>
            </div>
        </div>
    );
};

export default Profile;