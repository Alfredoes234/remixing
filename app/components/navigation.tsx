import { Link } from "@remix-run/react";

export default function MainNav() {
    return(
        <nav className="flex justify-between m-5">
            <h1 className="text-4xl font-bold"><Link to="/" prefetch="intent" >Logo</Link></h1>
            <div className="flex gap-5 text-2xl">
                    <p><Link to="/cart" prefetch="intent" >cart</Link></p>
                    <p><Link to="/login" prefetch="intent" >login</Link></p>
            </div>
        </nav>
    )
}