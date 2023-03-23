import React from 'react'
import DisplayCard from "../../Components/DisplayCard/DisplayCard";


const CardContainer = ({mockData}) => {

    const skiCard = mockData.map((resort)=>{

return(
    <DisplayCard
    img1={resort.images[0]}
    img2={resort.images[1]}
    img3={resort.images[2]}
    name={resort.name}
    cost={resort.cost}
    location={resort.country}
    website={resort.website}
    />
)
    })
  return (
    <div className='cardContainer'>{skiCard}</div>
  )
}

export default CardContainer