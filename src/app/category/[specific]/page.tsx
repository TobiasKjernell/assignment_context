'use client'

import { IMeals } from "@/lib/interfaces";
import { getSpecificCategory } from "@/services/apiMealDb";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


let mealsData: IMeals | null
const Specific = ({ params }: { params: Promise<{ specific: string }> }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            setIsLoading(true);
            const { specific } = await params;
            mealsData = await getSpecificCategory(specific);
            console.log(mealsData);
            setIsLoading(false);
        }
        fetcher();
    }, [params])

    if (isLoading) return <div>is loading...</div>
    return (
        <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 gap-2 mt-2">
             {mealsData && mealsData.meals?.map(item => <Link className="bg-amber-200 flex justify-center flex-col lg: text-xl text-center" href={`/recipes/${item.idMeal}`} key={item.idMeal}><Image className="w-auto" src={item.strMealThumb} alt={item.strMeal} height={300} width={300} />{item.strMeal}</Link>)}
        </div>
    )

}

export default Specific;