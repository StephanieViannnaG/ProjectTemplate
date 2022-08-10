import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import CustomScrollbars from 'util/CustomScrollbars';
import SidebarLogo from './SidebarLogo';
// import UserProfile from "./UserProfile";
// import AppsNavigation from "./AppsNavigation";
import { THEME_TYPE_LITE } from '../../constants/ThemeSetting';
import IntlMessages from '../../util/IntlMessages';
import { useSelector } from 'react-redux';

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const { themeType } = useSelector(({ settings }) => settings);
  const pathname = useSelector(({ common }) => common.pathname);

  // const getNoHeaderClass = (navStyle) => {
  //   if (
  //     navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
  //     navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
  //   ) {
  //     return "gx-no-header-notifications";
  //   }
  //   return "";
  // };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (
    <>
      <SidebarLogo sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
      <div className="gx-sidebar-content">
        {/* <div
          className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}
        >
          <UserProfile/>
          <AppsNavigation />
        </div> */}
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">
            <Menu.Item key="Page1" className="underline-hover-effect">
              <Link to="/Page1">
                <i className="icon fas fa-route"></i>
                <span>
                  <IntlMessages id="sidebar.Page1" />
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="Anomaly_Decomposition" className="underline-hover-effect">
              <Link to="/Anomaly_Decomposition">
                <i className="icon fas fa-route"></i>
                <span>
                  <IntlMessages id="sidebar.AnomalyDecomposition" />
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default React.memo(SidebarContent);
