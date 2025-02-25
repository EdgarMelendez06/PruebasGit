"use client";
import { useState } from "react";

const Asiento = ({ id, ocupado, seleccionarAsiento }) => {
    const [seleccionado, setSeleccionado] = useState(false);

    const handleClick = () => {
        if (!ocupado) {
            setSeleccionado(!seleccionado);
            seleccionarAsiento(id);
        }
    };

    return (
        <button
            className={`btn m-1 ${ocupado ? "btn-danger" : seleccionado ? "btn-warning" : "btn-success"}`}
            onClick={handleClick}
            disabled={ocupado}
        >
            {id}
        </button>
    );
};

export default Asiento;
