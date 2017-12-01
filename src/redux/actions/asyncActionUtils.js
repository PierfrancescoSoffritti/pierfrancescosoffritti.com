import { status } from "./_constants"

const getAsyncAction = ({actionTypePrefix, asyncFunc}) => {

    const actionTypeStart = actionTypePrefix + status.START;
    const actionTypeSuccess = actionTypePrefix + status.SUCCESS;
    const actionTypeFailure = actionTypePrefix + status.FAILURE;

    const startAction = () => {
        return {
            type: actionTypeStart
        }
    }

    const successAction = payload => {
        return {
            type: actionTypeSuccess,
            payload: payload
        }
    }

    const failureAction = error => {
        return {
            type: actionTypeFailure,
            payload: error
        }
    }

    const asyncAction = args => {
        return dispatch => {
            dispatch( startAction() );
            asyncFunc(args)
                .then( data => dispatch( successAction(data) ) )
                .catch( error => dispatch( failureAction(error) ) )
        }
    }

    return asyncAction;
}

export default getAsyncAction;