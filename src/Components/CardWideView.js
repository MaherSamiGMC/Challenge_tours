
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import { useParams } from 'react-router';


const CardWideView=({state})=>{
    const {title}= useParams()

    return (
        state.filter(el=>el.name.split(" ").join("")===title).map(el=>
        <React.Fragment>
        {/* <CssBaseline /> */}
        <Container style={{paddingTop:'10px',paddingBottom:'30px'}} maxWidth="sm">
            <img src={el.img} />
            <Typography variant="h4" component="h2">
                {el.name}
            </Typography>
            <Typography variant='body1' component="h2">
                {el.info}
                <br/>
                <Chip
                    avatar={<Avatar>DT</Avatar>}
                    label={el.price} 
                    clickable
                    color="primary"
                    deleteIcon={<DoneIcon />}
                    variant="outlined"
                />
      
        </Typography>
        </Container>
        </React.Fragment>
    ))
        
}

export default CardWideView