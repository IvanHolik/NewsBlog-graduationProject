import { useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../store/store"
import { changeTheme } from "../store/themeSlice"

export const Footer: React.FC = () => {
    
    const [darkTheme, setDarkTheme] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    dispatch(changeTheme(darkTheme));

    return (
        <footer className="py-[34px] bg-[#223030]">
            <div className="container flex justify-between text-white">
                <p>
                    &copy; Blogolog
                </p>
                <div className="flex gap-x-4">
                    <p>Dark theme</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input onChange={() => setDarkTheme(!darkTheme)} type="checkbox" checked={darkTheme} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </footer>
    )
}