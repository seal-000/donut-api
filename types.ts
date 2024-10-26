export interface Topping {
    id: string;
    type: string;
}

export interface Batter {
    id: string;
    type: string;
}

export interface Donut {
    id: string;
    type: string;
    name: string;
    ppu: number;
    batters: {
        batter: Batter[];
    };
    topping: Topping[];
}

export type Data = Donut[];
