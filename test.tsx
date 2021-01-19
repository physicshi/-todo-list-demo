import React, { useState } from 'react';
import { fetch, useAPI } from './rapper';
import { List, ListItemText, ListItem, ListItemSecondaryAction, TextField, Button, CircularProgress, Paper } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'
import './App.css'
import StarOutlined from '@material-ui/icons/StarOutlined'
import StarBorder from '@material-ui/icons/StarBorder'
import { grey } from '@material-ui/core/colors';

const Icon = ({ fav, ...rest }: any) => fav ?
  <StarOutlined {...rest} /> : <StarBorder {...rest} />

function App() {
  const [timestamp, setTimestamp] = useState(0)
  const [data] = useAPI['GET/todo/list']({ timestamp })
  const [todoName, setTodoName] = useState('')
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const deleteTodo = async (id: number) => {
    setLoading(true)
    await fetch['DELETE/todo']({ id })
    setLoading(false)
    setTimestamp(Date.now())
  }

  const addTodo = async () => {
    setLoading(true)
    await fetch['PUT/todo']({ name: todoName })
    setLoading(false)
    setTimestamp(Date.now())
    setTodoName('')
  }

  return (
    <div className="App">
      {(loading) ? <CircularProgress className="Loading" /> :
        <Paper>
          <TextField
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="搜索TODO名"
            style={{ margin: 16 }}
          />
          <List>
            {data?.data.sort((x, y) => (x.fav === y.fav) ? 0 : x.fav ? -1 : 1).filter(x => query.trim() === '' ? true : x.name.indexOf(query.trim()) > -1).map(x => (
              <ListItem key={x.id} style={{ backgroundColor: x.fav ? grey[200] : '' }}>
                <ListItemText primary={x.name} />
                <ListItemSecondaryAction>
                  <RemoveIcon style={{ cursor: 'pointer' }} onClick={() => deleteTodo(x.id)} />
                  <Icon
                    fav={x.fav}
                    style={{ cursor: 'pointer' }}
                    onClick={() => { fetch['POST/todo/fav']({ id: x.id }); setTimestamp(Date.now()) }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>}
      <div className="Control">
        <TextField value={todoName} onChange={e => setTodoName(e.target.value)} placeholder="输入TODO名称" />
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: 8 }}
          onClick={addTodo}
          disabled={todoName.trim() === ''}>Add</Button>
      </div>
    </div>
  );
}

export default App;