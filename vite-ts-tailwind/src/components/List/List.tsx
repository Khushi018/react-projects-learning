export default function List() {
    // sconst fruits = ["apple", "Banana"];
    const fruits2 = [
         {name : "apple", calory : 22},
         {name : "Banana", calory : 23}
        ];

    const items  = fruits2.map((i)=> <li>{i.name}+ {i.calory}</li>  )
    return (
        <ul>{items}</ul>
    );

}