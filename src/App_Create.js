import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom"; 


function App_Create() {
  return (
    <div className="App">  
     {/* <!-- Page Wrapper -->*/}
    <div id="wrapper">

        {/* <!-- Sidebar -->*/}
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand -->*/}
            <Link to="/App_Manager" >
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <img src="assets/img/Logo.png"/>
                <div className="sidebar-brand-text mx-3"> </div>
            </a>
                
            </Link>
            
            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
            <Link to="/App_Manager" >
                <a className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
            </Link>
            </li>
            {/* <!-- Divider -->*/}
            <hr class="sidebar-divider"/>

            {/* <!-- Heading -->*/}
            <div class="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu -->*/}
            <li class="nav-item">                
            <Link to="/App_Consulta" >
                <a className="nav-link">Consultar Orden</a>
            </Link>
            </li>

           
            {/* <!-- Divider -->*/}
            <hr class="sidebar-divider"/>

            {/* <!-- Heading -->*/}
           
            

            {/* <!-- Nav Item - Pages Collapse Menu -->*/}
            <li class="nav-item">
             
                <a class="nav-link" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>   
                
            </li>

            
            
            {/* <!-- Divider -->*/}
            <hr class="sidebar-divider d-none d-md-block"/>

            {/* <!-- Sidebar Toggler (Sidebar) -->*/}
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            
        </ul>
        {/* <!-- End of Sidebar -->*/}

        {/* <!-- Content Wrapper -->*/}
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content -->*/}
            <div id="content">

                {/* <!-- Topbar -->*/}
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Gestion de Paquetes- Registro de Ordenes</h1>
                    
                </div>                      

                </nav>
                {/* <!-- End of Topbar -->*/}

                {/* <!-- Begin Page Content -->*/}
                <div class="container-fluid">

                    {/* <!-- Page Heading -->*/}
                   

                    {/* <!-- TABLA CONTENIDO -->*/}
                    
{/* <!-- General Form Elements -->*/}
<form class="user">
    <div class="form-group row">
        <div class="row mb-1 col-sm-6 mb-3 ">
            <label for="inputDate" class="col-sm-2 col-form-label">Fecha</label>
            <div class="col-sm-10">
              <input type="date" class="form-control"/>
            </div>
          </div>
          <div class="row mb-1 col-sm-6 mb-3 ">
            <label for="inputTime" class="col-sm-2 col-form-label">Hora</label>
            <div class="col-sm-10">
              <input type="time" class="form-control"/>
            </div>
          </div>
    </div>
    <div class="form-group row">
        <div class="row mb-3">
            <label for="inputText" class="col-sm-2 col-form-label">Largo</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputText" class="col-sm-2 col-form-label">Ancho</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputText" class="col-sm-2 col-form-label">Alto</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputText" class="col-sm-2 col-form-label">Peso</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"/>
            </div>
          </div>

    </div>

    <hr class="sidebar-divider d-none d-md-block"/>
    <div class="row mb-3">
      <legend class="col-form-label col-sm-2 pt-0">La Mercancia es Delicada:</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                      <label class="form-check-label" for="gridRadios1">
                        Si
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                      <label class="form-check-label" for="gridRadios2">
                        No
                      </label>
                    </div>
                   
                  </div>

    </div>
 
    
 
    <hr class="sidebar-divider d-none d-md-block"/>

    <div class="row mb-3">
      <label for="inputText" class="col-sm-2 col-form-label">Nombre Remitente</label>
      <div class="col-sm-10">
        <input type="text" class="form-control"/>
      </div>
    </div>

  
  <div class="row mb-3">
    <label for="inputNumber" class="col-sm-2 col-form-label">Cedula/NIt Remitente</label>
    <div class="col-sm-10">
      <input type="number" class="form-control"/>
    </div>
  </div>
    
    
    <div class="row mb-3">
      <label for="inputText" class="col-sm-2 col-form-label">Direccion de Recogida</label>
      <div class="col-sm-10">
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="row mb-3">
        <label for="inputText" class="col-sm-2 col-form-label">Ciudad de Recogida</label>
        <div class="col-sm-10">
          <input type="text" class="form-control"/>
        </div>
      </div>
      <hr class="sidebar-divider d-none d-md-block"/>
 
      <div class="row mb-3">
        <label for="inputText" class="col-sm-2 col-form-label">Nombre Destinatario</label>
        <div class="col-sm-10">
          <input type="text" class="form-control"/>
        </div>
      </div>

    
    <div class="row mb-3">
      <label for="inputNumber" class="col-sm-2 col-form-label">Cedula/NIt Destinatario</label>
      <div class="col-sm-10">
        <input type="number" class="form-control"/>
      </div>
    </div>
    <div class="row mb-3">
        <label for="inputText" class="col-sm-2 col-form-label">Direccion de Entrega</label>
        <div class="col-sm-10">
          <input type="text" class="form-control"/>
        </div>
      </div>
      <div class="row mb-3">
          <label for="inputText" class="col-sm-2 col-form-label">Ciudad de Entrega</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"/>
          </div>
        </div>
    <div>
      
      <div >
      <Link to="/App_Create" >
                <a className="btn btn-primary btn-user btn-block">Crear Orden</a>
            </Link>              
                    
            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div className="modal-dialog" role="document">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Listo para salir?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>

        <div className="modal-body">Seleccione "Logout" si desea finalizar la sesión.</div>
        <div className="modal-footer"> 
            <Link to="/App_Register" className="text-center">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button> 
                <a className="btn btn-primary">Logout</a>
            </Link></div>
        </div>
</div>
</div>

        
      </div>
    </div>

  </form>{/* <!-- End General Form Elements -->*/}
                    
                   
                    

            </div>
            {/* <!-- End of Main Content -->*/}

            

        </div>
        {/* <!-- End of Content Wrapper -->*/}

    </div>
    {/* <!-- End of Page Wrapper -->*/}

    {/* <!-- Scroll to Top Button-->*/}
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>       
    
    </div>
    </div>
    
    
  );
}

export default App_Create;
