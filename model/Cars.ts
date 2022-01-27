export class Car {
    id: string;
    name: string;
    color: string;
    constructor() {
        this.name = ""
        this.color = ""
        this.id = ""
    }
}

export class Employees {
    constructor(public id: number, public name: string, public salary: number) { }
}
