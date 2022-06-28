import { useFetch } from "../hooks/useFetch";

export const PageEmployees = () => {
  const { items: employees, itemTotal: totalEmployees } = useFetch(
    "http://localhost:4433/employees"
  );

  return (
    <div className="page_books">
      <h2>There are {totalEmployees} books.</h2>

      <ul>
        {employees.map((employee) => {
          return <li key={employee.employeeID}>{employee.lastName}</li>;
        })}
      </ul>
    </div>
  );
};
