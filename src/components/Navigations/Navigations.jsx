import { NavLink} from "react-router"
import css from './Navigations.module.css'
import clsx from 'clsx';

const getLinkStyles = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function AppHeader (){
    return (
        <header className={css.header}>
            <ul className={css.list}>
                <li className={css.listItem}>
                    <NavLink to="/" className={getLinkStyles}>Home</NavLink>
                </li>
                <li className={css.listItem}>
                    <NavLink to="/movies" className={getLinkStyles}>Movies</NavLink>
                </li>
            </ul>
        </header>
    )
}