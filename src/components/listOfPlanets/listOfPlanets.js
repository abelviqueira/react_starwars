import { useState, useEffect } from "react";
import * as API from "services/getPlanets";

export function ListOfPlanets() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        API.getPlanets().then(data => {
        setPlanets(data.results);
        setLoading(false);
        });
    }, []);
    
    return (
        <>
            <h2>List of Planets</h2>
            <ul className="listOfPlanets">
            {loading ? (
                <div>Loading...</div>
            ) : (
                planets.map(planet => (
                <li key={planet.id}>
                    <img src={planet.image} alt={planet.name} />
                    <p>{planet.name}</p>
                </li>
                ))
            )}
            </ul>
        </>
    );
}