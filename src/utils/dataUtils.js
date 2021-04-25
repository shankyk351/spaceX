function formatLaunchData( launchData ) {
    return launchData.map( ( launch ) => ( {
        missionId: launch.mission_id,
        launchYear: launch.launch_year,
        launchSuccess: launch.launch_success,
        landSuccess: launch.rocket.first_stage.cores[ 0 ].land_success,
        missionName: launch.mission_name,
        flightNumber: launch.flight_number,
        missionPatch: launch.links.mission_patch_small,
    } ) );
}

function createSearchString(
    yearFilter,
    launchSuccessFilter,
    landSuccessFilter,
) {
    let string = "?";
    if ( yearFilter !== null ) {
        string += `&launch_year=${ yearFilter }`;
    }
    if ( launchSuccessFilter !== null ) {
        string += `&launch_success=${ launchSuccessFilter }`;
    }
    if ( landSuccessFilter !== null ) {
        string += `&land_success=${ landSuccessFilter }`;
    }

    return string;
}

export default { formatLaunchData, createSearchString };
