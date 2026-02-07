import { useDispatch } from "react-redux";
import { cartUiActions } from "../../store/cartSliceUI";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const disPatch = useDispatch();

  const toggleCartHandller = () => {
    disPatch(cartUiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandller}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
