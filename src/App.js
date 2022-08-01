import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import "./App.css";

const App = () => {
  return (
    <div className="app-wraper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
