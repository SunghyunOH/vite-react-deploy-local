import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import styled from './Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation/>
      <main className={styled.content}>
      <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;
