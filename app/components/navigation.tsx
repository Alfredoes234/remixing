import { Link } from "@remix-run/react";

export default function MainNav() {
    return(
        <nav className="flex justify-between m-5">
            <li className="text-4xl font-bold"><Link to="/" prefetch="intent" >Logo</Link></li>
            <div className="flex gap-5 text-2xl">
                    <li><Link to="/cart" prefetch="intent" >cart</Link></li>
                    <li><Link to="/login" prefetch="intent" >login</Link></li>
            </div>
        </nav>
    )
}