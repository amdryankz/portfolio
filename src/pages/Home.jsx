import About from "../components/About"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Portfolio from "../components/Portfolio"

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Portfolio />
            <About />
        </>
    )
}

export default Home