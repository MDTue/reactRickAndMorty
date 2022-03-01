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
            <h1> {props.name}</h1>
            <img src={props.image} alt="Bilder der Charaktere"/>
            <ul>
                 <li> location:{props.location.name}</li>
                <li> species:{props.species}</li>
                <li> status:{props.status}</li>
                <li> gender: {props.gender}</li>
            </ul>
        </div>
    )
}
