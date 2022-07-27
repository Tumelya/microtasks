//microtask 05 - filter()
import React, {useState} from "react";

export type FilterType = "All" | "Dollar" | "Ruble"

type CurrentMoneyType = {
    banknotes: string
    value: number
    number: string

}
type filterMoneyType = {
    currentMoney: Array<CurrentMoneyType>
    onClickFilterMoney: (buttonBanknote: FilterType) => void
}

/*const [filter, setFilter] = useState<FilterType>("All")
let currentMoney = money;
if (filter === "Dollar") {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Dollars");
}
if (filter === "Ruble") {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Rubles");
}*/

export const FilterMoney = (props: filterMoneyType) => {

    /*const onClickFilterMoney = (buttonBanknote: FilterType) => {
        console.log(buttonBanknote);
        props.setFilter(buttonBanknote);
    }*/

return (
    <>
        <ul>
            {props.currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknotes}</span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
        <div style={{marginLeft: "35px"}}>
            <button onClick={() => props.onClickFilterMoney("Dollar")}>Dollar</button>
            <button onClick={() => props.onClickFilterMoney("Ruble")}>Ruble</button>
            <button onClick={() => props.onClickFilterMoney("All")}>All</button>
        </div>
    </>
)
}