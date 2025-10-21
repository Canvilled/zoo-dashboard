'use client';

import { useAnimals } from '@/hooks/useAnimals';
import AnimalCard from './AnimalCard';

export default function AnimalDashboard() {
  const { data: animals, isLoading, error } = useAnimals();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>Error loading animals data. Please try again.</span>
      </div>
    );
  }

  if (!animals || animals.length === 0) {
    return (
      <div className="alert alert-info">
        <span>No animals data available.</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Zoo Animals</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}
