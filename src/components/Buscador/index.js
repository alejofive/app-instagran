import './index.css';
import { BsSearch } from "react-icons/bs";

function Buscador() {
    return (
        <div>
            <div className='buscador'>
                <div className='item-buscador'>
                    <input type="text" placeholder='Search' />
                </div>
                <a href="" className='icon-buscardor'>
                    <BsSearch />
                </a>
            </div>
        </div>
    );
}

export default Buscador;