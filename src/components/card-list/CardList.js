import './CardList.css';
import InfoCard from './InfoCard';

function CardList(props) {

    const getRows = (data) => {
        return data.map(element => {
            return (
                <InfoCard 
                    group={element['Group']}
                    code={element['Code']}
                    global={element['Global']}
                    revenue={element['Revenue']}
                    description={element['Description']}
                    label={element['Label']} 
                /> 
            )
        });
    }

    return (
        <table className="card-list">
            {getRows(props.data)}
        </table>
    );
}

export default CardList;