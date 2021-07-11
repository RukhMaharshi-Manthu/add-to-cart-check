import "./styles.css";
function Cart({ cart, cartMethod }) {
  // console.log("triggered");
  console.log(...cart);
  return (
    <div className="cart-design" >
      {cart.map((item, idx) => {
        return (
          <div
            key={item.id}
            style={{
              border:"2px solid black",
              maxWidth: "8000px",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "auto",
              margin:"20px"
              

            }}
          >
            
            <img src={item.item2} alt={item.item} />
            <div>
            <span className="cart-design1" style={{width:"100px"}}>
            <h2>{item.item}</h2>
              
            <h3><b style={{color:"orange"}}>Price:</b>{item.item1}rs</h3>  
            </span>
</div>
            <div className="cart-design2" >
            {" Choose Quantity:"}
              <button
                onClick={() => {
                  console.log("entered negative button");
                  // let newCart = [...cart];
                  // let quan = newCart[idx].qty;
                  // if (quan > 1) {
                  //   newCart.splice(idx, 1, {
                  //     id: item.id,
                  //     item: item.item,
                  //     qty: item.qty - 1
                  //   });
                  //   cartMethod(newCart);
                  // } else if (quan === 1) {
                  //   newCart.splice(idx, 1);
                  //   cartMethod(newCart);
                  // }
                  if (item.qty > 1) {
                    let newCart = cart.map((prod) => {
                      if (prod.item === item.item) {
                        return {
                          ...prod,
                          qty: prod.qty - 1
                        };
                      } else return prod;
                    });
                    cartMethod(newCart);
                  } else if (item.qty === 1) {
                    let newCart = cart.filter((prod) => {
                      if (prod.item === item.item) {
                        return false;
                      } else return true;
                    });
                    cartMethod(newCart);
                  }
                }}
              >
                -
              </button>
              {item.qty}
              <button
                onClick={() => {
                  // let newCart = [...cart];
                  // newCart.splice(idx, 1, {
                  //   id: item.id,
                  //   item: item.item,
                  //   qty: item.qty + 1
                  // });
                  // cartMethod(newCart);
                  let newCart = cart.map((prod) => {
                    if (prod.item === item.item) {
                      return {
                        ...prod,
                        qty: prod.qty + 1
                      };
                    } else return prod;
                  });
                  cartMethod(newCart);
                }}
              >
                +
              </button>
            </div>
            {/* <button
              onClick={() => {
                // let newCart = [...cart];
                // newCart.splice(idx, 1);
                // cartMethod(newCart);
                let toRemove = cart[idx].item;
                console.log(toRemove);
                let newArr = cart.filter((cartitem) => {
                  if (cartitem.item === toRemove) {
                    return false;
                  } else {
                    return item;
                  }
                });
                cartMethod(newArr);
              }}
            >
              Remove
            </button> */}
            <br/>
            <button
            onClick={() =>
              cartMethod(cart.filter((el, index) => idx !== index))
            }
            style={{
              borderRadius: "50%",
              backgroundColor:"red",
              color: "white",
              fontWeight: "bolder",
              marginLeft:"35px",
              marginBottom:"15px"
            }}
          >
            Delete
          </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
