import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';

const CajaBuscador = (props) => {

    const [state, setState] = useState({
        producto: ""
    })

    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    const ButStyling = { width: "2rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    const img = <img src="https://http2.mlstatic.com/ui/navigation/4.5.0/mercadolibre/logo__large_plus@2x.png" alt="Mercado Libre" />;
    const Mercadolibreurl = "https://developers.mercadolibre.com.ar/es_ar";

    const { handleSearch } = props

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (

        <nav className="uk-navbar-container uk-margin navBar">
            <div className="uk-navbar-left navBar">

                <a className="uk-navbar-item uk-logo" href={Mercadolibreurl}>{img}</a>
                <input
                    style={BarStyling}
                    name="producto"
                    id="producto"
                    placeholder={"Nunca dejes de buscar"}
                    onChange={handleInputChange}
                    value={state.producto}
                />
                <button style={ButStyling} onClick={() => handleSearch(state.producto)} >
                    <i className="pi pi-search" style={{ 'fontSize': '1em' }}></i>
                </button>
            </div>
        </nav>
    );
}

CajaBuscador.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default CajaBuscador;