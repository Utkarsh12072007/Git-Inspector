import react from "react";
import { useState } from "react";
import Hero from "./components/Hero";
import SearchEngine from "./components/SearchEngine";
let app = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleExploreClick = () => {
        window.scrollTo({ top: 900, behavior: 'smooth' });
        setShowSearch(true);
    };
    return (
        <>
            <Hero onExploreClick={handleExploreClick} />
            <SearchEngine />
        </>
    );
}

export default app;