// Import necessary packages
import React, { useState } from 'react';
import { Layout, Menu, Button, Switch } from 'antd';
import { EnvironmentOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// Import custom components
import FormInput from './FormInput';
import RegionInfo from './RegionInfo';
import OSMMap from './OSMMap';
import { setSelectedRegion, setRegionInfo, toggleNightMode } from './redux/action';

const { Header, Sider, Content, Footer } = Layout;

// Main App component
function App() {
  // State management using React hooks
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.selectedRegion);
  const regionInfo = useSelector((state) => state.regionInfo);
  const nightMode = useSelector((state) => state.nightMode);

  // Available regions for the select input
  const regions = [
    { value: 'united-states', label: 'United States' },
    { value: 'india', label: 'India' },
    { value: 'united-kingdom', label: 'United Kingdom' },
  ];

  // Handler for region selection change
  const handleRegionChange = (value) => {
    dispatch(setSelectedRegion(value));
  };

  // Handler for load button click to simulate loading region info
  const handleLoadButtonClick = () => {
    // Simulate loading region info for demonstration purposes
    const dummyRegionInfo = {
      currency: 'USD',
      speedUnit: 'kmph',
      distanceUnit: 'kilometers',
      volumeUnit: 'liters',
      timezone: 'UTC+0',
    };
    dispatch(setRegionInfo(dummyRegionInfo));
  };

  // Handler to toggle the sidebar collapse
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Handler for night mode toggle switch
  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };

  return (
    // Main layout structure using Ant Design components
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={toggleSidebar}>
        <div className="logo">Logo</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {/* Map menu item */}
          <Menu.Item key="1" icon={<EnvironmentOutlined />}>
            Map
          </Menu.Item>
          {/* Night Mode toggle menu item */}
          <Menu.Item key="night-mode" icon={<UserOutlined />}>
            <Switch checked={nightMode} onChange={handleNightModeToggle} />
            Night Mode
          </Menu.Item>
        </Menu>
      </Sider>
      {/* Main content area */}
      <Layout>
        {/* Header */}
        <Header className="header">
          <div className="user-profile">
            {/* Replace the below dummy buttons with actual authentication functionality */}
            <Button icon={<UserOutlined />}>Profile</Button>
            <Button icon={<LoginOutlined />}>Login</Button>
            <Button icon={<LogoutOutlined />}>Logout</Button>
          </div>
        </Header>
        {/* Main content */}
        <Content>
          {/* OpenStreetMap component */}
          <OSMMap center={[51.505, -0.09]} zoom={13} markerPosition={[51.505, -0.09]} />
          {/* Form input component */}
          <FormInput regions={regions} selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} handleLoadButtonClick={handleLoadButtonClick} />
          {/* Region info component */}
          <RegionInfo selectedRegion={selectedRegion} regionInfo={regionInfo} />
        </Content>
        {/* Footer */}
        <Footer className="footer">Plain text footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
