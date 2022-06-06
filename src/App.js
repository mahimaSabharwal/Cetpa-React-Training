import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import Home from "./Home";
import CounterChange from "./component/CounterChange";
import ToDoAssignment from "./component/ToDoAssignment";
import ModalComponent from "./component/ModalComponent";
import ComponentAPI from "./component/ComponentAPI";
import FetchAPI from "./component/FetchAPI";
import AccordionDemo from "./component/Accordion";
import FunToDoComponet from "./component/FunToDoComponent";
import DigitalClock from "./component/DigitalClocks";
import FormFunctional from "./component/FormFn";
import EMI from "./component/EMICalculator/EMI";
import Parent from "./component/ContextReactDemo/Parent";
import ExpenseTracker from "./component/ExpenseTracker/ExpenseTracker";
import CurrencyConverter from "./component/CurrencyConverter/CurrencyConverter";
import HOC1 from "./component/hoc/HOC1";
import HOC2 from "./component/hoc/HOC2";
import "./sass/Test.scss";
import ThemeApp from "./component/ThemeSwitcher/ThemeContext";
import ContextDemo from "./component/ThemeSwitcher2/ContextDemo";
import WeatherApp from "./component/WeatherApp/WeatherApp";
import ContactApp from "./component/CRUD_API_JSON_Server/ContactApp";
import NotFound from "./common/NotFound";

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
                <Route path="/compapi" element={<ComponentAPI />} />
                <Route path="/fetchapi" element={<FetchAPI />} />
                <Route path="/accordemo" element={<AccordionDemo />} />
                <Route path="/funtodolist" element={<FunToDoComponet />} />
                <Route path="/digiclock" element={<DigitalClock />} />
                <Route path="/formfn" element={<FormFunctional />} />
                <Route path="/emicalc" element={<EMI />} />
                <Route path="/contextdemo" element={<Parent />} />
                <Route path="/expensetracker" element={<ExpenseTracker />} />
                <Route
                  path="/currencyconverter"
                  element={<CurrencyConverter />}
                />
                <Route path="/hoc1" element={<HOC1 />} />
                <Route path="/hoc2" element={<HOC2 />} />
                <Route path="/jsonserver" element={<ContactApp />} />
                {/* <Route path='/themeswitch' element={<ThemeSwitcher />} /> */}
                <Route path="/contextdemo2" element={<ContextDemo />} />
                <Route path="/apijsonserver" element={<WeatherApp />} />
                <Route path="/weatherapp" element={<WeatherApp />} />
                {/*Nested route*/}
                <Route path="/apps" element={<ContactApp />} />
                <Route path="apps">
                  <Route path="apps1" element={<CurrencyConverter />} />
                  <Route path="apps2" element={<ContextDemo />} />
                </Route>
                {/*Nested route*/}

                {/* 404/Page Not Found route*/}
                <Route path="*" element={<NotFound />} />
                {/*404/Page Not Found route*/}
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
