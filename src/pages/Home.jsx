import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Go to </p> <Link to="/vite-react-deploy-local/detail">Detail</Link>
    </div>
  );
}

export default Home;
