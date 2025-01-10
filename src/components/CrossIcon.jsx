const CrossIcon = ({className='top-0 right-0 z-50',isOpen,setIsOpen}) => {

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex items-center justify-center absolute ${className} h-fit`}>
      <button
        className="flex flex-col h-8 w-8 justify-center items-center "
        onClick={toggleMenu}
      >
        <div className={`h-[0.15rem] w-6 my-1 bg-[var(--coloredtext)] rounded-full transition-all ${isOpen ? 'duration-1000 rotate-45 translate-y-1.5 opacity-100' : 'duration-300 opacity-0'}`} />
        <div className={`h-[0.15rem] w-6 my-1 bg-[var(--coloredtext)] rounded-full transition-all ${isOpen ? 'duration-1000 abc' : 'duration-300 opacity-0'}`} />
      </button>
    </div>
  );
};

export default CrossIcon;
