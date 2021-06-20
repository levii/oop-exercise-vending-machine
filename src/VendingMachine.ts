class Drink {
    public static Coke = 0;
    public static DietCoke = 1;
    public static Tea = 2;

    private kind: number;

    public constructor(kind: number) {
        this.kind = kind;
    }

    public getKind(): number {
        return this.kind;
    }
}

export class VendingMachine {
    private quantityOfCoke: number;
    private quantityOfDietCoke: number;
    private quantityOfTea: number;
    private numberOf100Yen: number;
    private change: number;

    public constructor() {
        this.quantityOfCoke = 5;
        this.quantityOfDietCoke = 5;
        this.quantityOfTea = 5;
        this.numberOf100Yen = 10;
        this.change = 0;
    }

    /**
     * ジュースを購入する
     *
     * @param i 投入金額。100円と500円のみ受け付ける。
     * @param kindOfDrink ドリンクの種類。コーラ、ダイエットコーラ、お茶が指定できる。
     * @return 指定したジュース。在庫不足や釣り銭不足で変えなかった場合は null が返される。
     */
    public buy(i: number, kindOfDrink: number): Drink | null {
        // 100円と500円だけ受け付ける
        if (i !== 100 && i !== 500) {
            this.change += i;
            return null;
        }

        if (kindOfDrink === Drink.Coke && this.quantityOfCoke === 0) {
            this.change += i;
            return null;
        } else if (kindOfDrink === Drink.DietCoke && this.quantityOfDietCoke === 0) {
            this.change += i;
            return null;
        } else if (kindOfDrink === Drink.Tea && this.quantityOfTea === 0) {
            this.change += i;
            return null;
        }

        // 釣り銭不足
        if (i === 500 && this.numberOf100Yen < 4) {
            this.change += i;
            return null;
        }

        if (i === 100) {
            // 100円玉を釣り銭に使えるように追加
            this.numberOf100Yen += 1;
        } else if (i === 500) {
            // 400円のお釣り
            this.change += i - 100;
            // 釣り銭に使える100円玉を減らす
            this.numberOf100Yen -= (i - 100) / 100;
        }

        if (kindOfDrink === Drink.Coke) {
            this.quantityOfCoke -= 1;
        } else if (kindOfDrink === Drink.DietCoke) {
            this.quantityOfDietCoke -= 1;
        } else {
            this.quantityOfTea -= 1;
        }

        return new Drink(kindOfDrink);
    }

    /**
     * お釣りを取り出す
     *
     * @return お釣りの金額
     */
    public refund(): number {
        const result = this.change;
        this.change = 0;
        return result;
    }
}
