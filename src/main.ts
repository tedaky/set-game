import { Card } from './card';
import { Color } from './color';
import { Count } from './count';
import { Material } from './material';
import { Shape } from './shape';

let color: Color = new Color();
let count: Count = new Count();
let material: Material = new Material();
let shape: Shape = new Shape();

interface card {
    color: string;
    count: number;
    material: string;
    shape: string;
}

let deck: card[] = [];

color.color.forEach(
    (color) => {

        count.count.forEach(
            (count) => {

                material.material.forEach(
                    (material) => {

                        shape.shape.forEach(
                            (shape) => {

                                deck.push({
                                    color: color.name,
                                    count: count.amount,
                                    material: material.name,
                                    shape: shape.name
                                });
                            }
                        );
                    }
                );
            }
        );
    }
);

let deckTest: card[] = [];
deckTest.push(deck[0], deck[8], deck[19]);
console.log(deckTest);

let colorMatch: boolean = false;
let countMatch: boolean = false;
let materialMatch: boolean = false;
let shapeMatch: boolean = false;

colorMatch =
    (deckTest[0].color === deckTest[1].color) ? (deckTest[0].color === deckTest[2].color) ? true : false : (deckTest[0].color !== deckTest[1].color) ? (deckTest[0].color !== deckTest[2].color) ? true : false : false;
console.log(colorMatch);

countMatch = (deckTest[0].count === deckTest[1].count) ? (deckTest[0].count === deckTest[2].count) ? true : false : (deckTest[0].count !== deckTest[1].count) ? (deckTest[0].count !== deckTest[2].count) ? true : false : false;
console.log(countMatch);

materialMatch = (deckTest[0].material === deckTest[1].material) ? (deckTest[0].material === deckTest[2].material) ? true : false : (deckTest[0].material !== deckTest[1].material) ? (deckTest[0].material !== deckTest[2].material) ? true : false : false;
console.log(materialMatch);

shapeMatch = (deckTest[0].shape === deckTest[1].shape) ? (deckTest[0].shape === deckTest[2].shape) ? true : false : (deckTest[0].shape !== deckTest[1].shape) ? (deckTest[0].shape !== deckTest[2].shape) ? true : false : false;
console.log(shapeMatch);