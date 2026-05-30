// union |

type userRole = 'admin' | 'user' | 'guest';

const getDashboard = (role:userRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    } 
    else if (role === 'user'){
        return 'user Dashboard';
    }
    else{
        return 'guest Dashboard';
    }
}

getDashboard('admin');


// intersection &

type Employee = {
    id: string;
    name: string;
    phone: string;
};

type Manager ={
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: 'E001',
    name: 'Chowdhury Shaheb',
    phone: '01712345678',
    designation: 'Project Manager',
    teamSize: 10,
}