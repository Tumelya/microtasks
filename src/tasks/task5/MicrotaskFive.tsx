import React, {useState} from 'react';
import {FilterMoney, FilterType} from "./FilterMoney";

export const MicrotaskFive = () => {

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("All")
    let currentMoney = money;
    if (filter === "Dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Dollars");
    }
    if (filter === "Ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Rubles");
    }

    const onClickFilterMoney = (buttonBanknote: FilterType) => {
        console.log(buttonBanknote);
        setFilter(buttonBanknote);
    }

    return (
        <div>
            <h1>Microtask 05 - filter()</h1>

            <FilterMoney currentMoney={currentMoney}
                         onClickFilterMoney={onClickFilterMoney}/>
        </div>
    )
}