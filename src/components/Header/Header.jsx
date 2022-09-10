import { NavLink } from "react-router-dom";
import mod from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={mod.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png" />
      <div className={mod.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
