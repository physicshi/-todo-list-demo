import React, { useState } from 'react';
import './styles/style.css';
import { TextField, Button } from '@material-ui/core'
import Todos from './components/todos'

function App() {
  let [data, setData] = useState([
    {
      id: 0,
      txt: "掌握React",
      done: true
    }, {
      id: 1,
      txt: "学习Node.js",
      done: false
    }, {
      id: 2,
      txt: "学习数据库",
      done: false
    }
  ]);

  const addData = (txt: any) => {
    data.push({
      id: Date.now(),
      txt,
      done: false
    });
    setData([...data]);
  };

  const remove = (id: number) => {
    setData(data.filter(item => {
      return item.id != id
    }));
  };

  let changeDone = (id: any, done: any) => {
    data.forEach(item => {
      if (item.id === id) {
        item.done = done;
      }
    });
    setData(data.map(item => ({ ...item })));
  }
  let editTxt = (id: any, txt: any) => {
    data.forEach(item => {
      if (item.id === id) {
        item.txt = txt;
      }
    });
    setData(data.map(item => ({ ...item })));
  }
  // interface ItemProps{
  //   id:number;
  //   txt:string;
  //   done:boolean;
  // }
  const [val, setval] = useState("");
  return (
    <div className="App">
      
        
      <Todos
        key={1}
        data={data}
        changeDone={changeDone}
        editTxt={editTxt}
        remove={remove}
      />
      <div style={{height:10}}></div>
      <div className="control">
        <TextField
          placeholder="请输入TODO名称"
          value={val}
          onChange={e => {
            setval(e.target.value)
          }}
        />
        <span style={{paddingRight:30}}></span>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => {
            addData(val)
            setval("")
          }}
          disabled={val.trim() === ''}
        >Add</Button>
      </div>
      
    </div>
  );
}

export default App;
