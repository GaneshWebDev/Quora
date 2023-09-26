import './Navbar.css';
import { useNavigate} from 'react-router-dom';
function Navbar({fun}){
    let navigate = useNavigate();
    return(
        <>
                <div className="nav">
                        <div className="colm logo"><a className="navbar-brand"><i className='fab fa-quora'></i><span>uora</span></a></div>
                        <div className="colm"><i className="fa-solid fa-house icon" onClick={() => navigate('/')}></i></div>
                        <div className="colm"><i className="fa-regular fa-rectangle-list icon"></i></div>
                        <div className="colm"><i className="fa-solid fa-pen-to-square icon"></i></div>
                        <div className="colm"><i className="fa-solid fa-people-group icon"></i></div>
                        <div className="colm"><i className="fa-solid fa-bell icon"  onClick={() => navigate('/notification')} ></i></div>
                        <div className="colm searchDiv"><i className="fa-solid fa-magnifying-glass searchIcon"></i><input className="search" type='search' placeholder="     Search"/></div>
                        <div className='colm'><i class="fa-solid fa-user iconProfile"></i></div>
                        <div className='colm addQuestion'><button className='add' onClick={()=>fun(true,'add')} >Add question</button><i class="fa-solid fa-caret-down create"></i></div>
                </div>
        </>
    )
}
export default Navbar;