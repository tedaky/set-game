import { Init } from './lifecycle';
import { Card } from './card';
import { iGame } from './iGame';

export class Material extends Card implements Init {
    public material: iGame[];

    public constructor() {
        super();
    }

    public onInit(): void {
        this.material = [
            { name: 'transparent' },
            { name: 'striped' },
            { name: 'opaque' }
        ];
    }
}
