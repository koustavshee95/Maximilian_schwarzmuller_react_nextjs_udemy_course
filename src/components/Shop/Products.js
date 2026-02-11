import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 199,
    title: "My First Book",
    description: "The first book I never wrote",
  },
  {
    id: "p2",
    price: 349,
    title: "React Made Easy",
    description: "Beginner-friendly guide to React.js",
  },
  {
    id: "p3",
    price: 499,
    title: "JavaScript Deep Dive",
    description: "Understand JS from basics to advanced concepts",
  },
  {
    id: "p4",
    price: 299,
    title: "Redux Toolkit Handbook",
    description: "State management simplified with RTK",
  },
  {
    id: "p5",
    price: 149,
    title: "HTML & CSS Basics",
    description: "Build beautiful and responsive web pages",
  },
  {
    id: "p6",
    price: 449,
    title: "Node.js in Practice",
    description: "Backend development with Node and Express",
  },
  {
    id: "p7",
    price: 549,
    title: "Fullstack Roadmap",
    description: "Step-by-step guide to becoming a fullstack dev",
  },
  {
    id: "p8",
    price: 179,
    title: "Git & GitHub Essentials",
    description: "Version control for developers",
  },
  {
    id: "p9",
    price: 599,
    title: "System Design Basics",
    description: "Learn how scalable systems are designed",
  },
  {
    id: "p10",
    price: 249,
    title: "Interview Prep Guide",
    description: "Crack frontend and React interviews",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
