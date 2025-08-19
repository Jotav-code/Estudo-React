import React from 'react';
import Produtos from './Produtos/Produtos';

const App = () => {
  const [contar, setContar] = React.useState(0);

  function handlClick(event) {
    setContar(contar + 1);
  }

  /*
   *Dessa forma ele vai sendo executado sempre que redenriza a função, para por para ele executar somente uma vez, colocamos o segundo parametro com "[]", Ou ainda mais, se quisermos atualizar ele de acordo com o contar, passamos ele como parametro entre parenteses, isso se chama "Depêndencia" quer dizer que o useEfect depende de tal variavel, ou seja, estamos dizendo o seguinte, se tal variável mudar, execute esse bloco
   */

  React.useEffect(() => {
    document.title = 'titulo ' + contar;
  }, [contar]);

  /*
   * Partindo para outro exemplo
   */

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
    setLoading(false);
    console.log('passou');
  }, []);

  /*
   * O recomendado é usar efeitos com o hook Efect, para evitar de chamar o mesmo efeito várias vezes, primeiro o jeito 'errado'
   */

  const [produtos, setProdutos] = React.useState(false);

  function click() {
    setProdutos(!produtos);
  }
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button onClick={handlClick}>{contar}</button>
      {loading && 'Carregando'}
      <h1>{dados && dados.nome}</h1>
      <p>{dados && dados.preco * contar}</p>

      <button onClick={click}>{produtos ? 'Ativado' : 'Desativado'}</button>

      {produtos && <Produtos />}
    </>
  );
};

export default App;
