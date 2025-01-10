
import CrossIcon from "./CrossIcon";


function Navbar({isOpen, setIsOpen}) {

  return (
    <nav className={`fixed sm:w-[35rem] w-full h-full bg-[#1a1a1c] pt-6 rounded-se-3xl rounded-ee-3xl transition-transform2 duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <CrossIcon className=" top-3 right-3" isOpen={isOpen} setIsOpen={setIsOpen}/>
      <ul className="list-none p-0 w-full px-8 mt-10">
        <li className="text-left w-full border-b border-[#ffffff52]">
          <a
            href="#home"
            className="text-white text-2xl block py-4 hover:text-[var(--coloredtext)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </a>
        </li>
        <li className="text-left border-b border-[#ffffff52]">
          <a
            href="#about"
            className="text-white text-2xl block py-4 hover:text-[var(--coloredtext)] rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </a>
        </li>
        <li className="text-left border-b border-[#ffffff52]">
          <a
            href="#portfolio"
            className="text-white text-2xl block py-4 hover:text-[var(--coloredtext)] rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            Portfolio
          </a>
        </li>
        <li className="text-left border-b border-[#ffffff52]">
          <a
            href="#contact"
            className="text-white text-2xl block py-4 hover:text-[var(--coloredtext)] rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </a>
        </li>
        <li className="text-left ">
          <a
            href=""
            className="text-white text-2xl block py-4 hover:text-[var(--coloredtext)] rounded-md"
            onClick={(e) => e.preventDefault()}
          >
            Blogs <span className="text-xs py-1 px-2 text-gray-100 bg-[#e0566b] rounded-full">{"Soon"}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
