import { Card } from './card';

export class Material extends Card {
    public material: material[];
    public constructor() {
        super();
        this.material = [
            { name: 'transparent' },
            { name: 'striped' },
            { name: 'opaque' }
        ];
    }
}
interface material {
    name: string;
}