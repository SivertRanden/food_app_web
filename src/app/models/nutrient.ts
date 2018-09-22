export class Nutrient{
    name: string;
    amount: string;

    constructor($name?: string, $amount?: string) {
        this.name = $name || "";
        this.amount = $amount || "";
    }

    //firestore doesnt support custom classes, so convert to object.
    getData(): object {
        const data = {};
        Object.keys(this).map(key => data[key] = this[key]);
        return data;
    }
}