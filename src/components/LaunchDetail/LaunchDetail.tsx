import React from 'react'
import { LaunchinfoQuery } from '../../generated/graphql';
import ReactPlayer from "react-player";


//MaterialUI
import Paper from '@material-ui/core/Paper';

//CSS
import './style.css'

interface Props {
    data: LaunchinfoQuery
}

export const LaunchDetail: React.FC<Props> = ({ data }) => {

    console.log(data)
    return (
        <div className='Container'>
            <div className='Title'>
                LAUNCH: {data.launch?.mission_name}
            </div>
            <div className='padding'>
                <Paper className='Date' elevation={3} >

                    <span className='smallheding'>Date:</span> <span className='smallheadingdata'> {data.launch?.launch_date_local} </span>
                    <hr />
                    <span className='smallheding'>Year:</span>  <span className='smallheadingdata'> {data.launch?.launch_year} </span>
                    <hr />
                    <span className='smallheding'>Site Name:</span> <span className='smallheadingdata'> {data.launch?.launch_site?.site_name} </span>
                </Paper>
                <br />
                <Paper className='Rocket' elevation={3} >
                    <span className='smallheding'>Rocket_ID: </span>
                    <span className='smallheadingdata'> {data.launch?.rocket?.rocket_id} </span>
                    <hr />
                    <span className='smallheding'>Rocket_Name: </span>
                    <span className='smallheadingdata'> {data.launch?.rocket?.rocket_name} </span>
                    <hr />
                    <span className='smallheding'>Rocket_Type: </span>
                    <span className='smallheadingdata'> {data.launch?.rocket?.rocket_type} </span>
                </Paper>

                <br />
                <Paper className='Date' elevation={3} >
                    <div className='Detail'>
                        <div className='DetailHeading'> DETAIL </div>
                        <div className={data.launch?.launch_success ? "green" : (data.launch?.upcoming) ? 'gray' : 'red'}>
                            <span className='smallheding'>Status</span>    {data.launch?.launch_success ? "Success" : (data.launch?.upcoming) ? 'Upcoming' : 'Fail'}
                        </div>
                        {data.launch?.details}
                    </div>


                    <div className='Articals'>
                        {
                            !!data.launch && !!data.launch.links && !!data.launch.links.article_link && (
                                <span className='smallheding'>Links </span>
                            )
                        }
                        {
                            !!data.launch && !!data.launch.links && !!data.launch.links.article_link && (
                                <a className='links' rel="noopener noreferrer" href={data.launch.links.article_link} target="_blank">Artical_Link </a>
                            )
                        }
                        <span className='ORSYMBOL'> || </span>
                        {
                            !!data.launch && !!data.launch.links && !!data.launch.links.wikipedia && (
                                <a className='links' rel="noopener noreferrer" href={data.launch.links.wikipedia} target="_blank"> Wikipedia</a>
                            )
                        }

                    </div>
                </Paper>
            </div>
            <div className='vediodiv'>
                {data?.launch?.links?.video_link && (
                    <div className='vedio' >
                        <ReactPlayer
                            data-testid="react-player"
                            controls={true}
                            url={data.launch.links.video_link}
                            className='vedioPlayer'
                        />
                    </div>
                )}
            </div>

            <hr />


            <div className='Title'>
                IMAGE GALLERY
            </div>

            {
                !!data.launch && !!data.launch.links && !!data.launch.links.flickr_images && (
                    <div className='RocketImagesdiv'>

                        {
                            data.launch.links.flickr_images.map(obj => {
                                return (
                                    obj ? <img src={obj} alt="Rocket Images" className='Rocket_Images' /> : null
                                )
                            })
                        }
                    </div>
                )
            }

        </div>
    )
}
