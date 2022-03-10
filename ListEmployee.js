import React, { useState,useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link} from 'react-router-dom'
const ListEmployee = () => {

   const [employees, setEmployees] = useState([])

   useEffect(() => { 
          getAllEmployees()
    
   }, [])
const getAllEmployees = () =>{
    EmployeeService.getAllEmployees().then((res) => {
        setEmployees(res.data)
        console.log(res.data)
    }).catch(error=>{
        console.log(error)
    }) 
}

   const deleteHandler = (empId) =>{
          
        EmployeeService.deleteEmployee(empId).then((res)=>{
            getAllEmployees()
        }).catch(error=>{
            console.log(error)
        })
      
   }
  return (
    <div className='container'>
        <h2 className='text-center'>
            List Employees
        </h2>
        <Link to ="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={()=>deleteHandler(employee.id)} style={{marginLeft:"12px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee