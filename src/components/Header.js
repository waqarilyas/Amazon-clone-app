import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from "react-router-dom"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateManagment/StateProvider'
import { auth } from '../firebase'
import './Header.css'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue()

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }


    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'SignOut' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_shoppingBasket">
                        <ShoppingBasketIcon className="header_optionBasket" />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
