import {useDispatch, useSelector} from "react-redux";
import {ITEM_IMG_CDN_URL} from "../public/common/constant";
import {clearItem} from "../utils/cardSlice";

const Cart = () => {
  // not optimize very less efficint
  //   const cartItems = useSelector((store) => {
  //     return store;
  //   });

  //   cartItems.store.items;

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => handleClearCart()}>Clear Cart</button>

      <div className="menu-items-list">
        {cartItems.map((item) => (
          <div className="menu-item" key={item?.id}>
            <div className="menu-item-details">
              <h3 className="item-title">{item?.name}</h3>
              <p className="item-cost">
                {item?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.price / 100)
                  : " "}
              </p>
              <p className="item-desc">{item?.description}</p>
            </div>
            <div className="menu-img-wrapper">
              {item?.imageId && (
                <img
                  className="menu-item-img"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
