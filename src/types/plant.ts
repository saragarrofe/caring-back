export type WateringEntry = {
  date: string;
  note?: string;
};

export type LightLevel = 'Low' | 'Medium' | 'High' | 'Indirect';

export type PlantLocation =
  | 'Living Room'
  | 'Bedroom'
  | 'Kitchen'
  | 'Bathroom'
  | 'Office'
  | 'Balcony'
  | 'Garden';

export type CareLevel = 'Easy' | 'Medium' | 'Hard';