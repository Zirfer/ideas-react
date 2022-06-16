import { useState, lazy } from 'react';
import axios from 'axios';
import logoInicial from '../img/logoideasini.png'
import logoIdeas from '../img//logoIdeas.png'
import { FaUser, FaLock } from 'react-icons/fa';
const Loader = lazy(() => import('../sharedComponents/Loader'));

function Login() {
    const tipoDoc = ['CC', 'TI', 'NIT']
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [data, setData] = useState({
        txtid: '',
        txtclave: '',
        cbotipoid: 'CC'
    })

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async () => {
        // const config = {
        //     url: 'https://david.avellaneda.co/back/login.php',
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // };
        axios.post('http://david.avellaneda.co/back/login.php', data)
            .then(function (res) {
                console.log(res.data)
                //setData(...data, )
            })
    }

    return (
        <div>
            <Loader />
            <div id="container" className="container">
                <div className="content">
                    <div className="login-title">
                        <img className="login-logo" src={logoInicial} alt="" />
                        <h2>Sistema de Gesti&oacute;n de Control de Vuelos</h2>
                    </div>
                    <div className="salto1px"></div>
                    <div className="login-box">
                        <div className="login-box-body">
                            <form id="frmlogin" name="frmlogin" rel="noreferrer noopener" target="_blank">
                                <input name="paso" type="hidden" id="paso" value="0" />
                                <div className="login col-3">
                                    <select name="cbotipoid" id="cbotipoid" value={data.cbotipoid} className="form-control" onChange={handleInput}>
                                        {tipoDoc.map((tipo) =>
                                            <option key={tipo} value={tipo}>{tipo}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="login">
                                        <input id="txtid" name="txtid" type="text" className="login-input" value={data.txtid} maxLength="13" autoComplete="off" placeholder="Documento" onChange={handleInput} />
                                        <i>{<FaUser />}</i>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="login">
                                        <input id="txtclave" name="txtclave" type="password" className="login-input" value={data.txtclave} maxLength="50" autoComplete="off" placeholder="Contraseña" onChange={handleInput} />
                                        <i>{<FaLock />}</i>
                                    </div>
                                </div>
                                <div id="mensaje">
                                </div>
                                <button id="cmdIngresa" name="cmdIngresa" type="button" className="btn btn-primary" onClick={handleLogin} style={{ borderRadius: '10px' }}>Iniciar Sesion</button>
                                <div className="salto1px"></div>
                            </form>
                            <div className="ideas-logo">
                            </div>
                            <div className="ideas-logo">
                                <a href="http://www.ideasw.com" target="_blank" rel="noreferrer noopener" title="Ideas Software"><img src={logoIdeas} alt="Ideas Software Ltda." /></a>
                            </div>
                            <div className="salto5px"></div>
                            <div className="salto5px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
