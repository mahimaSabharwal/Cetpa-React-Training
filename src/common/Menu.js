import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <div className="bg-secondary bg-gradient">
        <div className="container">
          <div className="row">
            <div className="col">
              <Navbar>
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
                  <Link to="/digiclock" className="btn btn-outline-light">
                    Digital Clock
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/emicalc" className="btn btn-outline-light">
                    EMI Calculator
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/expensetracker" className="btn btn-outline-light">
                    Income/Expense Tracker
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
                  <Link to="/contextdemo2" className="btn btn-outline-light">
                    Theme Switcher
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/weatherapp" className="btn btn-outline-light">
                    Weather App
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/ReduxApp" className="btn btn-outline-light">
                    Redux App
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
