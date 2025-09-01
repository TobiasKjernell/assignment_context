'use client'

import { IMeals } from "@/lib/interfaces"
import { getMealByCountry as getMealsByCountry } from "@/services/apiMealDb";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

let mealsData: IMeals | null
const Country = ({ params }: { params: Promise<{ country: string }> }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            setIsLoading(true);
            const { country } = await params;
            mealsData = await getMealsByCountry(country);
            console.log(mealsData);
            setIsLoading(false);
        }
        fetcher();
    }, [params])

    if (isLoading) return <div>is loading...</div>  
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-auto justify-center items-center gap-7">
                {mealsData && mealsData.meals?.map(item => <Link className="bg-amber-200 flex justify-center flex-col lg: text-xl text-center" href={`/recipes/${item.idMeal}`} key={item.idMeal}><Image className="w-auto" src={item.strMealThumb} alt={item.strMeal} height={300} width={300} />{item.strMeal}</Link>)}

            </div>
            <Link href='/countries'>Back</Link>
        </>
    )
}

export default Country;