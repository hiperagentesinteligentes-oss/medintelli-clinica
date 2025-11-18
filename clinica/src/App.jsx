import {Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Pacientes from './pages/Pacientes'
import PacienteDetalhe from './pages/PacienteDetalhe'
import Agenda from './pages/Agenda'
import ListaEspera from './pages/ListaEspera'
import Prontuario from './pages/Prontuario'
import Login from './pages/Login'
import Config from './pages/Config'

export default function App(){
 return(
   <div style={{display:'flex'}}>
     <Sidebar/>
     <div style={{flex:1,padding:20}}>
       <Routes>
         <Route path='/' element={<Dashboard/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/pacientes' element={<Pacientes/>}/>
         <Route path='/pacientes/:id' element={<PacienteDetalhe/>}/>
         <Route path='/agenda' element={<Agenda/>}/>
         <Route path='/lista-espera' element={<ListaEspera/>}/>
         <Route path='/prontuario/:id' element={<Prontuario/>}/>
         <Route path='/config' element={<Config/>}/>
       </Routes>
     </div>
   </div>
 )
}
