import React from 'react';
import { Select, Button } from 'antd';

const { Option } = Select;

const FormInput = ({ regions, selectedRegion, handleRegionChange, handleLoadButtonClick }) => {
  return (
    <div className="floating-controls">
      <Select value={selectedRegion} onChange={handleRegionChange}>
        {regions.map((region) => (
          <Option key={region.value} value={region.value}>
            {region.label}
          </Option>
        ))}
      </Select>
      <Button type="primary"  onClick={() => handleLoadButtonClick(selectedRegion)}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
