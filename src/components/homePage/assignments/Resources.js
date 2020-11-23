import React from 'react';

const Resources = ({ lessons }) => {
  return (
    <>
      <ul>
        {
          lessons.sources.map(source => <li key={source.id}><a href={source.link} target="_blank" rel="noopener noreferrer">{source.source_title}</a></li>)
        }
      </ul>
    </>
  )
}

export default Resources;