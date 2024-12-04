import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RoutePath from "./components/routes/RoutePath";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <RoutePath />
      <Footer />
    </Router>
  );
}

export default App;
