import React from "react";
// import styled from "@emotion/styled";
import PageTitle from "../../Components/Shared/PageTitle";
import Card from "../../Components/ProductCard/component";

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: "Here comes the name",
                price: 0,
                discount: 0,
                image: "https://placehold.it/150x80?text=IMAGE"
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let i = this.state.item;
        const name = event.target.name;
        // console.log(el)
        i[name] = event.target.value;
        this.setState({ item: i })
    }



    render() {
        return (
            <div className="container">
                <PageTitle title="Add new product" />
                <div className="row">
                    <div className="col-sm-6 col-md-7">

                        <div className="form-group">
                            <label htmlFor="name">Product name:</label>
                            <input type="text" className="form-control" id="name" name="name"
                                value={this.state.item.name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image:</label>
                            <input type="text" className="form-control" id="image" name="image"
                                value={this.state.item.image} onChange={this.handleChange} />
                        </div>

                        <hr />


                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="text" className="form-control" id="price" name="price"
                                value={this.state.item.price} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="discount">Discount:</label>
                            <input type="text" className="form-control" id="discount" name="discount"
                                value={this.state.item.discount} onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-sm-6 col-md-offset-1 col-md-4">
                        <Card data={this.state.item} disabled="true" />
                    </div>
                </div>
            </div>
        )
    }
};

export default AddProduct;