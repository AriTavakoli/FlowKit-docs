import React, { useState, useEffect } from 'react';

function TableOfContents() {
  const [toc, setToc] = useState([]);

  useEffect(() => {
    async function fetchToc() {
      const response = await fetch('/api/toc');
      const data = await response.json();
      setToc(data);
    }

    fetchToc();
  }, []);

  return (
    <div>
      <h2>Table of Contents</h2>
      {toc.map((dir) => (
        <div key={dir.name}>
          <h3>{dir.name}</h3>
          <ul>
            {dir.files.map((file) => (
              <li key={file.name}>
                <a href={`/${dir.name}/${file.name.replace('.mdx', '')}`}>{file.name.replace('.mdx', '')}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TableOfContents;