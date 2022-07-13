import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import Home from "./Home";
import CounterChange from "./component/CounterChange";
import ToDoAssignment from "./component/ToDoAssignment";
import ModalComponent from "./component/ModalComponent";
import AccordionDemo from "./component/Accordion";
import FunToDoComponet from "./component/FunToDoComponent";
import DigitalClock from "./component/DigitalClocks";
import FormFunctional from "./component/FormFn";
import EMI from "./component/EMICalculator/EMI";
import ExpenseTracker from "./component/ExpenseTracker/ExpenseTracker";
import CurrencyConverter from "./component/CurrencyConverter/CurrencyConverter";
import ThemeApp from "./component/ThemeSwitcher/ThemeContext";
import WeatherApp from "./component/WeatherApp/WeatherApp";
import "./sass/style.scss";
import ReduxApp from "./component/ReduxApp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <ThemeApp />
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col">
              <Routes>
                {/*Default route*/}
                <Route path="/" element={<Home />} />
                {/*Default route*/}
                <Route path="/home" element={<Home />} />
                <Route path="/counter" element={<CounterChange />} />
                <Route path="/compmodal" element={<ModalComponent />} />
                <Route path="/todo" element={<ToDoAssignment />} />
                <Route path="/accordemo" element={<AccordionDemo />} />
                <Route path="/funtodolist" element={<FunToDoComponet />} />
                <Route path="/digiclock" element={<DigitalClock />} />
                <Route path="/formfn" element={<FormFunctional />} />
                <Route path="/emicalc" element={<EMI />} />
                <Route path="/expensetracker" element={<ExpenseTracker />} />
                <Route
                  path="/currencyconverter"
                  element={<CurrencyConverter />}
                />
                <Route path="/weatherapp" element={<WeatherApp />} />
                <Route path="/reduxapp" element={<ReduxApp />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ThemeApp />
    </BrowserRouter>
  );
}

export default App;
