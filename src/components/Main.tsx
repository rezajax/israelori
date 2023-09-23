// import NavbarTailwindUi from "@/components/tailwindui/Navbar";
import NavbarNextUi from "@/components/nextui/Navbar";
import { type ReactNode } from "react";

interface ExampleProps {
  children: ReactNode;
}
const NavBarMain: React.FC<ExampleProps> = ({ children }) => {
  return (
    <>
      {/* <NavbarTailwindUi>{children}</NavbarTailwindUi> */}
      <NavbarNextUi />
      {children}
    </>
  );
};
export default NavBarMain;
