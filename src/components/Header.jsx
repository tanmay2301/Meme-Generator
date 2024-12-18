import Trollface from "../assets/Troll Face.png" 

function Header(){
    return(
        <>
            <header className="meme-header">
                <img src={Trollface} alt="meme" className="meme-logo" />
                <h1>Meme Generator</h1>
            </header>
   
        </>
    )
}

export default Header;