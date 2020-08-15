import React, { useState } from 'react';
import PageTitle from "../Components/Shared/PageTitle";
import FormatPrice from "../Components/Shared/FormatPrice";
import { useDispatch } from "react-redux";


const Cart = (props) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({ items: JSON.parse(window.localStorage.cart) })
    // constructor(props) {
    //     super(props);
    //     state = {
    //         items: JSON.parse(window.localStorage.cart)
    //     }
    // }



    const style = {
        img: {
            maxWidth: '80px',
            maxHeight: '80px'
        }
    }

    const remove = (event) => {
        let index = event.target.parentElement.parentElement.id;
        let arr = state.items;
        arr.splice(index, 1);
        setState({ items: arr });
        window.localStorage.cart = JSON.stringify(arr);
        dispatch({ type: "CHANGED" })
    }

    return (
        <div className="container">
            <PageTitle title="Added to cart" />
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
                            <td><button type="button" className="btn btn-danger" onClick={remove}>
                                <span className="glyphicon glyphicon-trash"></span>
                            </button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );

};

export default Cart;