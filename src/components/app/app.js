import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpoyeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Andrii S.', salary: 800, increase: false, id: 1},
        {name: 'Arthur S.', salary: 3000, increase: true, id: 2},
        {name: 'Vika S.', salary: 5000, increase: false, id: 3}
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmpoyeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;