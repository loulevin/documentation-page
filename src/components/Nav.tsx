import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="flex flex-col w-[12rem]">
      <div className="flex flex-col gap-2 p-4 w-full md:w-auto h-dvh bg-color-nav-light ">
        <NavLink to="/" className="[&.active]:text-color-accent-light">Home</NavLink>
        <NavLink to="/install" className="[&.active]:text-color-accent-light">Installion</NavLink>
      </div>
    </nav>
  );
};
