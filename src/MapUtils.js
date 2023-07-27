import axios from 'axios';

// Function to fetch country GeoJSON data based on the selected region
export const getCountryGeoJSON = async (selectedRegion) => {
  try {
   const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${selectedRegion}&limit=1&addressdetails=1`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching GeoJSON data');
  }
};
