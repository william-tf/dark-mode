import useLocalStorage from './useLocalStorage'

export default function useDarkMode(key){
    // const [darkMode, setDarkMode] = useLocalStorage('theme', '')
   
    const [someValue, setSomeValue] = useLocalStorage(key, false)
    const setDarkMode = () => {
        setSomeValue(!someValue)
    }
    return [someValue, setDarkMode]

}