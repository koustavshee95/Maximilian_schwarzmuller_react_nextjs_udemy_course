import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Productdetails = () => {
  const { productId } = useParams(); //using this hooks we can hold data that is encoded url.

  return (
    <div>
      <h1>Products Details Page!</h1>
      <p>{productId}</p>
      <p><Link to='..' relative="path">Back</Link></p> 
    </div>
  );
};
// To go back.<p><Link to='..' relative="path">Back</Link></p> 