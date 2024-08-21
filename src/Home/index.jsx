import {useState} from "react";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Nike', preco: 'R$200,00'},
        {id: 2, nome: 'Olympikus', preco: 'R$300,00'},
        {id: 3, nome: 'Adidas', preco: 'R$400,00'},
        {id: 4, nome: 'Fila', preco: 'R$500,00'},
        {id: 5, nome: 'Jordan', preco: 'R$600,00'}
    ]);

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
        <Header/>
        
    <div>
            <h1>Tênis Esportivos</h1>

            {
              listaProdutos.map((produto) =>
              <div key={produto.id}> 
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
              <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
              </div>
              )
            }
{
    listaPedidos.map((produto)=>
        <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <button onClick={()=> removerPedido(produto.id)}>Remover</button>
        </div>
    )
}
</div>
<Footer desenvolvedor={"Madu"}/>
        
        <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        >

<div>
    <img src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2024/CentauroVC/Prim/deskp.png"/>
</div>
<div>
   <img src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2024/CentauroVC/Prim/nike2-desk.png"/>
</div>

        </Carousel>
        </>
    );
}