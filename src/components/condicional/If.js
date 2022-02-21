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
    if(props.test){
        return props.childrean
    } else{
       return false 
    }
}