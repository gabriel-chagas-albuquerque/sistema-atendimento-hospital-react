import { useEffect, useState } from "react";

function PainelDoMedico() {
    const [fila, setFila] = useState([]);  
    const [pacienteAtual, setPacienteAtual] = useState(null);

    useEffect(() => {
        const filaSalva = JSON.parse(localStorage.getItem("filaDeAtendimento")) || [];
        const pacienteSalvo  = JSON.parse(localStorage.getItem("pacienteEmAtendimento")) || null;
        setFila(filaSalva);
        setPacienteAtual(pacienteSalvo);
    }, []);

    useEffect(() => {
        localStorage.setItem("filaDeAtendimento", JSON.stringify(fila));
    } , [fila]);

    return(
        <>
        </>
    );
}