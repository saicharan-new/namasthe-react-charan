import React from 'react'
import ItemList from './ItemList';
import { useState } from 'react';
import { flushSync } from 'react-dom';

const RestaurantCategory = ({data, showItem, setshowIndex}) => {
    // console.log(data)
    
    const {title,itemCards} = data;
    const handleClick = () => {
        // console.log("clicked")
        // setshowItem(!showItem)
        setshowIndex();
    }
  return (
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className={`flex justify-between ${!showItem ? 'mb-0' : 'mb-6'} cursor-pointer`} onClick={handleClick}>
                <span className="font-bold text-lg">{title}({itemCards.length})</span>
                <span>{!showItem ? "⬇️" : "⬆️"}</span>
            </div>
            {showItem && <ItemList items={data.itemCards} showAddButton={true}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory
