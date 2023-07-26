
import { addTask, deleteTask, fetchTasks, updateTask } from '../../Service/tasks2.service';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash ,faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {  Modal, Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { addUser, fetchuser } from '../../Service/user.service';
function Gestion() {

    const [tasks, settasks] = useState([])
    const [editTask, setEditTask] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    useEffect(() => {
        const fetchdata = () => {
            fetchuser().then((response) => {
                const resultts = response
                settasks(resultts)
            }).catch(e => {  })
         }
        fetchdata()
     }, [])
     const handleAddTask = () => {
        setShowAddForm(true);
      };
    
      const handeleaddUser = (Values) => {
        console.log(Values)
        addUser(Values).then(response => { console.log(response) })
        settasks(tasks.concat(Values))

    }


 

  return ( 
<>
    <h1 className="text-center mb-4">Liste des User</h1>
    <div className="container mt-5">
      
      <div className="mb-3">
        <button className="btn btn-primary" >
          <FontAwesomeIcon icon={faPlus} onClick={handleAddTask} className="me-2" />
          Add user
        </button>
      </div>



      < Modal show={showAddForm} onHide={() =>{
         setShowAddForm(false) ; 
        }}>
        < Modal.Header closeButton>
           < Modal.Title> Ajouter une nouvelle User</ Modal.Title>
        </ Modal.Header>
        
        <Formik
      initialValues={{
        name:  '',
        role:  '',
        email:  '',
        password:''
      }}
      onSubmit={handeleaddUser}
    >
        
              <Form >
              < Modal.Body>
                <div className="form-group">
                  <label>name</label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="name"
                  />
                </div>
                <div className="form-group">
                  <label>role</label>
                  <Field
                    type="text"
                    name="role"
                    className="form-control"
                    placeholder="role"
                  />
                </div>
                <div className="form-group">
                  <label>email</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <label>password</label>
                  <Field
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                </ Modal.Body>
        < Modal.Footer>
             <Button variant="secondary" onClick={() => setShowAddForm(false)}>Annuler</Button> 
                <Button variant="primary"  type="submit" >Enregistrer</Button>
                </ Modal.Footer>
              </Form>
              </Formik>
             
         
       
        
      </ Modal>

    <table className="table table-bordered table-hover mx-auto" style={{width: "60%"}}> 
      <thead className="table-dark" >
        <tr>
        <th>name</th>
          
          <th>role</th>
          <th>email</th>
        
        </tr>
      </thead>
      <tbody>
      {tasks.map((item,index) => (
            <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
              <td>{item.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div> 

  </>
    
      
    
  );
}

export default Gestion ;