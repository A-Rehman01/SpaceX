import gql from 'graphql-tag';

export const QUERY_LAUNCHES_DETAIL = gql`
    query launchinfo($id: String){
        launch(id:$id){
        flight_number
        mission_name
        launch_year
        rocket{
            rocket_id
            rocket_name
            rocket_type
            }
        launch_site{
            site_name
            }
        details
        links{
            flickr_images
            video_link
            }
        launch_success
        upcoming
    }
  }
`;