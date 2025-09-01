import { ICountry, IRecipe } from "@/lib/interfaces";
import { createContext, useContext, useReducer } from "react";

export interface IUser {
    name: string | null,
    favRecipes: IRecipe[],
    favCat: string | null;
    favCountries: ICountry[]
}

interface IUserContext {
    user: IUser
    deleteRecipe: (mealID: string) => void;
    addRecipe: (mealIdAndName: IRecipe) => void;
    updateCategory: (cat: string) => void;
    updateUser: (currentUser: IUser | null) => void;
    addCountry: (country: ICountry) => void;
    deleteCountry: (country: string) => void;
}

const UserContext = createContext<IUserContext | null>(null)

type UserActions =  
    | { type: 'updateCategory', payload: string }
    | { type: 'addRecipe', payload: IRecipe }
    | { type: 'deleteRecipe', payload: string }
    | { type: 'updateUser', payload: IUser | null}
    | { type: 'addCountry', payload: ICountry }
    | { type: 'deleteCountry', payload: string }

const inititalState: IUser = {
    name: null,
    favRecipes: [],
    favCat: null,
    favCountries: []
}

const reducer = (state: IUser, action: UserActions ): IUser => {
    switch (action.type) {
        case 'updateUser': return action.payload ? action.payload : inititalState;
        case 'addRecipe': return { ...state, favRecipes: [...state.favRecipes, action.payload] };
        case 'addCountry': return { ...state, favCountries: [...state.favCountries, action.payload] };
        case 'updateCategory': return { ...state, favCat: action.payload };
        case 'deleteRecipe': return { ...state, favRecipes: state.favRecipes.filter(item => item.id !== action.payload) }
        case 'deleteCountry': return { ...state, favCountries: state.favCountries.filter(item => item.country !== action.payload) }
        default: return state;
    }
}

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [{ name, favRecipes, favCat, favCountries }, dispatch] = useReducer(reducer, inititalState)

    const deleteRecipe = (mealID: string) => dispatch({ type: 'deleteRecipe', payload: mealID });
    const updateUser = (name: IUser | null) => dispatch({ type: 'updateUser', payload: name })
    const updateCategory = (cat: string) => dispatch({ type: 'updateCategory', payload: cat })
    const addRecipe = (meal: IRecipe) => dispatch({ type: 'addRecipe', payload: meal })
    const addCountry = (country: ICountry) => dispatch({ type: 'addCountry', payload: country })
    const deleteCountry = (country: string) => dispatch({ type: 'deleteCountry', payload: country })

    return <UserContext.Provider value={{
        user: { name, favRecipes, favCat, favCountries },
        deleteRecipe: deleteRecipe,
        addRecipe: addRecipe,
        updateCategory: updateCategory,
        updateUser: updateUser,     
        addCountry: addCountry,
        deleteCountry: deleteCountry
    }}>{children}</UserContext.Provider>
}

const useUser = () => {
    const context: IUserContext | null = useContext(UserContext);
    if (context === undefined || context === null) throw new Error('UserContext used outside scope');
    return context as IUserContext;
}

export { useUser, UserContextProvider };


