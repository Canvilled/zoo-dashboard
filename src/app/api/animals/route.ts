import { NextResponse } from 'next/server';
import { generateRandomAnimals } from '@/lib/animals-service';


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
