import React from 'react';
import { useLaunchinfoQuery } from '../../generated/graphql';
import { LaunchDetail } from './LaunchDetail';
import { useParams } from 'react-router-dom'
import { Progress } from '../Loader/Progress'

export const IndexDetail = () => {
    const { spaceid } = useParams();
    const { data, loading, error } = useLaunchinfoQuery({
        variables: {
            id: spaceid
        },
    });

    if (loading) {
        return (
            <Progress />
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
