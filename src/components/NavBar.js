import CarWidget from "./CarWidget"

const NavBar = () => {
  return (
    <header> 
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                 <a href="/" className="btn normal-case text-xl" >GILMORE GLORIOUS GOODS</a>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu menu-horizontal navbar-center">
                    <li><a href="/">Armor</a></li>
                    <li><a href="/">Weapons</a></li>
                    <li><a href="/">Potions</a></li>
                    <li><a href="/">Enchantments</a></li>
                </ul>
            </div>
            <CarWidget/>
        </div>        
    </header> 
  )
}

export default NavBar