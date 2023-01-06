import { useState } from "react";



const Animals = () => {

    const [animals, setAnimals] = useState(['Dog', 'Lion', 'Bird', 'Fish']);

    const [filter, setFilter] = useState("");

    const [newAnimal, setNewAnimal] = useState("");



    const onChangeFilterHandler = (event) => {

        setFilter(event.target.value);

    };



    const onChangeAnimalHandler = (event) => {

        setNewAnimal(event.target.value);

    };



    const handleAnimalAdd = (event) => {

        event.preventDefault();

        if (!newAnimal) return

        setAnimals([...animals, newAnimal]);

        setNewAnimal('');

    }



    return <>

        <h1 className="title">My animals</h1>

        

        <div>

            <input

                type="input"

                name="filter"

                value={filter}

                placeholder='Filter'

                onChange={onChangeFilterHandler}

            />

        </div>



        <ul className="animals-list">

            { animals

                .filter((animal => animal.toLowerCase().startsWith(filter.toLowerCase())))

                .map(animal => <li key={`list-${animal}`}>{animal}</li>)

            }

        </ul>



        <form onSubmit={handleAnimalAdd}>

            <label>Add a animal</label>

            <input

                type="test"

                name="animal"

                value={newAnimal}

                placeholder='Name of you animal'

                onChange={onChangeAnimalHandler}

            />

                <input type="submit" value="Add" disabled={!newAnimal} />

        </form>

    </>

}

export default Animals;