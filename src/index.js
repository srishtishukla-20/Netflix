import { logDOM } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Series from "./Series";
// console.log(Series[0].sname)

// function ncard(val) {
// console.log(val);

// }

ReactDOM.render(
  <>
    <h1 className='heading_style'>List of Top 5 series in Netflix</h1>
    {Series.map((val)=>{
      return(
        <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link} />

      )
    })}


  </>,
  document.getElementById('root'));

