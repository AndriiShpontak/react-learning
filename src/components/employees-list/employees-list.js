import EmployyesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmpoyeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployyesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)} 
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpoyeesList;