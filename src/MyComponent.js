function MyComponent({calories, totalNutrients}) {
    return(<div>
        <div className="container">
        <h2>{calories.toFixed()}calories</h2>
        </div>
        <ul className="container list">
            {totalNutrients.map(par  => (
                <li>{par}</li> 
            ))}
        </ul>

    </div>)
}
export default MyComponent;