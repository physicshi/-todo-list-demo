import React,{useState,useRef,useEffect} from 'react'
// import { List, ListItem, ListItemText, TextField, Button, CircularProgress, ListItemSecondaryAction } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/RemoveCircle'

export default function Li(props:any) {
    let {data,remove,changeDone,editTxt} = props;
    let {id,txt,done} = data;
    const [edit,setEdit] = useState(false);
    const [inputVal,setInputVal] = useState(txt);
    const input:any = useRef();
    useEffect(()=>{
        if(edit){
            input.current.focus();
        }
    },[edit]);
    return (
        <li className={edit?"editing":""}>
            <div className={"todo "+ (done?"done":"")}>
                <div className="display">
                    <input 
                        className="check" 
                        type="checkbox"
                        checked = {done}
                        onChange = {({target})=>{
                            changeDone(id,target.checked);
                        }} 
                    />
                    <div 
                        className="todo-content"
                        onDoubleClick={()=>{
                            setEdit(true);
                        }}
                    >{txt}</div>
                    {/* <RemoveIcon  onClick={() => remove(id)}/> */}
                    <span
                        className="todo-destroy"
                        onClick={()=>{
                           remove(id); 
                        }}
                    >{
                        <RemoveIcon/>
                        
                    }</span>
                </div>
                <div className="edit">
                    <input 
                        className="todo-input" 
                        type="text" 
                        value = {inputVal}
                        ref = {input}
                        onChange={({target})=>{
                            setInputVal(target.value);
                        }}
                        onBlur = {()=>{
                            setEdit(false);
                            if(inputVal.trim()){
                                editTxt(id,inputVal);
                            } else {
                                setInputVal(txt);
                            }   
                        }}
                    />
                </div>
            </div>
        </li>)
}