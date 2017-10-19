import { Card } from './card';

export class Count extends Card {
    public count: count[];
    public constructor() {
        super();
        this.count = [
            { amount: 1 },
            { amount: 2 },
            { amount: 3 }
        ];
    }
}
interface count {
    amount: number;
}