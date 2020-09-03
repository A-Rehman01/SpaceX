import React from 'react'

//GetType
import { LaunchesQuery } from '../../generated/graphql'

//Material  UI
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


export const Launch: React.FC<Props> = ({ data }) => {

    console.log(data)

    function DETAIL(detail: any) {
        var showless = '';
        if (detail) {
            for (let index = 0; index < 130; index++) {
                if(detail.length===index){
                    showless = showless + ' . . .';
                    return showless;
                }
                else{
                    showless = showless + detail[index]
                }
            }
            showless = showless + ' . . .';
            return showless;
        }
        else{
            showless='Not any Detail further click on Learn More . . .'
            return showless;
        }
    }
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
                                    <Typography className='detail' variant="body2" color="textSecondary" component="p">
                                        {DETAIL(obj?.details)}
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
