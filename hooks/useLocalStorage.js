import Error from "next/error";
import { useState } from "react";

// Cache data to local storage

export default function useLocalStorage(key, initialValue){
    // GET VALUE
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined'){
            return initialValue;
        }

        try {
            // get from local storage by key
            const item = window.localStorage.getItem(key);
            // parse stored Json or if none return initial value
            return item ? JSON.parse(item) : initialValue;
        } catch(err){
            console.log('Error getting item from storage', err);
            return initialValue;
        }
    });

    // SET NEW VALUE
    const setValue = value => {
        try {
            // allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // save to local storage
            if(typeof window !== undefined) {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch(err){
            console.log('Error saving item in local storage', err)
        }
    }

    return [storedValue, setValue];
}