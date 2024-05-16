console.log("");
console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
    machine: string;
    coins: number;

    constructor(machine: string) {
        this.machine = machine;
        this.coins = 0;
    }

    play(coins: number) {
        this.coins += coins;

        let value1 = Math.random() >= 0.5;
        let value2 = Math.random() >= 0.5;
        let value3 = Math.random() >= 0.5;

        console.log(`You play for ${this.coins} coins:
        Tirada 1: ${value1}
        Tirada 2: ${value2}
        Tirada 3: ${value3}`);

        if (value1 && value2 && value3 ) {
            console.log (`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlotMachine ("Machine 1");

machine1.play(3);
machine1.play(4);
machine1.play(2);
machine1.play(5);
