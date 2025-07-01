import { Logo } from "./logo";

const Header = () => {
  return (
    <div className="container flex h-[200px] shrink-0 items-center justify-center px-4 lg:h-[250px] lg:px-0">
      <a href="/">
        <Logo className="w-300 sm:w-360" />
      </a>
    </div>
  );
};

export default Header;
