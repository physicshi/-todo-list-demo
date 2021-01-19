import React,{useState} from 'react';
import Li from './listitem';
import { Paper,TextField} from '@material-ui/core';


interface Item{
    id:number,
    txt:string;
    done:boolean;
}



export default function Todos(props:any){
    let {data} = props;
    const [query, setQuery] = useState('')
    return (
    <ul id="todo-list">

<Paper>
      <TextField
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="搜索TODO名"
            style={{ margin: 16 }}
          />
      {data.sort((x:Item, y:Item) => (x.done === y.done) ? 0 : x.done ? -1 : 1).filter((x:Item)=> query.trim() === '' ? true : x.txt.indexOf(query.trim()) > -1).map(
              (item:Item)=><Li key={item.id} {...props} data={item}/>)    
            }
</Paper>
    </ul>)
}