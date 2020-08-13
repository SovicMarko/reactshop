import React from "react";
import FormatPrice from "../Shared/FormatPrice";

const PanelFooter = ({ price, discount, disabled, addToCart }) => {


  const styles = {
    basePrice: {
      textDecoration: "line-through",
      margin: "0px"
    },
    noDiscount: {
      color: "rgba(0,0,0,0)",
      margin: "0px"
    },
    btn: {
      float: "right",
      marginTop: "15px"
    },
    mainPrice: {
      marginTop: "5px"
    }
  }

  let discountedPrice = "";
  let el = "";

  if (discount) {
    discountedPrice = price - (price * discount);
    el =
      <>
        <h5 style={styles.basePrice}><FormatPrice price={price} /> rsd</h5>
        <h3 style={styles.mainPrice}><FormatPrice price={discountedPrice} /> rsd</h3>
      </>
  } else {
    el =
      <>
        <h5 style={styles.noDiscount}>.</h5>
        <h3 style={styles.mainPrice}><FormatPrice price={price} /> rsd</h3>
      </>
  }


  return (
    <>
      <div className="panel-footer">
        <div className="row">
          <div className="col col-xs-12 col-sm-6">
            {el}
          </div>
          <div className="col col-xs-12 col-sm-6">
            {
              disabled ?
                <button style={styles.btn} disabled className="btn btn-primary">
                  <span className="glyphicon glyphicon-shopping-cart"></span>
              &nbsp;Dodaj u korpu
            </button> :
                <button style={styles.btn} className="btn btn-primary" onClick={addToCart}>
                  <span className="glyphicon glyphicon-shopping-cart"></span>
              &nbsp;Dodaj u korpu
            </button>
            }
          </div>
        </div>


      </div>
    </>
  );
};

export default PanelFooter;
