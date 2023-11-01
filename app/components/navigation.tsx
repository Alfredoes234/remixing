import { NavLink } from "@remix-run/react";

export default function Nav() {
    return(
        <nav className="flex justify-between m-5">
<<<<<<< HEAD
            <div>
                <NavLink to="/" prefetch="intent" className="text-4xl font-bold" >Logo</NavLink>
            </div>
            <div className="flex gap-5 text-2xl">
                <NavLink to="/cart" prefetch="intent" >cart</NavLink>
                <NavLink to="/login" prefetch="intent" >login</NavLink>
=======
            <h1 className="text-4xl font-bold"><Link to="/" prefetch="intent" >Logo</Link></h1>
            <div className="flex gap-5 text-2xl">
                    <p><Link to="/cart" prefetch="intent" >cart</Link></p>
                    <p><Link to="/login" prefetch="intent" >login</Link></p>
>>>>>>> 6832e7b0adbcf76e38f7d03f2bd352f2be9de772
            </div>
        </nav>
    )
}