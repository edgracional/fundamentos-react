/* 
    
    Criar um componente
    se for verdadeiro vai ser exibido e se for falsa nada será exibido
    <If test={aluno.nota >=7}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>

*/

export default props => {

    const elseChild = props.childrean.filter(child => {
        return child.type && child.type.name ==='Else'
    })[0]


    const ifChildrean = props.childrean.filter(child => {
        return child != elseChild
    }) 


    if(props.test) {
        return ifChildrean
    } else if (elseChild) {
       return elseChild
    } else {
        return false 
     }
 }


export const Else = props => props.childrean

