import React,{useState} from 'react'
import './ColorBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ColorBox = () => {
    const [inputValue, setInputValue] = useState('')
    const colorsArr = ['green', 'red', 'gold']
    const [colors, setColors] = useState(colorsArr)

    const handleClick = () => {
        setColors([...colors, inputValue])
        setInputValue('')
    }
    return (
        <div className="container">
            <div className="color-box">
                <div className="input-div">
                    <TextField className='input-field' type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder="Enter a color"></TextField>
                    <Button onClick={handleClick} variant="contained">Add</Button>
                </div>
                <div className="card-div">
                    {colors.map((item, index)=>{
                        return(
                            <ColorBoxDiv key={index} item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const ColorBoxDiv = ({item}) => {
    const styles = {
        background: item
    }
    return(
        <Card>
            <CardContent style={styles}>
                <div>{item}</div>
            </CardContent>
        </Card>
    )
}

export default ColorBox
