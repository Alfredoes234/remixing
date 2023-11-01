import { NavLink } from "@remix-run/react";

export default function Nav() {
    return(
        <nav className="flex justify-between m-5">
            <div>
                <NavLink to="/" prefetch="intent" className="text-4xl font-bold" >Logo</NavLink>
            </div>
            <div className="flex gap-5 text-2xl">
                <NavLink to="/cart" prefetch="intent" >cart</NavLink>
                <NavLink to="/login" prefetch="intent" >login</NavLink>
            </div>
        </nav>
    )
}