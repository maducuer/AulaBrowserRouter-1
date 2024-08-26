import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../global.css";
import ListaProdutos from "../components/ListarProdutos";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Ofertas( ){

    
    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Vestido Grecia', preco2: ' De: R$369,99', preco: 'Para: R$484,00',
     imagem:"https://fiozato.com/cdn/shop/files/VestidoGreciaFiozato01_1500x.png?v=1700762598"
    },
        {id: 2, nome: 'Saia Candy',preco2: ' De: R$259,99', preco: 'Para: R$179,00',
    imagem:"https://fiozato.com/cdn/shop/files/SaiaCandyFiozato01_1500x.png?v=1696449936"
    },
        {id: 3, nome: 'Vestido Francês',preco2: ' De: R$209,00', preco: 'Para: R$197,00',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoFrancesFiozato01_1500x.png?v=1700753014"
    },
        {id: 4, nome: 'Saia Bright', preco2: ' De: R$229,99', preco: 'Para: R$184,00',
        imagem:"https://fiozato.com/cdn/shop/files/SaiaBrightFiozato01_1500x.png?v=1707372858"
    },
        {id: 5, nome: 'Vestido Espanha', preco2: ' De: R$389,99', preco: 'Para: R$224,00',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoEspanhaFiozato01_1500x.png?v=1696736608"
    }
    ]);



    return(
        <>
        <Header/>
        
    <div>
            <h1>Ofertas da semana</h1>

          
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

        <ListaProdutos listaProdutos={listaProdutos} /> 
        </>
    );
}
