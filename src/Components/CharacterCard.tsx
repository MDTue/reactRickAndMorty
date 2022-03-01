interface CharacterCardProps{
    id: number;
    name: string;
    image: string;
    location: { name: string };
    status: string;
    species: string;
    gender: string
    }
export default function CharacterCard(props : CharacterCardProps){

    return(
        <div >
            <div data-testid="the-name"><h1>{props.name}</h1></div>
            <div><img data-testid="character-image" src={props.image} alt="Bilder der Charaktere"/></div>
            <ul>
                 <li> location:{props.location.name}</li>
                <li> species:{props.species}</li>
                <li> status:{props.status}</li>
                <li> gender: {props.gender}</li>
            </ul>

        </div>
    )
}
