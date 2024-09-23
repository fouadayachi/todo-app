import { useEffect, useState } from "react";


export default function useLocalStorage(key,defaultValue){
    const [value,setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch (error) {
            currentValue = defaultValue;
            console.error(`Error parsing ${key} from localStorage:`, error);
        }
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])

    return [value,setValue];
}