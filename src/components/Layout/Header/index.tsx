import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-700 shadow-sm sticky lg:overflow-y-visible top-0 z-20">
      <nav className={` w-full bg-white dark:bg-gray-700`} aria-label="Global">
        <div className="p-3 flex-shrink-0 relative flex justify-end w-full">
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

export default Header;
