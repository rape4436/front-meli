
import React from 'react';

const ResultadoBusqueda = ({ prodList = [], handleDetalle }) => {

    return (
        <>
            { prodList.map((d, index) => {
                if (d) {
                    return (

                        <div key={d.id}>
                            <div
                                key={`${d.title}-${index}`}
                                className="col-xs-12 col-md-4"
                            >
                                {" "}
                                <h2>{d.title}</h2>
                                <img src={d.seller.home_image_url} className="img-responsive" alt="" />{" "}
                                <h3>{d.address.city_name + d.address.state_name}</h3>
                                <p>{d.price}</p>
                                <button onClick={() => handleDetalle(d.id)} >
                                    Detalle
                                </button>
                            </div>
                        </div>
                    )
                }
                return null
            })}
        </>
    );
}


export default ResultadoBusqueda;