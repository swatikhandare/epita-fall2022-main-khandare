export const App =({name, age}) =>{
    return<div>
        <h1>Hello {name}</h1>
        {age > 12? "I go to college":"I wont"}
    </div>

}

export const Animals =() =>{

   let animals = "Dog";
    return<ul>
        {animals.map(animals => <li>{animal}</li>)}
    </ul>

}