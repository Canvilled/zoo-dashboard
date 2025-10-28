import { Animal } from '@/types/animal';

const animals = [
    'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Monkey',
    'Penguin', 'Polar Bear', 'Panda', 'Kangaroo', 'Rhino', 'Hippo'
];

export function generateRandomAnimals(): Animal[] {
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