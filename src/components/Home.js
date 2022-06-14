import React from 'react';

function Home() {

    const handleLogOut = () => {
      
    }

    return (
        <div className="p-4">
            <h1>Home!</h1>
            <div className="salto1px"></div>
            <button id="cmdSalir" name="cmdSalir" type="button" className="btn btn-danger" onClick={handleLogOut} style={{ borderRadius: '10px' }}>Salir</button>


        </div>
    );
};

export default Home;