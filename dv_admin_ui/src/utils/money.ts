export function MoneyFormat(money: number | string) {
    if (money === "" || money === "0") {
        return money;
    } else if (typeof money === "number") {
        return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    } else if (typeof money === "string") {
        return money.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    } else {
        return "";
    }
}

export function MoneyFormatToNumber(money: string) {
    if (money === '') return 0
    return Number(money.replace(/[^\w\s]/gi, ''))
}