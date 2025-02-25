"use client";

const ResumenCompra = ({ seleccionados }) => {
    return (
        <div className="text-center my-3">
            <h4>Resumen de Compra</h4>
            <p>Asientos seleccionados: {seleccionados.length}</p>
            <p>Total: ${seleccionados.length * 10}</p>
        </div>
    );
};

export default ResumenCompra;
