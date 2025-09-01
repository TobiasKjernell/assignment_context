'use client'

import { useUser } from "@/contexts/userContext";
import Link from "next/link";

const MyCornerListItem = ({ id, name }: { id?: string, name: string }) => {
    const { deleteRecipe, deleteCountry } = useUser();
    return (
        <div className="flex justify-between px-2 mb-2 border-b border-amber-300">
            <Link className="p-4" href={id ? `/recipes/${id}` : `/countries/${name}`} >{name}</Link>
            <button className="cursor-pointer p-4" onClick={() => id ? deleteRecipe(id) : deleteCountry(name)}>Remove</button>
        </div>
    )
}

export default MyCornerListItem;    