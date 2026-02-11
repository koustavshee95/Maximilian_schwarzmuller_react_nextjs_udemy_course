import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/cartSliceUI";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cartUI.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'sending....',
        message:'Sending cart Data'
      }))
      const response = await fetch("https://fakestoreapi.com/products/5", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
      //const responseData = await response.json();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "sending....",
          message: "Sending cart Data",
        }),
      );
    };
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
