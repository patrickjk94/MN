import './InfoCard.css';

function InfoCard(props) {

    return (
        <div className="info-card">
            <p> Group: { props.group } </p>
            <p> Code: { props.code } </p>
            <p> Description: { props.description } </p>
            <p> Label: { props.label } </p>
            <p> Global: { props.global ? 'True' : 'False'} </p>
            <p> Revenue: { props.revenue ? 'True' : 'False'} </p>
        </div>
    );
}

export default InfoCard;