import React, { Component } from 'react';
import axios from 'axios';

const DepartmentContext = React.createContext();

export const DepartmentConsumer = DepartmentContext.Consumer;

class DepartmentProvider extends Component {
    state = { departments: [] }

    componentDidMount(){
        axios.get('/api/departments')
        .then( res => {
            this.setState({ departments: res.data })
        })
        .catch( err => {
            console.log(err)
        })
    }


addDepartment = (department) => {
    axios.post('/api/departments', {department})
    .then( res => {
        const { departments } = this.state
        this.setState({ departments: [...departments, res.data] })
    })
    .catch( err => {
        console.log(err)
    })
}

updateDepartment = (id, department) => {
    axios.put(`/api/departments/${id}`, { department } )
    .then( res => {
        const departments = this.state.departments.map( i => {
            if (i.id === id)
                return res.data
            return i
        })
        this.setState({ departments })
    })
    .catch( err => {
        console.log(err)
      })
  }

  deleteDepartment = (id) => {
      axios.delete(`/api/department/${id}`)
      .then( res => {
          const { departments } = this.state
          this.setState({ department: departments.filter( i => i.id !== id) }) 
      })
  }

render() {
    return(
        <DepartmentContext.Provider value={{
            ...this.state,
            addDepartment: this.addDepartment,
            updateDepartment: this.updateDepartment,
            deleteDepartment: this.deleteDepartment
        }}>
        {this.props.children}
        </DepartmentContext.Provider>
    )
}
}

export default DepartmentProvider;
