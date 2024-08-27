import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../global.css";
import ListaProdutos from "../components/ListarProdutos";

export default function Ofertas( ){

    

    const [listaProdutos, setProdutos] = useState([
        {id: 6, nome: 'Vestido Grecia', preco2: ' De: R$369,99', preco: 'Para: R$484,00', cor: 'azul e branco', tamanho: 'G',
     imagem:"https://fiozato.com/cdn/shop/files/VestidoGreciaFiozato01_1500x.png?v=1700762598"
    },
        {id: 7, nome: 'Saia Candy',preco2: ' De: R$259,99', preco: 'Para: R$179,00', cor: 'pink', tamanho: 'M',
    imagem:"https://fiozato.com/cdn/shop/files/SaiaCandyFiozato01_1500x.png?v=1696449936"
    },
        {id: 8, nome: 'Vestido Francês',preco2: ' De: R$209,00', preco: 'Para: R$197,00', cor: 'verde', tamanho: 'P',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoFrancesFiozato01_1500x.png?v=1700753014"
    },
        {id: 9, nome: 'Saia Bright', preco2: ' De: R$229,99', preco: 'Para: R$184,00', cor: 'branco', tamanho: 'M',
        imagem:"https://fiozato.com/cdn/shop/files/SaiaBrightFiozato01_1500x.png?v=1707372858"
    },
        {id: 10, nome: 'Vestido Espanha', preco2: ' De: R$389,99', preco: 'Para: R$224,00', cor: 'vermelho', tamanho: 'G',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoEspanhaFiozato01_1500x.png?v=1696736608"
    },
     {id: 11, nome: 'Top Naval', preco2: ' De: R$219,99', preco: 'Para: R$124,00',  cor: 'azul', tamanho: 'P',
         imagem:"https://fiozato.com/cdn/shop/files/TopNavalFiozato01_1500x.png?v=1710466671"
       },
           {id: 12, nome: 'Vestido Jaipur',preco2: ' De: R$219,99', preco: 'Para: R$129,00',  cor: 'laranja e pink', tamanho: 'G',
       imagem:"https://fiozato.com/cdn/shop/files/VestidoJaipurFiozato01_1500x.png?v=1695664482"
       },
           {id: 13, nome: 'Vestido Diana',preco2: ' De: R$379,00', preco: 'Para: R347,00',  cor: 'verde', tamanho: 'M',
           imagem:"https://fiozato.com/cdn/shop/files/VestidoDianaFiozato01_1500x.png?v=1700524869"
       },
           {id: 14, nome: 'Conjunto Tropical', preco2: ' De: R$299,99', preco: 'Para: R$214,00',  cor: 'verde e branco', tamanho: 'P',
           imagem:"https://fiozato.com/cdn/shop/files/ConjuntoTropicalFiozato01_1500x.png?v=1698863497"
       },
           {id: 15, nome: 'Calça Victorious', preco2: ' De: R$222,99', preco: 'Para: R$124,00',  cor: 'cinza', tamanho: 'G',
           imagem:"https://fiozato.com/cdn/shop/files/CalcaVictoriousFiozato01_1500x.png?v=1710183955"
       }
    ]);



    return(
        <>
        
         <div className="navbar-header">
         <img src="https://yt3.googleusercontent.com/xhr88MZz-Dg7tB9WocCafRsN_ZNnclSPrzvK8KGpBAieaPGXY3kJRyjvNokrFDDXIhinS5EORQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>
</div>

<h1>Ofertas</h1>

        <ListaProdutos listaProdutos={listaProdutos} /> 


<Footer desenvolvedor={"© 2024, FIOZATO | CNPJ: 47.604.685/0001-49, Vlf Company Negocios Digitais LTDA"}/>

        </>
    );
}
