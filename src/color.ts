import { Card } from './card';

export class Color extends Card {
    public color: color[];
    public constructor() {
        super();
        this.color = [
            { name: 'red' },
            { name: 'green' },
            { name: 'blue' }
        ];
    }
}
interface color {
    name: string;
}