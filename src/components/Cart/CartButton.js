import { useDispatch,useSelector } from "react-redux";
import { cartUiActions } from "../../store/cartSliceUI";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const disPatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleCartHandller = () => {
    disPatch(cartUiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandller}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
