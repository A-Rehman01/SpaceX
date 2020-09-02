import React from 'react'

//GetType
import { LaunchesQuery } from '../../generated/graphql'

//Material  UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//CSS
import './style.css'

//Type
interface Props {
    data: LaunchesQuery
}

const useStyles = makeStyles({
    root: {
    },
});

export const Launch: React.FC<Props> = ({ data }) => {

    const classes = useStyles();
    console.log(data)

    return (

        <div className='Container'>
            {
                !!data.launches && data.launches.map((obj, index) => {
                    return (
                        <Card key={index} className="root">
                            <CardActionArea>
                                <CardContent>
                                    <Typography className='title' gutterBottom variant="h6" >
                                        {obj?.mission_name}
                                    </Typography>
                                    <hr />
                                    <div className='Dates'>
                                        <Typography variant="subtitle1" component="h2">
                                            {obj?.launch_date_local}
                                        </Typography>
                                        <Typography variant="subtitle1" component="h2">
                                            {obj?.launch_year}
                                        </Typography>
                                    </div>
                                    <hr />
                                    <div className='upcoming'>
                                        <Typography className={obj?.launch_success ? "green" : (obj?.upcoming) ? 'gray' : 'red'} variant="h5" component="h2">
                                            {obj?.launch_success ? "Success" : (obj?.upcoming) ? 'Upcoming' : 'Fail'}
                                        </Typography>
                                    </div>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </div>


    )
}
