import { Link, NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import "./SideBar.css"
export default function SideBar() {
  return (
    <div className="sidebar">
    <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

    <ul className="sidebar-links">
      <NavLink to="/">
          <HomeIcon className="icon" />
          صفحه اصلی
      </NavLink>
      <NavLink to="/products">
          <ProductionQuantityLimitsIcon className="icon" />
          محصولات
      </NavLink>
      <NavLink to="/comments">
          <MessageIcon className="icon" />
          کامنت ها
      </NavLink>
      <NavLink to="/users">
          <GroupIcon className="icon" />
          کاربران
      </NavLink>
      <NavLink to="/orders">
            <ShoppingBagIcon className="icon" />
            سفارشات
      </NavLink>
      <NavLink to="/offs">
            <MonetizationOnIcon className="icon" />
            تخفیف ها
      </NavLink>
    </ul>
  </div>
);
  
}
