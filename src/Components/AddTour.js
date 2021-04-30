import React from 'react'
import Button from '@material-ui/core/Button';
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ExploreIcon from '@material-ui/icons/Explore';
import './AddTour.css'
import InfoIcon from '@material-ui/icons/Info';
import ImageIcon from '@material-ui/icons/Image';
import FlightIcon from '@material-ui/icons/Flight';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {useDispatch} from 'react-redux'
import ADD from '../redux/AddAction' 

const useStyles = makeStyles((theme) => ({

    margin: {
      margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(5),
    },
    
  }));

function AddTour() {
    const [newTour, setnewTour] = useState({name:"",
    info:"",
    img:"",
    price:""
    })
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <div className="Addtour">
        <div className="Container">
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ExploreIcon />
          </Grid>
          <Grid item>
            <TextField value={newTour.name} onChange={(e)=>setnewTour({...newTour,name:e.target.value})} id="input-with-icon-grid" label="Destination" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <InfoIcon />
          </Grid>
          <Grid item>
            <TextField value={newTour.info} onChange={(e)=>setnewTour({...newTour,info:e.target.value})} id="input-with-icon-grid" label="Info" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ImageIcon />
          </Grid>
          <Grid item>
            <TextField value={newTour.img} onChange={(e)=>setnewTour({...newTour,img:e.target.value})} id="input-with-icon-grid" label="Image" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AttachMoneyIcon />
          </Grid>
          <Grid item>
            <TextField value={newTour.price} onChange={(e)=>setnewTour({...newTour,price:e.target.value})} id="input-with-icon-grid" label="Price" />
          </Grid>
        </Grid>

        <Button
        onClick={()=>{
            dispatch(ADD(newTour))
            setnewTour({name:"",info:"",img:"",price:""}
        )} 
        }
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<FlightIcon />}
      >
        Send
      </Button>

      </div>
    </div>
    </div>
    )
}

export default AddTour
