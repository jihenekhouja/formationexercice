
import { addTask, deleteTask, fetchTasks, updateTask } from '../../Service/tasks2.service';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash ,faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
function Formation() {

    const [tasks, settasks] = useState([])
    const [editTask, setEditTask] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    useEffect(() => {
        const fetchdata = () => {
             fetchTasks().then((response) => {
                const resultts = response
                settasks(resultts)
            }).catch(e => {  })
         }
        fetchdata()
     }, [])
     const handleAddTask = () => {
        setShowAddForm(true);
      };
      const handeleaddtask = (Values) => {
        console.log(Values)
        addTask(Values).then(response => { console.log(response) })
        settasks(tasks.concat(Values))

    }
    const handleUpdateTaskSubmit = (editTask,Values) => {
        console.log(Values);
        console.log(editTask);
     const newtask = updateTask(editTask, Values).then(response => { console.log(response) })

        const newtaskup = tasks.map(task => {
           if (task._id === editTask) { return { ...task, Values} }
           return task

         })



         settasks(newtaskup)
        setEditTask(null); 
      };

    const deletetas = (id) => {
        console.log(id)
        deleteTask(id).then(response => {
            console.log(response)
            settasks(element => element.filter(tasks => tasks._id !== id));
        })

    }

    const handleUpdate = (task) => {
        setEditTask(task);
        setShowAddForm(true); 
      };

  return ( 
<>
    <h1 className="text-center mb-4">Liste des formation</h1>
    <div className="container mt-5">
      
      <div className="mb-3">
        <button className="btn btn-primary" >
          <FontAwesomeIcon icon={faPlus} onClick={handleAddTask} className="me-2" />
          Add New Task
        </button>
      </div>



      <Modal show={showAddForm} onHide={() =>{
         setShowAddForm(false) ; 
        }}>
        <Modal.Header closeButton>
           <Modal.Title>{editTask ? 'Modifier formation' : 'Ajouter une nouvelle formation'}</Modal.Title>
        </Modal.Header>
        
        <Formik
      initialValues={{
        duration: editTask ? editTask.duration : '',
        title: editTask ? editTask.title : '',
      }}
      onSubmit={(values)=>editTask ? handleUpdateTaskSubmit(editTask._id,values) : handeleaddtask(values)}
    >
        
              <Form >
              <Modal.Body>
                <div className="form-group">
                  <label>Duration</label>
                  <Field
                    type="text"
                    name="duration"
                    className="form-control"
                    placeholder="duration"
                  />
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <Field
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="title"
                  />
                </div>
                </Modal.Body>
        <Modal.Footer>
             <Button variant="secondary" onClick={() => setShowAddForm(false)}>Annuler</Button> 
                <Button variant="primary"  type="submit" >Enregistrer</Button>
                </Modal.Footer>
              </Form>
              </Formik>
             
         
       
        
      </Modal>

    <table className="table table-bordered table-hover mx-auto" style={{width: "60%"}}> 
      <thead className="table-dark" >
        <tr>
        <th>title</th>
          
          <th>duration</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {tasks.map((item,index) => (
            <tr key={index}>
                  <td>{item.title}</td>
            
              <td>{item.duration}</td>
           
              <td>
                <button className="btn btn-sm btn-primary me-2">
                  <FontAwesomeIcon  onClick={() => handleUpdate(item)} icon={faEdit} />
                </button>
                <button onClick={() => deletetas(item._id)} className="btn btn-sm btn-danger" >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div> 

  </>
    
      
    
  );
}

export default Formation ;