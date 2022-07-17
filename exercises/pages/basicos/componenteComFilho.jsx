import Lista from "../../components/Lista"
import Item from "../../components/Item"

export default function componenteComFilho(){
    return (
       <Lista>
           <Item conteudo="item 1"></Item>
           <Item conteudo="item 2"></Item>
           <Item conteudo="item 3"></Item>
       </Lista>
    )
}