import {
  HomeOutlined,
  PersonOutlineOutlined,
  HandymanOutlined,
  DescriptionOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";
import "./Sidebar.css";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className="sidebar__container flex column radius">
      <div className="sidebar__links flex column">
        <img
          src="https://companieslogo.com/img/orig/JOBY-c9c4af5c.png?t=1659932596"
          alt="Logo"
          className="sidebar__logo pointer"
        />
        <div className="sidebar__icons flex column pointer">
          <HomeOutlined />
          <PersonOutlineOutlined />
          <HandymanOutlined />
          <DescriptionOutlined />
        </div>
      </div>
      <div className="sidebar__help pointer">
        <HelpOutlineOutlined />
      </div>
    </div>
  );
};

export default Sidebar;
