import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import {useState} from 'react'
import ButtonMUI from '@material-ui/core/Button';
import DELETE from '../redux/Delete'
import {useDispatch} from 'react-redux'
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    roots: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  },
}));

function CardT({name,info,img,price,index}) {
  const dispatch = useDispatch()
  const [textButton, settextButton] = useState('See More')
  const [infoText, setinfoText] = useState(info.substring(0, 100)+'...')
  const classes = useStyles();

    return (
        <div >
          
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title><Typography variant="h4" component="h2">
    {name}
</Typography></Card.Title>
    <Card.Text>
    <Typography variant='body1' component="h2">
    {infoText}
    <br/>
    <Chip
        avatar={<Avatar>DT</Avatar>}
        label={price} 
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      
</Typography>

    </Card.Text>
    <Button onClick={()=>{
      return textButton=="See More" ? (settextButton("See Less"),setinfoText(info))  : (settextButton("See More"),setinfoText(info.substring(0, 100)+"..."))
    }} variant="primary">{textButton}</Button>
      <ButtonMUI onClick={()=>dispatch(DELETE(index))} style={{marginLeft:"3px"}} variant="outlined" color="Secondary">
          Not Interested
      </ButtonMUI >
      <Link to={`/${name.split(' ').join("")}`}>
        <ButtonMUI  style={{marginTop:'5px'}} variant="contained" size="large" color="primary" className={classes.margin}>
            Full view
        </ButtonMUI>
      </Link>
  </Card.Body>
</Card> 
        </div>
    )
}

export default CardT
