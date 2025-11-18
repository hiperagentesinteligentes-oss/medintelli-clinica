import { Link } from 'react-router-dom'
export default function Sidebar(){
 return(
   <div style={{width:200,background:'#e8f0ff',padding:20,height:'100vh'}}>
     <h3>MedIntelli</h3>
     <nav style={{display:'flex',flexDirection:'column',gap:10}}>
       <Link to='/'>Dashboard</Link>
       <Link to='/pacientes'>Pacientes</Link>
       <Link to='/agenda'>Agenda</Link>
       <Link to='/lista-espera'>Lista de Espera</Link>
       <Link to='/config'>Configurações</Link>
     </nav>
   </div>
 )
}
