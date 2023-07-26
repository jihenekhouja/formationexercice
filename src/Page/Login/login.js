import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../../Service/tasks2.service';
import { useDispatch } from "react-redux";

import { Formik, Field, Form } from 'formik';
import { login1 } from '../../Componenets/redux-toolkit/reducers/tasks.reducers';
function Login() {
  const dispatche = useDispatch()
    const handelelogin=(values)=>{
        // login(values).then(res=>{console.log(res)
        //  localStorage.setItem("token",res)
        //  window.location="/"
        // })
        // console.log(values)
        dispatche(login1(values))
      
        }
  return ( 
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Connexion</h3>
            <Formik
      initialValues={{
        password: '',
        email:''
       
      }}
     onSubmit={handelelogin}
    >
            <Form >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                <Field
                  type="text"
                  className="form-control"
                  id="username"
                  name="email"
           
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Se connecter</button>
              </div>
              </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login ;