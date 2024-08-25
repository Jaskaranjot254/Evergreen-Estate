import React from 'react'
import '../rooms/room.css'
import { listData } from '../../lib/data';
import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';


function Room() {
  const data = listData;
  return (
    <div className='listPage'>
    <div className="listContainer">
          <Filter/>
          <div className="wrapper">
            {data.map(item=>(
              <Card key={item.id} item={item}/>
            ))}
          
          </div>
        </div>
       
    </div>
  )
}
export default Room;
