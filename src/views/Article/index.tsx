import React from 'react';

import { Container, BoxPost, TextPost, TextArticle, TextCode } from './styles';
import img_post from './../../assets/img_post.png';
import Header from '../../components/Header';

const Article: React.FC = () => {
  return (
    <Container>
      <Header />
      <BoxPost>
        <img src={img_post} alt="Post"/>
        <TextPost>
          <h1>PHP8 - Novas features no PHP.</h1>
          <p>Conheça as novas features no PHP 8.</p>
        </TextPost>
      </BoxPost>

      <TextArticle>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus eu arcu molestie congue. Cras convallis lectus et magna hendrerit, vel facilisis enim interdum. Morbi consectetur urna dapibus libero laoreet eleifend in sit amet magna. Integer magna sapien, semper vitae ex sit amet, dignissim egestas sapien. Pellentesque porta lorem sed lacus scelerisque, nec auctor orci luctus. Morbi facilisis, sem eget lacinia maximus, nisl quam aliquet nisl, a ultricies justo leo ac libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit tincidunt placerat. Donec vitae erat in leo dictum sagittis. Nullam at placerat mi. Sed vel arcu magna. Ut mollis eget mauris quis dignissim.
        Mauris scelerisque tellus id augue tristique, aliquet venenatis erat vulputate. Fusce eget turpis risus. Duis interdum nunc non elit efficitur sollicitudin eu at velit. Nam scelerisque sed lorem ac eleifend. Praesent porttitor sapien pretium nibh consequat pulvinar. Proin venenatis est ut erat euismod, quis feugiat leo aliquet. Praesent laoreet dolor tellus, sit amet mollis ligula euismod consequat. Mauris viverra ligula nisi, quis dignissim enim facilisis a.
        </p>

        <TextCode>
          <code className=" code-php">
            <span className="dev-code comment">// Preenchendo dois zeros no começo da string</span><br/>
            <span className="dev-code keyword">const</span> filme <span className="dev-code operator">=</span> <span className="dev-code string">'7'</span><span className="dev-code punctuation">;</span> <br/>
            <span className="dev-code comment">// 007 - Sem Tempo Para Morrer</span><br/>
            <span className="dev-code comment">// Adivinhando o nome</span><br/>
            <span className="dev-code keyword">const</span> nome <span className="dev-code operator">=</span> <span className="dev-code string">"Thiago"</span> <span className="dev-code comment">// Nome para adivinhar.</span><br/>
            <span className="dev-code keyword">const</span> ultimaLetraDoNome <span className="dev-code operator">=</span> nome<span className="dev-code punctuation">.</span><span className="dev-code function">slice</span><span className="dev-code punctuation">(</span>nome<span className="dev-code punctuation">.</span>length <span className="dev-code operator">-</span> <span className="dev-code number">1</span><span className="dev-code punctuation">)</span><br/>
            <span className="dev-code comment">// "Uma dica: Termina com 'o', e tem 6 letras"</span><br/>
            <span className="dev-code keyword">let</span> adivinheMeuNome <span className="dev-code operator">=</span> ultimaLetraDoNome<span className="dev-code punctuation">.</span><span className="dev-code function">padStart</span><span className="dev-code punctuation">(</span>nome<span className="dev-code punctuation">.</span>length<span className="dev-code punctuation">,</span> <span className="dev-code string">'*'</span><span className="dev-code punctuation">)</span><span className="dev-code punctuation">;</span> <br/>
            <span className="dev-code comment">// Escondendo alguns dígitos do cartão de crédito</span><br/>
            <span className="dev-code keyword">const</span> cartaoDeCredito <span className="dev-code operator">=</span> <span className="dev-code string">'2034399002125581'</span><span className="dev-code punctuation">;</span><br/>
            <span className="dev-code keyword">const</span> ultimosQuatroDigitos <span className="dev-code operator">=</span> cartaoDeCredito<span className="dev-code punctuation">.</span><span className="dev-code function">slice</span><span className="dev-code punctuation">(</span><span className="dev-code operator">-</span><span className="dev-code number">4</span><span className="dev-code punctuation">)</span><span className="dev-code punctuation">;</span><br/><br/>
            <span className="dev-code keyword">const</span> cartaoDeCreditoMask <span className="dev-code operator">=</span> ultimosQuatroDigitos<span className="dev-code punctuation">.</span><span className="dev-code function">padStart</span><span className="dev-code punctuation">(</span>cartaoDeCredito<span className="dev-code punctuation">.</span>length<span className="dev-code punctuation">,</span> <span className="dev-code string">'*'</span><span className="dev-code punctuation">)</span><span className="dev-code punctuation">;</span><br/>
            <span className="dev-code comment">// Resultado: "************5581"</span>
          </code>
        </TextCode>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus eu arcu molestie congue. Cras convallis lectus et magna hendrerit, vel facilisis enim interdum. Morbi consectetur urna dapibus libero laoreet eleifend in sit amet magna. Integer magna sapien, semper vitae ex sit amet, dignissim egestas sapien. Pellentesque porta lorem sed lacus scelerisque, nec auctor orci luctus. Morbi facilisis, sem eget lacinia maximus, nisl quam aliquet nisl, a ultricies justo leo ac libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit tincidunt placerat. Donec vitae erat in leo dictum sagittis. Nullam at placerat mi. Sed vel arcu magna. Ut mollis eget mauris quis dignissim.
        Mauris scelerisque tellus id augue tristique, aliquet venenatis erat vulputate. Fusce eget turpis risus. Duis interdum nunc non elit efficitur sollicitudin eu at velit. Nam scelerisque sed lorem ac eleifend. Praesent porttitor sapien pretium nibh consequat pulvinar. Proin venenatis est ut erat euismod, quis feugiat leo aliquet. Praesent laoreet dolor tellus, sit amet mollis ligula euismod consequat. Mauris viverra ligula nisi, quis dignissim enim facilisis a.
        </p>
      </TextArticle>
    </Container>
  );
}

export default Article;