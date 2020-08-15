import React, { useState, useEffect } from 'react';
// import styled from "@emotion/styled";
import PageTitle from "../../Components/Shared/PageTitle";
import FormatPrice from "../../Components/Shared/FormatPrice";
import firebase from 'firebase';

const Products = (props) => {
    const [state, setState] = useState({ items: [] })
    const db = firebase.firestore();

    let itemsList = [];

    const style = {
        img: {
            maxWidth: '80px',
            maxHeight: '80px'
        }
    }

    const remove = (e) => {
        let id = e.target.id;
        console.log(id);
        db.collection("items").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });

    }


    useEffect(() => {
        db.collection("items").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                itemsList.push({
                    id: doc.id,
                    name: doc.data().name,
                    image: doc.data().image,
                    price: doc.data().price,
                    discount: doc.data().discount
                });
                setState({
                    items: itemsList
                })
            });
        });
    }, []);

    return (
        <div className="container">
            <PageTitle title="List of products" />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>Product </th>
                        <th>Product name</th>
                        <th className="text-right">Product price  &nbsp;&nbsp;&nbsp;</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {state.items.map((el, i) => (
                        <tr key={i} id={i}>
                            <td>{i + 1}.</td>
                            <td><img src={el.image} alt="product" style={style.img} /></td>
                            <td>{el.name}</td>
                            <td className="text-right"><FormatPrice price={el.price} /> din. &nbsp;&nbsp;&nbsp;</td>
                            <td><button type="button" className="btn btn-danger" id={el.id} onClick={remove}>
                                <span className="glyphicon glyphicon-trash"></span>
                            </button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Products;
