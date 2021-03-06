import './App.css';
import Header from "../header/Header";
import Payment from "../payment/Payment";
import Steps from "../steps/Steps";
import World from "../world/World";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";

function App() {
  return (
      <>
          <Header />
          <Payment />
          <Steps />
          <World />
          <Cards />
          <Footer />
      </>
  );
}

export default App;
