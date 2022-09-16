import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', lable: 'All empoyees', colored: false},
        {name: 'rise', lable: 'For salary rise', colored: false},
        {name: 'moreThen1000', lable: 'With salary more then 1000$', colored: false}
    ];

    const buttons = buttonsData.map(({name, lable, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? {color: 'red'} : null;
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
                    {lable}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;