import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {

    const[atividade, setAtiviades] = useState("");
    const[lista, setLista] = useState([]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            atividade
        }])
    }

    return (
        <div>
            <h1>Lista de Atividades</h1>
            <Link to="/">home</Link>

        <p>{atividade}</p>

            <form onSubmit={salvar}>

                <input value ={atividade}
                    onChange={(e)=> setAtividade(e.target.value)} />

                <button>ADD</button>
            </form>
           
           {lista.map((ativ)=> <p>{ativ.atividade}</p>)}
           
        </div>
    );
}