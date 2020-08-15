import React, { useState } from "react";
// import styled from "@emotion/styled";
import PageTitle from "../../Components/Shared/PageTitle";
import Card from "../../Components/ProductCard/component";
// import data from "../TestData/data.json";
import firebase from 'firebase';


const AddProduct = (props) => {
    const db = firebase.firestore();

    const [state, setState] = useState({
        item: {
            name: "Here comes the name",
            price: 0,
            discount: 0,
            image: "https://placehold.it/150x80?text=IMAGE"
        }
    })
    // constructor(props) {
    //     super(props);
    //     state = {

    //     }
    //     handleChange = handleChange.bind(this);
    // }

    const handleChange = (event) => {
        let i = state.item;
        const name = event.target.name;
        // console.log(el)
        i[name] = event.target.value;
        setState({ item: i })
    }

    const submitItem = () => {
        db.collection("items").add({
            name: state.item.name,
            image: state.item.image,
            price: Number(state.item.price),
            discount: state.item.discount
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }



    return (
        <div className="container">
            <PageTitle title="Add new product" />
            <div className="row">
                <div className="col-sm-6 col-md-7">
                    <div className="form-group">
                        <label htmlFor="name">Product name:</label>
                        <input type="text" className="form-control" id="name" name="name"
                            value={state.item.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input type="text" className="form-control" id="image" name="image"
                            value={state.item.image} onChange={handleChange} />
                    </div>

                    <hr />


                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="text" className="form-control" id="price" name="price"
                            value={state.item.price} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="discount">Discount:</label>
                        <input type="text" className="form-control" id="discount" name="discount"
                            value={state.item.discount} onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={submitItem}>Submit</button>
                </div>
                <div className="col-sm-6 col-md-offset-1 col-md-4">
                    <Card data={state.item} disabled="true" />
                </div>
            </div>
        </div>
    )
};

export default AddProduct;