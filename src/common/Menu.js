import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <div className="bg-secondary bg-gradient">
        <div className="container">
          <div className="row">
            <div className="col">
              <Navbar expand="lg">
                <Nav.Link>
                  <Link to="/home" className="btn btn-outline-light">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/counter" className="btn btn-outline-light">
                    Counter
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/todo" className="btn btn-outline-light">
                    ToDo List
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/compmodal" className="btn btn-outline-light">
                    Modal Component
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/compapi" className="btn btn-outline-light">
                    Fetch API 1
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/fetchapi" className="btn btn-outline-light">
                    Fetch API 2
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/accordemo" className="btn btn-outline-light">
                    Accordion Demo
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/funtodolist" className="btn btn-outline-light">
                    Functional ToDOLIst
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/digiclock" className="btn btn-outline-light">
                    Digital Clock
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/digiclockclass" className="btn btn-outline-light">
                    Digital Clock Class
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/formfn" className="btn btn-outline-light">
                    Form Fn
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/emicalc" className="btn btn-outline-light">
                    EMI Calculator Class
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contextdemo" className="btn btn-outline-light">
                    Context DEmo
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/expensetracker" className="btn btn-outline-light">
                    Expense Tracker
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/currencyconverter"
                    className="btn btn-outline-light"
                  >
                    Currency Converter
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/hoc1" className="btn btn-outline-light">
                    HOC1
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/hoc2" className="btn btn-outline-light">
                    HOC2
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/jsonserver" className="btn btn-outline-light">
                    JSON Server API
                  </Link>
                </Nav.Link>
                {/* <Nav.Link><Link to="/themeswitch" className='btn btn-outline-light'>Theme Switcher</Link></Nav.Link> */}
                <Nav.Link>
                  <Link to="/contextdemo2" className="btn btn-outline-light">
                    Theme Switcher
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/weatherapp" className="btn btn-outline-light">
                    Weather App
                  </Link>
                </Nav.Link>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
