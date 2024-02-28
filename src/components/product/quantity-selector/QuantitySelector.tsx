'use client';

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }:Props) => {

    const [count, setCount] = useState( quantity );

    const onQuantityChanged =( value: number )=>{
        if( count + value < 1 ) return;

        setCount( count + value )
    }

  return (
    <div className="flex">
        <button>
            <IoRemoveCircleOutline size={ 30 } onClick={()=> onQuantityChanged(-1)} />
        </button>
        <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
            { count }
        </span>
        <button>
            <IoAddCircleOutline size={ 30 } onClick={()=> onQuantityChanged(+1)} />
        </button>

    </div>
  )
}
