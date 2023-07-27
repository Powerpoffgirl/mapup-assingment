import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Switch } from 'antd';
import { EnvironmentOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import FormInput from './FormInput';
import RegionInfo from './RegionInfo';
import OSMMap from './OSMMap';
import { setSelectedRegion, setRegionInfo, toggleNightMode } from './redux/action';
import { getCountryGeoJSON } from './MapUtils'; // Function to get the country GeoJSON data

const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.selectedRegion);
  const regionInfo = useSelector((state) => state.regionInfo);
  const nightMode = useSelector((state) => state.nightMode);
  const [countryBoundary, setCountryBoundary] = useState(null);

  const regions = [
    { value: 'United-States', label: 'United States' },
    { value: 'India', label: 'India' },
    { value: 'United-Kingdom', label: 'United Kingdom' },
  ];

   // Apply night mode class to the main container based on the nightMode state
   useEffect(() => {
    const appContainer = document.querySelector('#app-container');
    if (nightMode) {
      appContainer.classList.add('night-mode');
    } else {
      appContainer.classList.remove('night-mode');
    }
  }, [nightMode]);

  const handleRegionChange = (value) => {
    dispatch(setSelectedRegion(value));
  };

  const handleLoadButtonClick = (selectedRegion) => {
    // Define a regionInfo object that maps each country to its respective region info
    const regionInfoMap = {
      India: {
        currency: 'Rupees',
        speedUnit: 'kmph',
        distanceUnit: 'kilometers',
        volumeUnit: 'liters',
        timezone: 'Indian Standard Time (IST)',
      },
      'United-Kingdom': {
        currency: 'Pound Sterling',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'gallons',
        timezone: 'British Summer Time (BST)',
      },
      'United-States': {
        currency: 'US Dollar',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'gallons',
        timezone: 'Eastern Standard Time (EST)',
      },
      // Add more countries and their region info as needed
    };
  
    // Get the region info based on the selectedRegion
    const regionInfo = regionInfoMap[selectedRegion];
  
    // Dispatch the region info to update the state
    dispatch(setRegionInfo(regionInfo));
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };


  useEffect(() => {
    // Load country GeoJSON data when the selected region changes
    const fetchCountryGeoJSON = async () => {
      try {
        const geoJSONData = await getCountryGeoJSON(selectedRegion);
        console.log("Country GeoJSON", geoJSONData);
        setCountryBoundary(geoJSONData);
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchCountryGeoJSON();
  }, [selectedRegion]);

  console.log("COUNTRY BOUNDARY", countryBoundary);
  if (countryBoundary && countryBoundary.length > 0) {
    console.log("COUNTRY BOUNDARY", countryBoundary[0].lat);
  }

  return (
    <div id="app-container" className="app-container">
<Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleSidebar}>
        <div className="logo">Logo</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item className='mapItem' key="1" icon={<EnvironmentOutlined />}>
            Map
          </Menu.Item>
          <Menu.Item key="night-mode" icon={<UserOutlined />}>
            <Switch checked={nightMode} onChange={handleNightModeToggle} />
            Night Mode
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <div className="user-profile">
            <Button icon={<UserOutlined />}>Profile</Button>
            <Button icon={<LoginOutlined />}>Login</Button>
            <Button icon={<LogoutOutlined />}>Logout</Button>
          </div>
        </Header>
        <Content className="content">
          <OSMMap
                center={
                  countryBoundary && countryBoundary.length > 0
                    ? [countryBoundary[0].lat, countryBoundary[0].lon]
                    : [20.5937, 78.9629] // Default center if countryBoundary is null or empty (center of India)
              }
              zoom={countryBoundary && countryBoundary.length > 0 ? 1 : 1} // Adjust the zoom level based on the data
              markerPosition={
                countryBoundary && countryBoundary.length > 0
                  ? [countryBoundary[0].lat, countryBoundary[0].lon] // Pass the correct array of latitude and longitude
                  : null // No marker if countryBoundary is null or empty
              }
              countryBoundary={countryBoundary}
            />

          <FormInput regions={regions} selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} handleLoadButtonClick={handleLoadButtonClick} />
          <RegionInfo selectedRegion={selectedRegion} regionInfo={regionInfo} />
        </Content>
        <Footer className="footer">Plain text footer</Footer>
      </Layout>
    </Layout>
    </div>
    
  );
}

export default App;
