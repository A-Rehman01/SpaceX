import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'

interface Props {
    data: LaunchesQuery
}
export const Launch: React.FC<Props> = ({ data }) => {

    console.log(data)

    return (
        <div>
            data from Launch
        </div>
    )
}
