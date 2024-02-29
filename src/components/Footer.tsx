import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 text-center h-20 w-full flex justify-between items-center px-4">
      <p className="text-left">© 2021</p>
      <nav>
        <ul className="flex space-x-4">
          <Link to="/">
            <li>
              <a href="/about">home</a>
            </li>
          </Link>
          <Link to="/archived">
            <li>
              <a href="/contact">archive</a>
            </li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
