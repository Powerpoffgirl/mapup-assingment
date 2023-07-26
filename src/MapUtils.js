import * as turf from '@turf/turf';

// Example turf.js function
export const calculateDistance = (point1, point2) => {
  const from = turf.point(point1);
  const to = turf.point(point2);
  const options = { units: 'kilometers' };
  const distance = turf.distance(from, to, options);
  return distance;
};
