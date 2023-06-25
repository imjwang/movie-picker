import { useState } from 'react';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="p-2">
        ☰
      </button>
      {isOpen && (
        <div className="bg-white text-black w-64 h-full fixed top-0 right-0 overflow-auto">
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideNav;