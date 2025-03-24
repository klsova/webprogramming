import axios from 'axios';


const getAll = () => {
  return axios.get('http://localhost:3001/persons')
}

const create = (newPerson) => {
  return axios.post('http://localhost:3001/persons', newPerson)
}

const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`)
}


export default {
  getAll,
  create,
  delete: deletePerson
}