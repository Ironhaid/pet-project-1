import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../context/context';
import MyButton from '../button/MyButton'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <>
            <div className='navbar'>
                <div className='navbar__links'>
                    <Link to='/about'>
                        <MyButton>
                            О сайте
                        </MyButton>
                    </Link>
                    <Link to='/posts'>
                        <MyButton>
                            Посты
                        </MyButton>
                    </Link>
                </div>
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar