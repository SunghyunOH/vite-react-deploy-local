import { Link } from "react-router-dom";
import styled from './MainNavigation.module.css';

function MainNavigation () {
  return (
    <header className={styled.header}>
      <nav>
        <ul className={styled.list}>
          <li>
            <Link to="/vite-react-deploy-local/">Home</Link>
          </li>
          <li>
            <Link to="/vite-react-deploy-local/detail">Detail</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;