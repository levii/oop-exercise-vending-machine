import { VendingMachine } from './VendingMachine';

const scenario1 = () => {
    console.log('[1] 100円を入れて 0: COKE を購入');
    const money = 100;
    const drinkType = 0;
    const machine = new VendingMachine();
    const myDrink = machine.buy(money, drinkType);
    const change = machine.refund();

    console.log(
        '結果',
        {
            boughtDrink: myDrink,
            change: change,
        },
        '→ Cokeを購入して、お釣りは0円'
    );
};

const scenario2 = () => {
    console.log('[2] 200円を入れて 0: COKE を購入');
    const money = 200;
    const drinkType = 0;
    const machine = new VendingMachine();
    const myDrink = machine.buy(money, drinkType);
    const change = machine.refund();

    console.log(
        '結果',
        {
            boughtDrink: myDrink,
            change: change,
        },
        '→ 100円か500円しか受け付けないので、購入できず、そのまま200円が返ってくる'
    );
};

const scenario3 = () => {
    console.log('[3] 500円を入れて 2: TEA を購入');
    const money = 500;
    const drinkType = 2;
    const machine = new VendingMachine();
    const myDrink = machine.buy(money, drinkType);
    const change = machine.refund();

    console.log(
        '結果',
        {
            boughtDrink: myDrink,
            change: change,
        },
        '→ TEAが出て、400円がお釣りとして返ってくる'
    );
};

const scenario4 = () => {
    console.log('[4] 100円を入れて 1: DietCoke を購入 を 6回繰り返す');
    const money = 100;
    const drinkType = 1;
    const machine = new VendingMachine();

    const results = [
        // 1回目
        {
            drink: machine.buy(money, drinkType),
            change: machine.refund(),
        },
        // 2回目
        {
            drink: machine.buy(money, drinkType),
            change: machine.refund(),
        },
        // 3回目
        {
            drink: machine.buy(money, drinkType),
            change: machine.refund(),
        },
        // 4回目
        {
            drink: machine.buy(money, drinkType),
            change: machine.refund(),
        },
        // 5回目
        {
            drink: machine.buy(money, drinkType),
            change: machine.refund(),
        },
        // 6回目
        {
            drink: machine.buy(money, drinkType),
            change: machine.refund(),
        },
    ];

    console.log('結果', results, '→ 最後の6回目は DietCoke が出なくて、投入した100円がそのまま返ってくる');
};

export { scenario1, scenario2, scenario3, scenario4 };
