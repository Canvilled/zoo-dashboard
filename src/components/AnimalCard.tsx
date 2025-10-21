import { Animal } from '@/types/animal';

interface AnimalCardProps {
  animal: Animal;
  onClick?: () => void;
}

export default function AnimalCard({ animal, onClick }: AnimalCardProps) {
  const getNeedColor = (value: number) => {
    if (value < 30) return 'badge-error';
    if (value < 60) return 'badge-warning';
    return 'badge-success';
  };

  const needs = [
    { name: 'Hunger', value: animal.hunger },
    { name: 'Thirst', value: animal.thirst },
    { name: 'Hygiene', value: animal.hygiene }
  ].sort((a, b) => b.value - a.value);

  return (
    <div 
      className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body p-4">
        <div className="space-y-4">
          <div>
            <h3 className="card-title text-lg font-bold">{animal.name}</h3>
            {animal.species !== animal.name && (
              <p className="text-sm text-base-content/70">{animal.species}</p>
            )}
          </div>

          <div className={`badge ${getNeedColor(needs[0].value)} badge-lg`}>
            {needs[0].name}
          </div>
        </div>
      </div>
    </div>
  );
}
