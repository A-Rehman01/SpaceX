import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import { Launch } from './Launch'
export const Index = () => {
    const { data, loading, error } = useLaunchesQuery();

    if (loading) {
        return (
            <h2>Loading</h2>
        )
    }
    if (error || !data) {
        return (
            <h2>Error</h2>
        )
    }
    return (
        <div>
            <Launch data={data} />
        </div>
    )
}
