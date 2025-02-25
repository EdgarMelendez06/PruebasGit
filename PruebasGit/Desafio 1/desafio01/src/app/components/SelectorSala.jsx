"use client";

const SelectorSala = ({ cambiarSala }) => {
    return (
        <div className="text-center my-3">
            <button className="btn btn-primary mx-2" onClick={() => cambiarSala(1)}>
                Sala 1
            </button>
            <button className="btn btn-primary mx-2" onClick={() => cambiarSala(2)}>
                Sala 2
            </button>
        </div>
    );
};

export default SelectorSala;
