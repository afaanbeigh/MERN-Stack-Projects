export const CONVERSION_CATEGORIES = [
  {
    id: 'length',
    label: 'Length',
    accent: '#2563EB',
    units: {
      Meter: 1,
      Kilometer: 1000,
      Centimeter: 0.01,
    },
  },
  {
    id: 'weight',
    label: 'Weight',
    accent: '#059669',
    units: {
      Kilogram: 1,
      Gram: 0.001,
      Milligram: 0.000001,
    },
  },
  {
    id: 'temperature',
    label: 'Temperature',
    accent: '#DC2626',
    isTemperature: true,
    units: ['Celsius', 'Fahrenheit', 'Kelvin'],
  },
];
