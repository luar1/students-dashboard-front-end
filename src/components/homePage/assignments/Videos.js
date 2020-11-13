import React from 'react';

const Videos = ({ sources }) => {
  return (
    <>
      <ul>
        {
          sources ?
            sources.map(source => <li><a href={source.link} target="_blank">{source.source_title}</a></li>) : null
        }
      </ul>
    </>
  )
}

export default Videos;