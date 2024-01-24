import { NavLink } from "react-router-dom"

export const Page404 = () => {
    return (
        <div className="p-6">
            <p className="text-[10rem]">404</p>
            <p>Please <NavLink to="/">return to the site</NavLink></p>
        </div>
    )
}