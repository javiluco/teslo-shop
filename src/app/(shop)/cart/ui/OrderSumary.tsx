'use client';

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";

export const OrderSumary = () => {

    const [loaded, setLoaded] = useState(false);
    const {subTotal, tax, total, itemsInCart}= useCartStore( state => state.getSummaryInformation() );

    useEffect(() => {
        setLoaded(true);
    }, []);

    if(!loaded){
        <p>Loading...</p>
        return;
    }
    
    return (
        <div className="grid grid-cols-2">
            <span>No. Productos</span>
            <span className="text-right">{ itemsInCart ===1 ? '1 artículo': `${ itemsInCart } artículos`}</span>

            <span>Subtotal</span>
            <span className="text-right">{ currencyFormat( subTotal )}</span>

            <span>Impuestos (19%)</span>
            <span className="text-right">{ currencyFormat( tax ) }</span>

            <span className="mt-5 text-2xl">Total: </span>
            <span className="mt-5 text-2xl text-right">{ currencyFormat( total)}</span>

        </div>
    )
}
