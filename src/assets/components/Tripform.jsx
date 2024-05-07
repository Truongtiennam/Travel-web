import "./TripStyle.css";

function TripForm(props){

    return(
        <div className="t-card">
            <div className="t-img">
                <img src={props.image} alt={props.heading} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default TripForm;