/**
 * Self Actions
 */

import ActionTypes from '../actionTypes/user';

const UserActions = {
    getMe: () => {
        return {
            type: ActionTypes.GET_ME,
        }
    }
}

export default UserActions;