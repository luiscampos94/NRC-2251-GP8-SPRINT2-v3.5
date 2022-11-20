import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom"; 


function App_Manager() {
  return (
    <div className="App"> 
        
    <div id="wrapper">
         {/* <!-- Page Wrapper -->*/}

        {/* <!-- Sidebar -->*/}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand -->*/}
            <Link to="/App_Manager" >
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <img src="assets/img/Logo.png"/>
                <div className="sidebar-brand-text mx-3"> </div>
            </a>
                
            </Link>
            {/* <!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active">
            <Link to="/App_Manager" >
                <a className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
            </Link>                
            </li>

            {/* <!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading -->*/}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
            <Link to="/App_Create" >
                <a className="nav-link">Crear Orden</a>
            </Link> 
            <Link to="/App_Consulta" >
                <a className="nav-link">Colsutar orden-temporal</a>
            </Link>             
                    
               

               
                
            </li>

           
            {/* <!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading -->*/}
           
            

            {/* <!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
             
                <a className="nav-link" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>   
                
            </li>

            
            
            {/* <!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* <!-- Sidebar Toggler (Sidebar) -->*/}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            
        </ul>

        {/* <!-- End of Sidebar -->*/}

        {/* <!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content -->*/}
            <div id="content">

                {/* <!-- Topbar -->*/}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">RESUMEN DE ÓRDENES GENERADAS</h1>
                 
                    </div>

                   
                       
                   

                </nav>
                {/* <!-- End of Topbar -->*/}

                {/* <!-- Begin Page Content -->*/}
                <div className="container-fluid">

                    {/* <!-- Page Heading -->*/}
                    <div className="Row">
                    <Link to="/App_Create" >
                    <a className="btn btn-primary btn-user btn-block">Crear Orden</a>
                    </Link>    
                       
                    </div>


                    {/* <!-- TABLA CONTENIDO -->*/}

                    
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>#Orden</th>
                                        <th>Fecha</th>
                                        <th>Ciudad/Entrega</th>
                                        <th>Direccion/Entrega</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>#Orden</th>
                                        <th>Fecha</th>
                                        <th>Ciudad/Entrega</th>
                                        <th>Direccion/Entrega</th>
                                        <th>Estado</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>AA-000001</td>
                                        <td>25/10/2022</td>
                                        <td>Barranquilla</td>
                                        <td>CRA 44 N74-66</td>
                                        <td>Cumplido</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>AB-012345</td>
                                        <td>29/10/2022</td>
                                        <td>Guacoche</td>
                                        <td>CL1 N2-13</td>
                                        <td>Cumplido</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>AC-100005</td>
                                        <td>2/12/2022</td>
                                        <td>Bogota</td>
                                        <td>CLL30 N45-9</td>
                                        <td>Guardado</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>AC-960031</td>
                                        <td>5/12/2022</td>
                                        <td>Bogota</td>
                                        <td>CRA30 CL57</td>
                                        <td>Guardado</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>AC-960256</td>
                                        <td>5/12/2022</td>
                                        <td>Valledupar</td>
                                        <td>CL16 CRA9</td>
                                        <td>Cancelado</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>AP-005678</td>
                                        <td>7/12/2022</td>
                                        <td>Caracoli</td>
                                        <td>KM5 Caracoli</td>
                                        <td>Guardado</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>AP-005695</td>
                                        <td>7/12/2022</td>
                                        <td>Barranquilla</td>
                                        <td>CR34 CLL72</td>
                                        <td>Guardado</td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    

            </div>
            {/* <!-- End of Main Content -->*/}



        </div>
        {/* <!-- End of Content Wrapper -->*/}

    </div>
    {/* <!-- End of Page Wrapper -->*/}

    {/* <!-- Scroll to Top Button-->*/}
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
        <div className="modal-footer"> <Link to="/" className="text-center">
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

export default App_Manager;
