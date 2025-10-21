import { Animal } from '@/types/animal';

interface AnimalDetailModalProps {
  animal: Animal | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AnimalDetailModal({ animal, isOpen, onClose }: AnimalDetailModalProps) {
  if (!animal) return null;

  const getProgressColor = (value: number) => {
    if (value < 30) return 'progress-error';
    if (value < 60) return 'progress-warning';
    return 'progress-success';
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">{animal.name}</h3>
        {animal.species !== animal.name && (
          <p className="text-sm text-base-content/70 mb-4">{animal.species}</p>
        )}
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>Hunger</span>
              <span className="text-sm">{animal.hunger}%</span>
            </div>
            <progress 
              className={`progress w-full ${getProgressColor(animal.hunger)}`} 
              value={animal.hunger} 
              max="100"
            ></progress>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>Thirst</span>
              <span className="text-sm">{animal.thirst}%</span>
            </div>
            <progress 
              className={`progress w-full ${getProgressColor(animal.thirst)}`} 
              value={animal.thirst} 
              max="100"
            ></progress>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>Hygiene</span>
              <span className="text-sm">{animal.hygiene}%</span>
            </div>
            <progress 
              className={`progress w-full ${getProgressColor(animal.hygiene)}`} 
              value={animal.hygiene} 
              max="100"
            ></progress>
          </div>
        </div>
        
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
