import React, { useEffect } from 'react';
import { useState } from 'react';

import { Container } from './styles';


const Comments: React.FC = () => {
  const [page, setPage] = useState({});

  var disqus_config = function () {
    setPage({ url: "PAGE_URL"});  // Replace PAGE_URL with your page's canonical URL variable
    setPage({identifier: "PAGE_IDENTIFIER"}); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  useEffect(() => {
    var d = document, s = d.createElement('script');
    s.src = 'https://blog-web.disqus.com/embed.js';
    s.setAttribute('data-timestamp', "2020-10-12");
    (d.head || d.body).appendChild(s);
  }, []);

  return (
    <Container>
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </Container>
  );
}

export default Comments;