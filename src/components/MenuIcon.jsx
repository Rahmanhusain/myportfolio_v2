
const MenuIcon = ({setIsOpen,isOpen}) => {

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center h-fit fixed top-6 right-5 z-50">
      <button
        className={`flex flex-col h-12 w-12 sm:h-[3.2rem] sm:w-[3.2rem] justify-center items-center group bg-[#2b2a2e] rounded-full ${isOpen ? 'hidemenu' : 'showmenu'}`}
        onClick={toggleMenu}
      >
        <div className={`h-[0.2rem] w-[1.370rem] sm:w-[1.55rem] my-0.5 bg-[var(--coloredtext)] rounded-full`} />
        <div className={`h-[0.2rem] w-[1.37rem] sm:w-[1.55rem] my-0.5 bg-[var(--coloredtext)] rounded-full `} />
        <div className={`h-[0.2rem] w-[1.37rem] sm:w-[1.55rem] my-0.5 bg-[var(--coloredtext)] rounded-full`} />
      </button>
    </div>
  );
};

export default MenuIcon;
