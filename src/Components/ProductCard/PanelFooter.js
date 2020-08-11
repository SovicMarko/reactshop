import React from "react";
import FormatPrice from "../Shared/FormatPrice";

const PanelFooter = ({ price, discount }) => {
  const styles = {
    basePrice: {
      textDecoration: "line-through"
    },
    noDiscount: {
      color: "rgba(0,0,0,0)"
    },
    btn: {
      float: "right",
      marginTop: "40px"
    }
  }

  let discountedPrice = "";
  let el = "";

  if (discount) {
    discountedPrice = price - (price * discount);
    el =
      <>
        <h5 style={styles.basePrice}><FormatPrice price={price} /> rsd</h5>
        <h3><FormatPrice price={discountedPrice} /> rsd</h3>
      </>
  } else {
    el =
      <>
        <h5 style={styles.noDiscount}>.</h5>
        <h3 ><FormatPrice price={price} /> rsd</h3>
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
            <button style={styles.btn} className="btn btn-primary">
              <span className="glyphicon glyphicon-shopping-cart"></span>
              &nbsp;Dodaj u korpu
            </button>
          </div>
        </div>


      </div>
    </>
  );
};

export default PanelFooter;
