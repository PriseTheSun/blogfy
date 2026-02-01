import TopBar from '../TopBar';
import Navbar from './NavBar'; // mude para minúsculo

export default function Header() {
    return (
        <header className="relative w-full z-50">
            <TopBar />
            <Navbar />
        </header>
    );
}