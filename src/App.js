import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <div class="container">       
        {/* <!-- Outer Row --> */}
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-2">
                    <div class="card-body p-1">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div class="row">                          
                            <img  src="assets/img/Delivery.png" />
                            {/* <!--<div class="col-lg-6 d-none d-lg-block bg-login-image"></div>--> */}
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Iniciar sesión!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="user" aria-describedby="emailHelp"
                                                placeholder="Ingrese su usuario..."/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="password" placeholder="Contraseña"/>
                                        </div>
                                        <div class="form-group">
                                            
                                        </div>
                                        <Link to="/App_Manager" >
                                    <a className="btn btn-primary btn-user btn-block">Login</a>
                                    </Link>
                                        
                                      
                                    </form>
                                    <hr/>
                                    <div>
                                    <Link to="/App_Forgot" className="text-center">
                                    <a class="small">Recordar Contraseña?</a>
                                    </Link>
                                    </div>

                                    <div>
                                    <Link to="/App_Register" className="text-center">
                                    <a class="small">Crear cuenta!</a>
                                    </Link>
                                    </div>
                                   
                                    
                                       
                                   
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>



 

     

    </div>
  );
}

export default App;
