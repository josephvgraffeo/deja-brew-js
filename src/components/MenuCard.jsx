export default function MenuCard({coffee}) {
    return (
        <div className="coffee-card">
            <img src={coffee.image} alt={coffee.title}/>
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>
        </div>
    );
};