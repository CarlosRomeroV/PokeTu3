
import { ChangeEvent, useEffect, useState } from "react"



export default function GuessGame() {

    const BASE_POKEAPI = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokeIndex, setPokeIndex]= useState<number>()
    const [imgUrl, setImgUrl] = useState(`${BASE_POKEAPI}${pokeIndex}/sprites/front_default`);
    const [correctName, setCorrectName] = useState<string|null>(null)
    const [introducedName, setIntroducedName] = useState<string>('')
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [round, setRound] = useState(1)
    const [randomSpecial, setRandomSpecial] = useState<string|null>(null)
    const [brightness, setBrightness] = useState('')
    const rotation = ['', 'rotate-10', 'rotate-20', 'rotate-30', 'rotate-40', 'rotate-50', 'rotate-60', 'rotate-70', 'rotate-80', 'rotate-90', 'rotate-100', 'rotate-110', 'rotate-120', 'rotate-130', 'rotate-140', 'rotate-150', 'rotate-160', 'rotate-170', 'rotate-180', 'rotate-190', 'rotate-200', 'rotate-210', 'rotate-220', 'rotate-230', 'rotate-240', 'rotate-250', 'rotate-260', 'rotate-270', 'rotate-280', 'rotate-290', 'rotate-300', 'rotate-310', 'rotate-320', 'rotate-330', 'rotate-340', 'rotate-350', 'rotate-360'];

    useEffect(()=>{
        changePokemon()
    },[])


    const guess = async ()=>{
      setBrightness('brightness-100')

      if (introducedName==correctName) {
        
        setScore(score+1)
        setRound(round+1)
        if (score+1>bestScore) {setBestScore(score+1)}
        setTimeout(() => setRandomSpecial(rotation[Math.floor(Math.random() * rotation.length)+1]), 1000)

        
        }else{
          setScore(0)
          setRound(0)
        } await setTimeout(() => changePokemon().then(()=>{setIntroducedName(''); setBrightness('brightness-0')}), 1000)
        
    }

    const handleChangeName = (e:ChangeEvent<HTMLInputElement>)=>{
      setIntroducedName(e.target.value);
    }

    //cambia la imagen, el index, y el nombre del Pokemon
    const changePokemon = async () => {
      const random = Math.floor(Math.random() * 1100) + 1;
  
      try {
          const response = await fetch(`${BASE_POKEAPI}${random}`);
          const data = await response.json();
          const sprite = data.sprites.front_default;
          setBrightness('brightness-0')
  
          if (sprite) { 
              setPokeIndex(random)
              setImgUrl(sprite)
              setCorrectName(data.name.split('-')[0])
              
          }
      } catch (error) {
          console.error(error);
      }
    };

  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={imgUrl} alt="Pokémon" className={`transition-opacity transition-transform duration-100 w-full hover:scale-110 mb-6 brightness-0  size-80  ${randomSpecial} ${brightness}`} draggable='false'></img>
            <input value={introducedName} name="introducedName" onChange={handleChangeName} className="text-black bg-white text-2xl p-3 rounded-2xl text-center"></input><br/><br/>
            <button onClick={changePokemon} className="text-xl cursor-pointer bg-gradient-to-r from-blue-300 to-blue-400 p-4 px-6 rounded-2xl mb-6 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700" >Cambiar imagen</button><br/>
            <button id="guessButton" onClick={guess} className="text-xl cursor-pointer bg-gradient-to-r from-blue-300 to-blue-400 p-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700">Adivinar</button><br/><br/><br/>
            <h1 className="text-white">Puntuación: {score}</h1>
            <h1 className="text-white">Récord: {bestScore}</h1>

            <div>{correctName}</div>
        </div>
    </>
  )
}
