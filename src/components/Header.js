import Logo from './Logo';
import Nav from './Nav';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="bg-[#ffffff]">
      <nav className="px-[3.6rem] py-[1rem] w-[full] flex gap-[4rem] align-middle">
        <Logo></Logo>
        <div className="flex justify-between w-full py-3">
          <SearchBar></SearchBar>
          <Nav></Nav>
        </div>
      </nav>
    </div>
  );
}

export default Header;
