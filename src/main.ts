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

function createDeck(): card[] {
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

    return deck;
}

function shuffle(deck: card[]): card[] {
    let currentIndex: number = deck.length;
    let temporary: card;
    let randomIndex: number;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporary = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporary;
    }

    return deck;
}

let deck: card[] = createDeck();
let shuffled: card[] = shuffle(deck);
let deckTest: card[] = [];
deckTest.push(shuffled[0], shuffled[1], shuffled[2]);

function matchCheck(selection: card[]): boolean {
    let colorMatch: boolean = false;
    let countMatch: boolean = false;
    let materialMatch: boolean = false;
    let shapeMatch: boolean = false;
    
    colorMatch    = (selection[0].color     === selection[1].color)    ? (selection[0].color    === selection[2].color)    ? true : false : (selection[0].color    !== selection[1].color)    ? (selection[0].color    !== selection[2].color)    ? (selection[1].color    !== selection[2].color)    ? true : false : false : false;
    countMatch    = (selection[0].count     === selection[1].count)    ? (selection[0].count    === selection[2].count)    ? true : false : (selection[0].count    !== selection[1].count)    ? (selection[0].count    !== selection[2].count)    ? (selection[1].count    !== selection[2].count)    ? true : false : false : false;
    materialMatch = (selection[0].material  === selection[1].material) ? (selection[0].material === selection[2].material) ? true : false : (selection[0].material !== selection[1].material) ? (selection[0].material !== selection[2].material) ? (selection[1].material !== selection[2].material) ? true : false : false : false;
    shapeMatch    = (selection[0].shape     === selection[1].shape)    ? (selection[0].shape    === selection[2].shape)    ? true : false : (selection[0].shape    !== selection[1].shape)    ? (selection[0].shape    !== selection[2].shape)    ? (selection[1].shape    !== selection[2].shape)    ? true : false : false : false;

    return colorMatch && countMatch && materialMatch && shapeMatch;
}

let match: boolean = false;
match = matchCheck(deckTest);