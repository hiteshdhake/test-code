import React from 'react';
import EmployeeCard from '../../components/EmployeeCard'
import './styles.css';

const Dashboard = ({employees}) => <main>
    <div className={'employeeCardContainer'}>
        {employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
    </div>
</main>;

export default Dashboard