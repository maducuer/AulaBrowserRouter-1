import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Produtos() {

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
        <Header titulo={"Volêi"}/>
        
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
    <img src="https://pittol.vteximg.com.br/arquivos/ids/334681-330-457/3023768-1.jpg?v=638279878964200000"/>
</div>
<div>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQWedLR9yUnaZuVjBog1OZuRndf6kPAIieA&s"/>
</div>
<div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisn6YDjrs1jBqLzeVOsv_zhk38eLKoVrZVw&s"/>
</div>
<div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQga4PIRl8FNVt2l-N8QrSxC3YJElP9GkjFbA&s"/>
</div>

        </Carousel>
        </>
    );
}