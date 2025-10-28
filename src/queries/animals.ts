import { Animal } from '@/types/animal';
import { queryOptions } from '@tanstack/react-query'
import { generateRandomAnimals } from '@/lib/animals-service';

// Client-side fetch using API route
async function fetchAnimalsClient(): Promise<Animal[]> {
  const response = await fetch('/api/animals');
  if (!response.ok) {
    throw new Error('Failed to fetch animals');
  }
  return response.json();
}

// Server-side fetch using direct service call
function fetchAnimalsServer(): Animal[] {
  return generateRandomAnimals();
}

export const animalOptions = queryOptions({
    queryKey: ['animals'],
    queryFn: typeof window === 'undefined' ? fetchAnimalsServer : fetchAnimalsClient,
})