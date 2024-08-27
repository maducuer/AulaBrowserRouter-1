import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import "../global.css";
export default function ListaProdutos({listaProdutos}){

    

const [listaPedidos, setListaPedidos] = useState([]);

const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
}

const removerPedido = (id) => {
    let remover= false;
    let listaAux = listaPedidos.filter((produto) =>{
        if (remover == false){
            if (produto.id !== id ){
                return produto
            }else{
                remover = true;
                return null
            }
        }else{
            return produto
        }
    });
    setListaPedidos(listaAux);
}

    return(
<>
        <Header titulo={"Vestidos"}/>
        <div>
            <h1>Coleções</h1>
        </div>
   

            {
              listaProdutos.map((produto) =>
              <div key={produto.id}> 
              <p id="nomeproduto">{produto.nome}</p>
              <img src={produto.imagem}/>
              <p> {produto.preco}</p>
              <p id="precoriscado">{produto.preco2}</p>
              <p>{produto.cor}</p>
              <p>{produto.tamanho}</p>
              <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
              </div>
              )
            }
{
    listaPedidos.map((produto)=>
        <div key={produto.id}>
            <p>{produto.nome}</p>
            <img src={produto.imagem}/>
            <p>{produto.preco}</p>
            <button onClick={()=> removerPedido(produto.id)}>Remover</button>
        </div>
    )
}


</>
    );
}