import React, { useState } from 'react';
import CajaBuscador from './CajaBuscador';
import ResultadoBusqueda from './ResultadoBusqueda';
import DetalleProducto from './DetalleProducto';

const PaginaPrincipal = () => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [mostrarLista, setMostrarLista] = useState(true);
    const [prodList, setProdList] = useState();
    const [prodDetalle, setProdDetalle] = useState();



    const handleSearch = async (e) => {
        let prodSearch = e;
        return await fetch(`http://localhost:3000/api/items?q=:${prodSearch}`)
            .then(response => response.json())
            .then(data => {
                let items = data.entity.items.slice(0, 4);
                setProdList(items)
                setMostrarDetalle(data.entity === false)
                setMostrarLista(true)
            });
    }

    const handleDetalle = async (e) => {
        let idProd = e;
        return await fetch(`http://localhost:3000/api/items/${idProd}/descriptions`)
            .then(response => response.json())
            .then(data => {
                let item = data.entity.item;
                setProdDetalle(item)
                setMostrarDetalle(data.entity === "" ? false : true)
                setMostrarLista(false)
            });
    }



    return (
        <>
            <CajaBuscador
                handleSearch={handleSearch}
            />
            {mostrarLista ?
                <ResultadoBusqueda
                    prodList={prodList}
                    handleDetalle={handleDetalle}
                />
                : null
            }
            {mostrarDetalle ?
                <DetalleProducto
                    prodDetalle={prodDetalle}
                />
                : null
            }
        </>
    );
}


export default PaginaPrincipal