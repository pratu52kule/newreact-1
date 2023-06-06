
import { useNavigate } from "react-router-dom";
const Navbar =() =>{
    const router = useNavigate();
    return(
        <div style={{display:'flex',justifyContent:"space-around",border:"5px solid red"}}>
            <div onClick={() =>router('/Mens')}>Men</div>
            <div onClick={() =>router('/Women')}>Women</div>
            <div onClick={() =>router('/Kids')}>Kids</div>
        </div>
    )

}
export default Navbar