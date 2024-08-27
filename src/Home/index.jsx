import {useState} from "react";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaProdutos from "../components/ListarProdutos";
import "../global.css";

export default function Home() {

    
    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Vestido Caribe', preco: 'R$389,99', cor: 'laranja', tamanho: 'G',
     imagem:"https://fiozato.com/cdn/shop/files/VestidoCaribeFiozato01.png?v=1701975381"
    },
        {id: 2, nome: 'Vestido Espanha Verano',preco: 'R$ 387,00', cor: 'vermelho', tamanho: 'GG',
    imagem:"https://fiozato.com/cdn/shop/files/VestidoEspanhaVeranoFiozato01_1500x.png?v=1696524736"
    },
        {id: 3, nome: 'Vestido Lonely',preco: ' R$269,00', cor: 'preto', tamanho: 'M',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoLonelyFiozato01_1500x.png?v=1697669749"
    },
        {id: 4, nome: 'Vestido Água de Coco', preco: ' R$419,99', cor: 'azul', tamanho: 'P',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoMintFiozato01_1500x.png?v=1705187073"
    },
        {id: 5, nome: 'Vestido Swan', preco: ' R$229,99', cor: 'preto', tamanho: 'G',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoSwanFiozato01_1500x.png?v=1697668318"
    }
    ]);


    return(
        <>
       
        
    <div className="navbar-header">
        <img src="https://yt3.googleusercontent.com/xhr88MZz-Dg7tB9WocCafRsN_ZNnclSPrzvK8KGpBAieaPGXY3kJRyjvNokrFDDXIhinS5EORQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>
           

     
        <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        >

<div>
    <img src="https://fiozato.com/cdn/shop/files/bwinter02pc_1.png?v=1722877341&width=1400"/>
</div>
<div>
   <img src="https://marketplace.canva.com/EAGH4TduVaQ/1/0/1600w/canva-banner-moda-feminina-loja-online-nova-cole%C3%A7%C3%A3o-elegante-8RB5bpSapWc.jpg"/>
</div>

        </Carousel>


        </div>
        <ListaProdutos listaProdutos={listaProdutos} />   
        
<Footer desenvolvedor={"© 2024, FIOZATO | CNPJ: 47.604.685/0001-49, Vlf Company Negocios Digitais LTDA"}/>

      </>
    );
}