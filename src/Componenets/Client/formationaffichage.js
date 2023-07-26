import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './filterclient';
import CardList from './cardlist';
import { useEffect, useState } from 'react';
import { fetchTasks } from '../../Service/tasks2.service';
import { Row } from 'react-bootstrap';
function Formationaffichage() {

  const [tasks, settasks] = useState()
  const [filter, setfilter] = useState([''])

  
  useEffect(() => {
    const fetchdata = () => {
      fetchTasks().then((response) => {
            const resultts = response
            settasks(resultts)
        }).catch(e => {  })
     }
    fetchdata()
 }, [])

 const handelfilter =(filter1)=>{
  setfilter([...filter,filter1])

 }
 console.log(filter)  

// const filteredTasks = tasks.filter((task) => {
//  const taskDuration = task.duration;
//  return (
//   filter.taskDuration >= parseInt(minDuration)
  // ||
  //  taskDuration <= parseInt(maxDuration) ||
  //  task.title.toLowerCase().includes(title.toLowerCase()) ||
  //  task.startDate.includes(startDate) ||
  //  (type === "" || task.types.includes(type))
//  );
// });


return (


 
  <div style={{ padding: "20px" }}>
  <Filter handelfilter={handelfilter} />
  {/* <CardList/> */}
  <Row className="card-list">
   {/* {filteredTasks.map((card,index) => (
        <Col key={index} md={4} style={{padding:"20px"}}>
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Card.Text>{card.duration}</Card.Text>
            <Card.Text>{card.type}</Card.Text>
            <Card.Text>{card.startDate}</Card.Text>
            <Button variant="primary">En savoir plus</Button>
          </Card.Body>
        </Card>
      </Col>
      ))} */}
  
  </Row>
</div>
);
};
export default Formationaffichage ;