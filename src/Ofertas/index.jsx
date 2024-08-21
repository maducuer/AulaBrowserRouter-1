import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Ofertas( ){

    
    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Nike', preco: 'R$200,00',
     imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKaU4BBr_eEHQ3jfzryvNqjkqubNZ5Mp_5Q&s"
    },
        {id: 2, nome: 'Olympikus', preco: 'R$300,00',
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3YggKNEHb2xe-Ndk3B2L6GzQZiXJNOgrBw&s"
    },
        {id: 3, nome: 'Adidas', preco: 'R$400,00',
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7LCxY3m8yJALlq2BgZrhf1KfUMGR-tlGXw&s"
    },
        {id: 4, nome: 'Fila', preco: 'R$500,00',
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6YqtttadSXB9t6yz6oVuBDPLyNKu7zeDIw&s"
    },
        {id: 5, nome: 'Jordan', preco: 'R$600,00',
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutNAuiCqn7heFJ8s9OvLS0O80sT5n6fDIvA&s"}
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
            <h1>Ofertas da semana</h1>

            {
              listaProdutos.map((produto) =>
              <div key={produto.id}> 
              <p>{produto.nome}</p>
              <img src={produto.imagem}></img>
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
    <img src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2024/OfertasDiarias/08-Agosto/2108/desk1.png"/>
</div>
<div>
   <img src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2024/OfertasDiarias/08-Agosto/2108/desk2.png"/>
</div>
<div>
    <img src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2024/OfertasDiarias/08-Agosto/2108/desk3.png"/>
</div>

        </Carousel>
        </>
    );
}
