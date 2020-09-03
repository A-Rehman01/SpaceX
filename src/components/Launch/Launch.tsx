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
import { Link } from 'react-router-dom';

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

        <div className='ContainerLaunch'>
            {
                !!data.launches && data.launches.map((obj, index) => {
                    return (
                        <Card key={index} className="rootLaunch">
                            <CardActionArea>
                                <CardContent>
                                    <Typography className='titleLaunch' gutterBottom variant="h6" >
                                        {obj?.mission_name}
                                    </Typography>
                                    <hr />
                                    <div className='DatesLaunch'>
                                        <Typography variant="subtitle1" component="h2">
                                            {obj?.launch_date_local}
                                        </Typography>
                                        <Typography variant="subtitle1" component="h2">
                                            {obj?.launch_year}
                                        </Typography>
                                    </div>
                                    <hr />
                                    <div className='upcomingLaunch'>
                                        <Typography className={obj?.launch_success ? "greenLaunch" : (obj?.upcoming) ? 'grayLaunch' : 'redLaunch'} variant="h5" component="h2">
                                            {obj?.launch_success ? "Success" : (obj?.upcoming) ? 'Upcoming' : 'Fail'}
                                        </Typography>
                                    </div>
                                    <Typography className='detailLaunch' variant="body2" color="textSecondary" component="p">
                                        {DETAIL(obj?.details)}
                                        
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link className='ButtonLaunch' to={`/${obj?.flight_number}`}>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </div>


    )
}
