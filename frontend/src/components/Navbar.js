import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [, setLanguage] = useState(i18n.language);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'zh', label: '中文' }
    ];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => {
            setLanguage(lang);  // Force re-render
        });
    };

    const {logout}=useLogout()
    const {user}=useAuthContext()


    const handleClick=()=>{
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/" className="navbar-title">
                    <h1>
                        <FitnessCenterIcon /> {t('navbar.title')}
                    </h1>
                </Link>
                <LanguageSwitcher languages={languages} changeLanguage={changeLanguage} />
                <nav>
                    {user && (
                        <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    )}
                    {!user && (
                        <div>
                        <Link to="/login">Login</Link>
                        <Link to="/Signup">Signup</Link>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

const LanguageSwitcher = ({ languages, changeLanguage }) => {
    return (
        <div className="language-switcher">
            {languages.map(({ code, label }) => (
                <button key={code} onClick={() => changeLanguage(code)}>
                    {label}
                </button>
            ))}
        </div>
    );
};

export default Navbar;