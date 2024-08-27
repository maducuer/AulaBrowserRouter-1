import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../global.css";
import ListaProdutos from "../components/ListarProdutos";

export default function Ofertas( ){

    

    const [listaProdutos, setProdutos] = useState([
        {id: 6, nome: 'Vestido Grecia', preco2: ' De: R$369,99', preco: 'Para: R$484,00',
     imagem:"https://fiozato.com/cdn/shop/files/VestidoGreciaFiozato01_1500x.png?v=1700762598"
    },
        {id: 7, nome: 'Saia Candy',preco2: ' De: R$259,99', preco: 'Para: R$179,00',
    imagem:"https://fiozato.com/cdn/shop/files/SaiaCandyFiozato01_1500x.png?v=1696449936"
    },
        {id: 8, nome: 'Vestido Francês',preco2: ' De: R$209,00', preco: 'Para: R$197,00',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoFrancesFiozato01_1500x.png?v=1700753014"
    },
        {id: 9, nome: 'Saia Bright', preco2: ' De: R$229,99', preco: 'Para: R$184,00',
        imagem:"https://fiozato.com/cdn/shop/files/SaiaBrightFiozato01_1500x.png?v=1707372858"
    },
        {id: 10, nome: 'Vestido Espanha', preco2: ' De: R$389,99', preco: 'Para: R$224,00',
        imagem:"https://fiozato.com/cdn/shop/files/VestidoEspanhaFiozato01_1500x.png?v=1696736608"
    },
     {id: 11, nome: 'Vestido Grecia', preco2: ' De: R$369,99', preco: 'Para: R$484,00',
         imagem:"https://fiozato.com/cdn/shop/files/VestidoGreciaFiozato01_1500x.png?v=1700762598"
       },
           {id: 12, nome: 'Saia Candy',preco2: ' De: R$259,99', preco: 'Para: R$179,00',
       imagem:"https://fiozato.com/cdn/shop/files/SaiaCandyFiozato01_1500x.png?v=1696449936"
       },
           {id: 13, nome: 'Vestido Francês',preco2: ' De: R$209,00', preco: 'Para: R$197,00',
           imagem:"https://fiozato.com/cdn/shop/files/VestidoFrancesFiozato01_1500x.png?v=1700753014"
       },
           {id: 14, nome: 'Saia Bright', preco2: ' De: R$229,99', preco: 'Para: R$184,00',
           imagem:"https://fiozato.com/cdn/shop/files/SaiaBrightFiozato01_1500x.png?v=1707372858"
       },
           {id: 15, nome: 'Vestido Espanha', preco2: ' De: R$389,99', preco: 'Para: R$224,00',
           imagem:"https://fiozato.com/cdn/shop/files/VestidoEspanhaFiozato01_1500x.png?v=1696736608"
       }
    ]);



    return(
        <>
        

        <ListaProdutos listaProdutos={listaProdutos} /> 

<Footer desenvolvedor={"© 2024, FIOZATO | CNPJ: 47.604.685/0001-49, Vlf Company Negocios Digitais LTDA"}/>
        </>
    );
}
