import React from 'react'
import { LaunchinfoQuery } from '../../generated/graphql';

interface Props {
    data: LaunchinfoQuery
}

export const LaunchDetail: React.FC<Props> = ({ data }) => {

    console.log(data)
    return (
        <div>
            data from LaunhesDetail
        </div>
    )
}
