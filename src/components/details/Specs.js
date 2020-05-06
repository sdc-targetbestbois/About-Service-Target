import React from 'react';
import Spec from './Spec';

const Specs = ({specs}) => {
  return (
    <div className='specs'>
      <h3 className='specsHeader'>Specifications</h3>
        {specs.map((spec, i) => {
          return <Spec spec={spec} key={i}/>
        })}
    </div>
  )
}

export default Specs;