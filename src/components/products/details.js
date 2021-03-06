import React from 'react'
import {useSelector} from 'react-redux';

export default function Product(props) {
  const products = useSelector(state => state.products.products)
  const item = products.filter(item => props.match.params.id === item._id)

  const num = 8;
  
  function renderOptions(){
    let options = [];
    for(let i = 0; i <= num; i++) {
    options.push(<option>{i}</option>)
  }
  return <select>{options}</select>
}

  const renderDetails = () => {
    if(!item.length) {
      return <h1>This is empty</h1>
    } else {
      return item.map(details => <><h1>{details.name}</h1><p>{details.description}</p><img src={details.imageUrl} alt={details.name}/></>
      )
    }
  }
  console.log(item)
  console.log(props.match.params)
  return (
    <div>
      {renderOptions()}
      {renderDetails()}
    </div>
  )
}
