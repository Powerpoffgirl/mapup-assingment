import React from 'react';
import { Card } from 'antd';

const RegionInfo = ({ selectedRegion, regionInfo }) => {
  return (
    <Card className="region-info-card">
      <h3>Region Info</h3>
      <p>Selected Region: {selectedRegion}</p>
      {regionInfo && (
        <>
          <p>Currency Symbol: {regionInfo.currency}</p>
          <p>Units of Speed: {regionInfo.speedUnit}</p>
          <p>Units of Distance: {regionInfo.distanceUnit}</p>
          <p>Units of Volume: {regionInfo.volumeUnit}</p>
          <p>Timezone: {regionInfo.timezone}</p>
        </>
      )}
    </Card>
  );
};

export default RegionInfo;
