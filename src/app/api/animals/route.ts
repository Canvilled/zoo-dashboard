import { NextResponse } from 'next/server';
import { Animal } from '@/types/animal';

const animals = [
  'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Monkey', 
  'Penguin', 'Polar Bear', 'Panda', 'Kangaroo', 'Rhino', 'Hippo'
];

function generateRandomAnimals(): Animal[] {
  return animals.map((species, i) => {
    const hunger = Math.floor(Math.random() * 100);
    const thirst = Math.floor(Math.random() * 100);
    const hygiene = Math.floor(Math.random() * 100);
    
    return {
      id: `animal-${i + 1}`,
      name: species,
      species,
      hunger,
      thirst,
      hygiene
    };
  });
}

export async function GET() {
  try {
    const animals = generateRandomAnimals();
    return NextResponse.json(animals);
  } catch (error) {
    console.error('Error generating animals data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch animals data' },
      { status: 500 }
    );
  }
}
