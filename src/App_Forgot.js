import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom"; 


function App_Forgot() {
  return (
    <div className="App"> 
     <div className="container">

{/* <!-- Outer Row --> */}
<div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-1">
            <div className="card-body p-0">
              {/*   <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <img className="col-lg-5 d-none d-lg-block "src="assets/img/InstaYA_reg.jpg"/>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-2">¿Ha olvidado su contraseña</h1>
                                <p className="mb-4">Lo entendemos, cosas que pasan. 
                                    Introduce tu dirección de correo electrónico y 
                                    te enviaremos un enlace para restablecer tu contraseña.!</p>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Ingresa tu email..."/>
                                </div>
                                <a href="login.html" className="btn btn-primary btn-user btn-block">
                                    Reset Password
                                </a>
                            </form>
                            <hr/>                         
                                    
                                    <div className="text-center">
                                    <Link to="/App_Register" className="text-center">
                                    <a className="small">Crear cuenta!</a>
                                    </Link>
                                    </div>
                                    <div>
                                    <Link to="/" className="text-center">
                                    <a className="small">Ya tienes Cuenta? Login!</a>
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

export default App_Forgot;
