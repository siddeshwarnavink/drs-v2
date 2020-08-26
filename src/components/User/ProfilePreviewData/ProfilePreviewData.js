import React from 'react';

import classes from './ProfilePreviewData.module.scss';
import defaultProfilepic from '../../../images/default-profile-picture.png';
import Dropdown from '../../UI/Dropdown/Dropdown';

const profilePreviewData = (props) => {
    return (
        <Dropdown
            options={[
                {
                    label: 'Logout',
                    // onClick: () => {
                    //     // TODO: Add logout feature.
                    // }
                }
            ]}
        >
            <div className={classes.ProfilePreviewData}>
                <img
                    className={classes.ProfilePreviewData__ProfilePic}
                    src={props.profilePicture || defaultProfilepic}
                    alt="User DP"
                />
                <div className={classes.ProfilePreviewData__Data}>
                    <span className={[classes.ProfileData__Username, 'profile-username'].join(' ')}>{props.username}</span>
                    <span className={[classes.ProfileData__Role, 'profile-role'].join(' ')}>{props.role}</span>
                </div>
            </div>
        </Dropdown>
    )
}

export default profilePreviewData;