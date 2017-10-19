import { Card } from './card';

export class Shape extends Card {
    public shape: shape[];
    public constructor() {
        super();
        this.shape = [
            { name: 'diamond' },
            { name: 'pill' },
            { name: 'squiggle' }
        ];
    }
}
interface shape {
    name: string;
}