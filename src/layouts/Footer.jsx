import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="ml-10 px-8">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="text-2xl text-center font-bold mb-5 text-blue-900">
                About Us
              </h4>
              <p className="mb-5">
                We are a team of passionate Python developers who love sharing
                our knowledge with others. Our mission is to provide
                high-quality tutorials, exercises, and references to help anyone
                learn and master Python programming.
              </p>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <h4 className="mb-0 underline font-semibold">Quick Links</h4>
              <ul className="quick-links leading-10">
                <li>
                  <Link to="/tutorial">Tutorials</Link>
                </li>
                <li>
                  <Link to="/references">References</Link>
                </li>
                <li>
                  <Link to="/exercises">Exercises</Link>
                </li>
                <li>
                  <Link to="/feedback">Feedback</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="mt-10 mb-8 text-center font-bold text-blue-900 text-2xl">
                Follow Us
              </h4>
              <ul className="flex justify-center space-x-6 text-3xl mb-8">
                <li>
                  <a
                    href="https://www.facebook.com/quarjo.young/"
                    title="contact me via facebook"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/quarjowusu/"
                    title="contact me via twitter"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/quarjowusu/"
                    title="contact me via instagram"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/quarjo/"
                    title="contact me via linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hacks-and-codes"
                    title="contact me via github"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>

            <hr />

            <div>
              <p className="text-center text-gray-400 mt-5">
                &copy; 2021 Hacks and Codes. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="footer-caret">
            <a href="/#top" className="footer-caret">
              <i className="fas fa-caret-up" size="50x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
