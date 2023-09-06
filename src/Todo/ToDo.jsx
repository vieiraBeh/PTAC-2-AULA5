import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {

    const[atividade, setAtividade] = useState("");
    const[lista, setLista] = useState([]);
    const[id,setId] = useState(1);
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            atividade: atividade,
            id: id
        }]);
        setId(id+1);
    };

    const remover = (id) => {
        const auxLista  = [];
        lista.map ((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });

        setLista(auxLista);
        
    }

    return(
        <div class = "container">
            <h1>Lista de Atividades</h1>
            <Link to="/">home</Link>
            <p>{atividade}</p>
            <form onSubmit={salvar}>
                <input type="text" onChange={(e)=>{setAtividade(e.target.value)}}></input>
                <button>ADD</button>
                <button>Remover</button>
            </form> 
            {lista.map((ativ)=>
            <div key={ativ.id}>
                <p>{ativ.atividade}</p>
            </div>
            )}     
        </div>

    );
}