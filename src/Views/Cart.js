import React from "react";
import PageTitle from "../Components/Shared/PageTitle";
import FormatPrice from "../Components/Shared/FormatPrice";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(window.localStorage.cart)
        }
        this.remove = this.remove.bind(this);
    }

    style() {
        return {
            img: {
                maxWidth: '80px',
                maxHeight: '80px'
            },
        }
    }

    remove(event) {
        let index = event.target.parentElement.parentElement.id;
        let arr = this.state.items;
        arr.splice(index, 1);
        this.setState({ items: arr });
        window.localStorage.cart = JSON.stringify(arr);
        this.props.store.dispatch({ type: "CHANGED" })
    }


    render() {
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
                        {this.state.items.map((el, i) => (
                            <tr key={i} id={i}>
                                <td>{i + 1}.</td>
                                <td><img src={el.image} alt="product" style={this.style().img} /></td>
                                <td>{el.name}</td>
                                <td className="text-right"><FormatPrice price={el.price} /> din. &nbsp;&nbsp;&nbsp;</td>
                                <td><button type="button" className="btn btn-danger" onClick={this.remove}>
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        );
    }

};

export default Cart;