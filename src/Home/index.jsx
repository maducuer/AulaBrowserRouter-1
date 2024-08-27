import {useState} from "react";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaProdutos from "../components/ListarProdutos";
import "../global.css";

export default function Home() {

    
    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Vestido Grecia', preco2: '  R$369,99', 
     imagem:""
    },
        {id: 2, nome: 'Saia Candy',preco: ' R$259,99', 
    imagem:""
    },
        {id: 3, nome: 'Vestido Francês',preco: ' R$209,00', 
        imagem:""
    },
        {id: 4, nome: 'Saia Bright', preco: ' R$229,99', 
        imagem:""
    },
        {id: 5, nome: 'Vestido Espanha', preco: ' R$389,99',
        imagem:""
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
   <img src=""/>
</div>

        </Carousel>


        </div>
        <ListaProdutos listaProdutos={listaProdutos} />   
        
<Footer desenvolvedor={"© 2024, FIOZATO | CNPJ: 47.604.685/0001-49, Vlf Company Negocios Digitais LTDA"}/>

      </>
    );
}