import React from 'react';

const DetalleProducto = ({ prodDetalle = [] }) => {


    return (
        <div>
            {" "}
            {/*
            <h2>{prodDetalle.title}</h2>
            <img src={d.seller.home_image_url} className="img-responsive" alt="" />{" "}
            <h3>{d.address.city_name + d.address.state_name}</h3>
            <h2>Descripcion del producto</h2>
            <p>{prodDetalle.plain_text}</p>*/}
            <h2>Descripcion del producto</h2>
            <p>{prodDetalle.plain_text}</p>
            <button >
                Comprar
            </button>
        </div>
    );
}

export default DetalleProducto;