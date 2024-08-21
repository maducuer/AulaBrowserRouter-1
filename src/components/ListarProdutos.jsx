import Header from "./Header";
import Footer from "./Footer";

export default function listaProdutos(){

    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Tênis Nike Air Max Impact 3', preco: 'R$200,00'},
        {id: 2, nome: 'Tênis de Basquete Under Armour Curry 10 SPK', preco: 'R$300,00'},
        {id: 3, nome: 'Tênis Nike Fly by Mid 3', preco: 'R$400,00'},
        {id: 4, nome: 'Tênis Basquete Under Armour Curry', preco: 'R$500,00'},
        {id: 5, nome: 'Tênis Nike Masculino Kyrie 7 ', preco: 'R$600,00'},
        {id: 6, nome: 'Tênis Basquete Nike Elevate 3', preco: 'R$200,00'},
        {id: 7, nome: 'Tênis Nike Kd Trey 5 X', preco: 'R$300,00'},
        {id: 8, nome: 'Tênis Basquete Nike Flyby Mid 3', preco: 'R$400,00'},
        {id: 9, nome: 'Tênis De Basquete Cano Alto Grafitado ', preco: 'R$500,00'},
        {id: 10, nome: 'Tênis Basquete Impact Six Street ', preco: 'R$600,00'},
        {id: 11, nome: 'Tênis Basquete Zoom Freak 4', preco: 'R$200,00'},
        {id: 12, nome: 'Tênis Nike Giannis Immortality', preco: 'R$300,00'},
        {id: 13, nome: 'Tênis Under Armour Jet 21 ', preco: 'R$400,00'},
        {id: 14, nome: 'Tênis Charge Six Street', preco: 'R$500,00'},
        {id: 15, nome: 'Tênis Lebron Witness VII', preco: 'R$600,00'}
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
        <Header titulo={"Tênis Esportivos"}/>
        
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
        
</>
    );
}