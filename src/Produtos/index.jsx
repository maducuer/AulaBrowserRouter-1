import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../global.css";
import ListaProdutos from "../components/ListarProdutos";

export default function Produtos() {

    
    <div>
            <h1>gernhfg</h1>

         

        </div>

    const [listaProdutos, setProdutos] = useState([
        {id: 16, nome: 'Vestido Classic',preco: 'R$ 359,00', cor: 'preto e branco', tamanho: 'P',
     imagem:"https://fiozato.com/cdn/shop/files/VestidoClassicFiozato01_1500x.png?v=1697645207"
    },
        {id: 17, nome: 'Vestido Pedraria', preco: 'R$ 257,00', cor: 'preto', tamanho: 'G',
    imagem:"https://fiozato.com/cdn/shop/files/VestidoPedrariaFiozato01_1500x.png?v=1700100975"
    },
        {id: 18, nome: 'Vestido Lux', preco: 'R$ 239,00', cor: 'branco', tamanho: 'GG',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoLuxFiozato01_1500x.png?v=1699073018"
    },
        {id: 19, nome: 'Top Party', preco: 'R$ 189,00', cor: 'preto', tamanho: 'M',
        imagem:"https://fiozato.com/cdn/shop/files/TopPartyFiozato01_1500x.png?v=1702953275"
    },
        {id: 20, nome: 'Short Saia Envelope',  preco: 'R$ 189,00', cor: 'roxo', tamanho: 'G',
        imagem:"https://fiozato.com/cdn/shop/files/ShortSaiaEnvelopeFiozato01_1500x.png?v=1695937156"
    },
    {id: 21, nome: 'Top Artistic',preco: 'R$ 229,00', cor: 'colorido', tamanho: 'G',
        imagem:"https://fiozato.com/cdn/shop/files/TopArtisticFiozato01_1500x.png?v=1716576131"
       },
           {id: 22, nome: 'Body Montmartre', preco: 'R$ 239,00', cor: 'azul', tamanho: 'M',
       imagem:"https://fiozato.com/cdn/shop/files/BodyMontmartreFiozato01_1500x.png?v=1718397969"
       },
           {id: 23, nome: 'Short Saia Hypnotic', preco: 'R$ 349,00', cor: 'verde', tamanho: 'M',
           imagem:"https://fiozato.com/cdn/shop/files/ShortSaiaHypnoticFiozato01_1500x.png?v=1722553211"
       },
           {id: 24, nome: 'Conjunto Grecia', preco: 'R$ 389,00', cor: 'azul e branco', tamanho: 'GG',
           imagem:"https://fiozato.com/cdn/shop/files/ConjuntoGreciaFiozato01_1500x.png?v=1701148836"
       },
           {id: 25, nome: 'Saia Explorer', preco: 'R$ 269,00', cor: 'cinza', tamanho: 'G',
           imagem:"https://fiozato.com/cdn/shop/files/SaiaExplorerFiozato01_1500x.png?v=1712181628"
       },
       {id: 26, nome: 'Vestido Spring',preco: 'R$ 259,00', cor: 'laranja', tamanho: 'P',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoSpringFiozato01_1500x.png?v=1710388222"
       },
           {id: 27, nome: 'Top Article', preco: 'R$ 389,00', cor: 'azul', tamanho: 'P',
       imagem:"https://fiozato.com/cdn/shop/files/TopArticleFiozato02_1500x.png?v=1716320356"
       },
           {id: 28, nome: 'Calça de Linho', preco: 'R$ 199,00', cor: 'branco', tamanho: 'P',
           imagem:"https://fiozato.com/cdn/shop/files/CalcaSoltaFiozato01_1500x.png?v=1712256529"
       },
           {id: 29, nome: 'Vestido Pérola', preco: 'R$ 279,00', cor: 'preto', tamanho: 'G',
           imagem:"https://fiozato.com/cdn/shop/files/VestidoPerolaFiozato01_1500x.png?v=1700717521"
       },
           {id: 30, nome: 'Corset String', preco: 'R$ 189,00', cor: 'pink', tamanho: 'M',
           imagem:"https://fiozato.com/cdn/shop/files/CorsetStringFiozato01_1500x.png?v=1716230123"
       }
    ]);

    return(
        <>
        <div className="navbar-header">
         <img src="https://yt3.googleusercontent.com/xhr88MZz-Dg7tB9WocCafRsN_ZNnclSPrzvK8KGpBAieaPGXY3kJRyjvNokrFDDXIhinS5EORQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>
</div>
        
<h1>Em Alta</h1>

        <ListaProdutos listaProdutos={listaProdutos} /> 

<Footer desenvolvedor={"© 2024, FIOZATO | CNPJ: 47.604.685/0001-49, Vlf Company Negocios Digitais LTDA"}/>
        </>
    );
}