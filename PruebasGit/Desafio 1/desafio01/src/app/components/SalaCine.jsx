"use client";
import Asiento from "./Asiento";

const SalaCine = ({ asientos, seleccionarAsiento }) => {
    return (
        <div className="text-center">
            <h3>Sala de Cine</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {asientos.map((asiento) => (
                    <Asiento key={asiento.id} id={asiento.id} ocupado={asiento.ocupado} seleccionarAsiento={seleccionarAsiento} />
                ))}
            </div>
        </div>
    );
};

export default SalaCine;
