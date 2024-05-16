import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../utils/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  navbarHeight: number;
};

const NavLink = ({
  page,
  selectedPage,
  setSelectedPage,
  navbarHeight,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  console.log(lowerCasePage);

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    // Scroll to the adjusted position by subtracting the navbar height
    const targetElement = document.getElementById(lowerCasePage);
    if (targetElement) {
      const offset = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-[#164C28] transition duration-500 font-inter font-semibold text-[15px] leading-[28px] hover:text-[#4D4D4D]"
          : "transition duration-500 font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
      } `}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  );
};

export default NavLink;
