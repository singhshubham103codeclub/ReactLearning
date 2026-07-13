/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const ThemeDataContext = createContext();

const Themecontext = (props) => {
    return (
        <ThemeDataContext.Provider value='shuhbh'>
            {props.children}
        </ThemeDataContext.Provider>
    )
}
export default Themecontext
