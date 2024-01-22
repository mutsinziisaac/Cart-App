import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav className="navigation">
        <ul className="dodo">
          <li>dood</li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>store</li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
