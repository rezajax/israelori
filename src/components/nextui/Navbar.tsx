import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  // Button,
} from "@nextui-org/react";
import ThemeSwitcherOld from "@/components/nextui/ThemeSwitcherOld";
// import ThemeSwitcherNew from "@/components/nextui/ThemeSwitcherNew";

// export const AcmeLogo = () => (
//   <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//     <path
//       clipRule="evenodd"
//       d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//       fill="currentColor"
//       fillRule="evenodd"
//     />
//   </svg>
// );
export const AcmeLogo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 388 488"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M95.2149 114.51C95.2149 114.51 0.55488 84.5902 15.5149 60.6002C68.7849 -24.8198 333.545 -30.9398 378.005 114.05C386.135 140.57 302.025 170.75 291.105 169.82C280.185 168.89 276.005 217.45 277.855 220.71C283.445 218.36 311.175 222.38 321.285 240.29C329.595 255 322.595 267.48 318.745 270.21C318.745 270.21 327.345 277.87 328.385 285.89C329.435 293.91 328.735 298.09 335.125 301.34C341.515 304.59 349.645 315.4 350.345 323.07C351.045 330.74 379.735 319.7 385.785 335.04C391.825 350.38 384.155 391.62 325.595 403.48C267.035 415.33 255.885 396.04 234.735 392.79C213.595 389.54 165.725 382.1 132.725 417.88C99.7249 453.66 82.9949 469.93 72.3149 463.89C61.6249 457.85 66.2749 457.38 66.2749 457.38C66.2749 457.38 5.86488 499.21 0.28488 484.33C-4.74512 470.91 58.2649 376.73 76.2649 327.02C83.7649 306.29 81.7549 309.41 105.315 302.16C118.165 298.21 104.385 291.24 98.3449 286.59C92.3049 281.94 76.0349 271.49 84.8649 228.27C77.8949 220.37 58.6049 208.05 57.4449 204.34C56.2849 200.62 102.055 151.13 95.2149 114.53"
      fill="#CCB26A"
    />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">isrealOri</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="start">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">isrealOri</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {/* <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">isrealOri</p>
        </NavbarBrand> */}
        <NavbarItem>
          <Link color="foreground" href="#">
            rooms
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            carWash
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            about
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button> */}
          <ThemeSwitcherOld />
          {/* <ThemeSwitcherNew /> */}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
