"use client";
import { useState } from "react";
import SalaCine from "./components/SalaCine";
import SelectorSala from "./components/SelectorSala";
import ResumenCompra from "./components/ResumenCompra";

export default function Home() {
    const [sala, setSala] = useState(1);
    const [asientos, setAsientos] = useState({
        1: Array.from({ length: 10 }, (_, i) => ({ id: i + 1, ocupado: Math.random() < 0.3 })),
        2: Array.from({ length: 10 }, (_, i) => ({ id: i + 1, ocupado: Math.random() < 0.3 })),
    });

    const [seleccionados, setSeleccionados] = useState([]);

    const seleccionarAsiento = (id) => {
        setSeleccionados((prev) =>
            prev.includes(id) ? prev.filter((asiento) => asiento !== id) : [...prev, id]
        );
    };

    return (
        <div>
            <h1 className="text-center my-4">Venta de Boletos</h1>
            <SelectorSala cambiarSala={setSala} />
            <SalaCine asientos={asientos[sala]} seleccionarAsiento={seleccionarAsiento} />
            <ResumenCompra seleccionados={seleccionados} />
        </div>
    );
}
