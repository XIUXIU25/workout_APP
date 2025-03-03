import { Link } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>
                        <FitnessCenterIcon /> Workout Buddy
                    </h1>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
