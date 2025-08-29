import { IUser } from "@/contexts/userContext"

interface IAccount {
    name: string,
    password: string,
    user: IUser
}

export const userAccounts: IAccount[] = [
    {
        name: 'Rob',
        password: '123',
        user: {
            name: 'Rob',
            favRecipes: [],
            favCat: 'Beef',
            favCountries: [{ country: 'Polish' }, { country: 'Italian' },  { country: 'Moroccan' }]
        }
    },
    {
        name: 'Tobias',
        password: '123',
        user: {
            name: 'Tobias',
            favRecipes: [],
            favCat: 'Pasta',
            favCountries: [{ country: 'India' }, { country: 'Thailand' }]
        }
    }
]