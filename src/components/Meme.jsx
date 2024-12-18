import { useState } from "react"
import { useEffect } from "react"

function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }) 

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
            
        }))
            
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

   
    return(
        <>
            <main>
                <h3>Hello, Create your own hilarious memes with ease. Click to generate a random meme image, then add your own top and bottom text to make it truly unique and funny!!</h3>
                <div className="form">
                    <label htmlFor="top-text">Enter Top text</label>
                    <input 
                        type="text" 
                        placeholder="top text" 
                        className="form-input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <label htmlFor="bottom-text">Enter Bottom text</label>
                    <input  
                        type="text" 
                        placeholder="bottom text" 
                        className="form-input" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button onClick={getMemeImage} className="form-button" >GENERATE NEW MEME IMAGE</button>
                </div>
                <div className="meme">
                    <img className="meme--image" src={meme.randomImage} alt="meme" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>



            </main>
           
        </>
    )
}

export default Meme;