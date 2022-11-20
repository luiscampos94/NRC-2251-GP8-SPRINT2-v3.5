import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom"; 


function App_Consulta() {
  return (
    <div className="App"> 
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">

        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
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
            

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">                
            <Link to="/App_Create" >
                <a className="nav-link">Crear Orden</a>
            </Link>
            </li>

           
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
           
            

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
             
                <a className="nav-link" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>   
                
            </li>

            
            
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Gestion de Paquetes- Actualizacion de Ordenes</h1>
                        
                    </div>

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>            
                 
                       
                

                </nav>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    

                    {/* <!-- TABLA CONTENIDO --> */}
                    
{/* <!-- General Form Elements --> */}
<form className="user">
    <div className="form-group row">
        <div className="row mb-1 col-sm-6 mb-3 ">
            <label for="inputDate" className="col-sm-2 col-form-label">Fecha</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" disabled/>
            </div>
          </div>
          <div className="row mb-1 col-sm-6 mb-3 ">
            <label for="inputTime" className="col-sm-2 col-form-label">Hora</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" disabled/>
            </div>
          </div>
    </div>
    <div className="form-group row">
        <div className="row mb-3">
            <label for="inputText" className="col-sm-2 col-form-label">Largo</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputText" className="col-sm-2 col-form-label">Ancho</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputText" className="col-sm-2 col-form-label">Alto</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" disabled/>
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputText" className="col-sm-2 col-form-label">Peso</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" disabled/>
            </div>
          </div>

    </div>
    <hr className="sidebar-divider d-none d-md-block"/>
 
    <div className="text-center">
      <div className="row mb-3">
        <label className="col-sm-1 col-form-label">Estado</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" disabled/>
        </div>
    </div>       
    </div>
 
    <hr className="sidebar-divider d-none d-md-block"/>
    <div className="row mb-3">
      <label for="inputText" className="col-sm-2 col-form-label">Nombre Remitente</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" disabled/>
      </div>
    </div>

  
  <div className="row mb-3">
    <label for="inputNumber" className="col-sm-2 col-form-label">Cedula/NIt Remitente</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" disabled/> 
    </div>
  </div>
    
    <div className="row mb-3">
      <label for="inputText" className="col-sm-2 col-form-label">Direccion de Recogida</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" disabled/>
      </div>
    </div>
    <div className="row mb-3">
        <label for="inputText" className="col-sm-2 col-form-label">Ciudad de Recogida</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" disabled/>
        </div>
      </div>
      <hr className="sidebar-divider d-none d-md-block"/>
      <div className="row mb-3">
        <label for="inputText" className="col-sm-2 col-form-label">Nombre Destinatario</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" disabled/>
        </div>
      </div>

    
    <div className="row mb-3">
      <label for="inputNumber" className="col-sm-2 col-form-label">Cedula/NIt Destinatario</label>
      <div className="col-sm-10">
        <input type="number" className="form-control" disabled/> 
      </div>
    </div>
    <div className="row mb-3">
        <label for="inputText" className="col-sm-2 col-form-label">Direccion de Entraga</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  disabled/>
        </div>
      </div>
      <div className="row mb-3">
          <label for="inputText" className="col-sm-2 col-form-label">Ciudad de Entrega</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" disabled/>
          </div>
        </div>
    <div>
      
      <div >
        <button type="submit" className="btn btn-primary btn-user btn-block">Actualizar Orden</button>
      </div>
    </div>

  </form>{/* <!-- End General Form Elements --> */}
                    
                   
                    

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            
        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>


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
    
   
    
  );
}

export default App_Consulta;
