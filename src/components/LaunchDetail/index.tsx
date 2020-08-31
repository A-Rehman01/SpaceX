import React from 'react';
import { useLaunchinfoQuery } from '../../generated/graphql';
import { LaunchDetail } from './LaunchDetail';

export const IndexDetail = () => {
    const { data, loading, error } = useLaunchinfoQuery({
        variables: {
            id: '22'
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
