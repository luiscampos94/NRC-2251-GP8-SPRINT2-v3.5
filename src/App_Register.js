import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom"; 


function App_Register() {
  return (
    <div className="App"> 
     <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-1">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <img className="col-lg-5 d-none d-lg-block "src="assets/img/InstaYA_reg.jpg"/>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Crear Cuenta!</h1>
                            </div>
                            <form className="user">
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="name"
                                            placeholder="Nombre"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="lastname"
                                            placeholder="Apellido"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="email"
                                        placeholder="Correo Electronico "/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="password" placeholder="Contraseña"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="Password2" placeholder="Repita Contraseña"/>
                                    </div>
                                </div>
                                <hr className="sidebar-divider"/>
                                <Link to="/" >
                                    <a className="btn btn-primary btn-user btn-block"> Registrar Cuenta!</a>
                                </Link> 
                                <Link to="/App_forgot" >
                                    <a className="small">Olvidaste la Contraseña?</a>
                                </Link> 
                                                                
                            </form>
                           
                          
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
      

    </div>
  );
}

export default App_Register;
