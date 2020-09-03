import React from 'react';
import { useLaunchinfoQuery } from '../../generated/graphql';
import { LaunchDetail } from './LaunchDetail';
import  {useParams} from 'react-router-dom'


export const IndexDetail = () => {
    const {spaceid} = useParams();
    const { data, loading, error } = useLaunchinfoQuery({
        variables: {
            id: spaceid
        },
    });

    if (loading) {
        return (
            <h2>Loading</h2>
        )
    }
    console.log(error)
    if (error || !data) {
        return (
            <h2>Error</h2>
        )
    }

    return (
        <div>
            <LaunchDetail data={data} />
        </div>
    )
}
