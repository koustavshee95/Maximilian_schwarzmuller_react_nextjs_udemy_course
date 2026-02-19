import { Link,useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  function navigateHandller(){
      navigate('/products')
  };

  
  return (
    <div>
      <h1>My Home Page.</h1>
      <p>Go to <Link to='products'>List of product page.</Link></p>
      <p>
        <button onClick={navigateHandller}>Navigate</button>
      </p>
    </div>
  );
};
