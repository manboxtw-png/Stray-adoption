export type AnimalType = 'dog' | 'cat';

export interface Animal {
  id: string;
  type: AnimalType;
  name: string;
  breed: string;
  age: string;
  gender: 'male' | 'female';
  personality: string;
  health: string;
  images: string[];
}
