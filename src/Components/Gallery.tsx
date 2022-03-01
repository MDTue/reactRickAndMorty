import CharacterCard from "./CharacterCard";
import {Character, Response as ResponseBody}  from './Model';
import {useEffect, useState} from "react";
import {getSystemErrorName} from "util";


export default function Gallery() {
    const[charName, setCharName] = useState([] as Array<Character>);
    const[search, setSearch] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
            if (response.status===200) {
                return response.json()
            }
            throw new Error('nicht gefunden')
        })
            .then((response: ResponseBody) => response.results)
            .then((data) => setCharName(data)   )
            .catch(e  => setErrorMessage(e.message))
    },[]);


return (<div>
    <input type ='text' placeholder= 'Rick&Morty Charakter' value={search} onChange={e=>setSearch(e.target.value)}/>
    <input data-testid="search-field" type='text' placeholder='Suchbegriff' value={search} onChange={ev=>setSearch(ev.target.value)}/>

       <div className="grid-container">
        {charName.filter(e=> e.name.toLowerCase().includes(search.toLowerCase()))
            .map(character => <div data-testid="gallery-item"  key={character.id}> < CharacterCard
            id = {character.id}
            name = {character.name}
            image = {character.image}
            location = {character.location}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            />   </div>)

        }
        </div>

    <div>{errorMessage}</div>
</div>)
}


