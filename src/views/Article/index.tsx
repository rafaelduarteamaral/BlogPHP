import React, { useEffect, useState } from 'react';
import { Container, BoxPost, TextPost, TextArticle } from './styles';
import img_post from './../../assets/img_post.png';
import Header from '../../components/Header';
import api from '../../services/api';


const Article: React.FC = (props:any) => {
  const [article, setArticle] = useState<any>({});

  async function getArticle() {
    await api.get(`articles/${props.match.params.id}`).then(response => {
      setArticle(response.data[0]);
    });
  }

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <Container>
      <Header />
      <BoxPost>
        <img src={img_post} alt='Post'/>
        <TextPost>
          <h1>{article.title}</h1>
          <p>Conheça as novas features no PHP 8.</p>
        </TextPost>
      </BoxPost>

      <TextArticle>
        {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus eu arcu molestie congue. Cras convallis lectus et magna hendrerit, vel facilisis enim interdum. Morbi consectetur urna dapibus libero laoreet eleifend in sit amet magna. Integer magna sapien, semper vitae ex sit amet, dignissim egestas sapien. Pellentesque porta lorem sed lacus scelerisque, nec auctor orci luctus. Morbi facilisis, sem eget lacinia maximus, nisl quam aliquet nisl, a ultricies justo leo ac libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit tincidunt placerat. Donec vitae erat in leo dictum sagittis. Nullam at placerat mi. Sed vel arcu magna. Ut mollis eget mauris quis dignissim.
        Mauris scelerisque tellus id augue tristique, aliquet venenatis erat vulputate. Fusce eget turpis risus. Duis interdum nunc non elit efficitur sollicitudin eu at velit. Nam scelerisque sed lorem ac eleifend. Praesent porttitor sapien pretium nibh consequat pulvinar. Proin venenatis est ut erat euismod, quis feugiat leo aliquet. Praesent laoreet dolor tellus, sit amet mollis ligula euismod consequat. Mauris viverra ligula nisi, quis dignissim enim facilisis a.
        </p>

        <pre>
          <code class='code-php'>
            <span class='dev-code comment'>Preenchendo dois zeros no começo da string</span><br/>
            <span class='dev-code keyword'>const</span> filme <span class='dev-code operator'>=</span> <span class='dev-code string'>'7'</span><span class='dev-code punctuation'>;</span> <br/>
            <span class='dev-code comment'>007 - Sem Tempo Para Morrer</span><br/>
            <span class='dev-code comment'>Adivinhando o nome</span><br/>
            <span class='dev-code keyword'>const</span> nome <span class='dev-code operator'>=</span> <span class='dev-code string'>'Thiago'</span> <span class='dev-code comment'>Nome para adivinhar.</span><br/>
            <span class='dev-code keyword'>const</span> ultimaLetraDoNome <span class='dev-code operator'>=</span> nome<span class='dev-code punctuation'>.</span><span class='dev-code function'>slice</span><span class='dev-code punctuation'>(</span>nome<span class='dev-code punctuation'>.</span>length <span class='dev-code operator'>-</span> <span class='dev-code number'>1</span><span class='dev-code punctuation'>)</span><br/>
            <span class='dev-code comment'>'Uma dica: Termina com 'o', e tem 6 letras'</span><br/>
            <span class='dev-code keyword'>let</span> adivinheMeuNome <span class='dev-code operator'>=</span> ultimaLetraDoNome<span class='dev-code punctuation'>.</span><span class='dev-code function'>padStart</span><span class='dev-code punctuation'>(</span>nome<span class='dev-code punctuation'>.</span>length<span class='dev-code punctuation'>,</span> <span class='dev-code string'>'*'</span><span class='dev-code punctuation'>)</span><span class='dev-code punctuation'>;</span> <br/>
            <span class='dev-code comment'>Escondendo alguns dígitos do cartão de crédito</span><br/>
            <span class='dev-code keyword'>const</span> cartaoDeCredito <span class='dev-code operator'>=</span> <span class='dev-code string'>'2034399002125581'</span><span class='dev-code punctuation'>;</span><br/>
            <span class='dev-code keyword'>const</span> ultimosQuatroDigitos <span class='dev-code operator'>=</span> cartaoDeCredito<span class='dev-code punctuation'>.</span><span class='dev-code function'>slice</span><span class='dev-code punctuation'>(</span><span class='dev-code operator'>-</span><span class='dev-code number'>4</span><span class='dev-code punctuation'>)</span><span class='dev-code punctuation'>;</span><br/><br/>
            <span class='dev-code keyword'>const</span> cartaoDeCreditoMask <span class='dev-code operator'>=</span> ultimosQuatroDigitos<span class='dev-code punctuation'>.</span><span class='dev-code function'>padStart</span><span class='dev-code punctuation'>(</span>cartaoDeCredito<span class='dev-code punctuation'>.</span>length<span class='dev-code punctuation'>,</span> <span class='dev-code string'>'*'</span><span class='dev-code punctuation'>)</span><span class='dev-code punctuation'>;</span><br/>
            <span class='dev-code comment'>Resultado: '************5581'</span>
          </code>
        </pre>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus eu arcu molestie congue. Cras convallis lectus et magna hendrerit, vel facilisis enim interdum. Morbi consectetur urna dapibus libero laoreet eleifend in sit amet magna. Integer magna sapien, semper vitae ex sit amet, dignissim egestas sapien. Pellentesque porta lorem sed lacus scelerisque, nec auctor orci luctus. Morbi facilisis, sem eget lacinia maximus, nisl quam aliquet nisl, a ultricies justo leo ac libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit tincidunt placerat. Donec vitae erat in leo dictum sagittis. Nullam at placerat mi. Sed vel arcu magna. Ut mollis eget mauris quis dignissim.
        Mauris scelerisque tellus id augue tristique, aliquet venenatis erat vulputate. Fusce eget turpis risus. Duis interdum nunc non elit efficitur sollicitudin eu at velit. Nam scelerisque sed lorem ac eleifend. Praesent porttitor sapien pretium nibh consequat pulvinar. Proin venenatis est ut erat euismod, quis feugiat leo aliquet. Praesent laoreet dolor tellus, sit amet mollis ligula euismod consequat. Mauris viverra ligula nisi, quis dignissim enim facilisis a.
        </p> */}

        <div className='codeBlock' dangerouslySetInnerHTML={{__html: article.text}} />

        
      </TextArticle>
    </Container>
  );
}

export default Article;