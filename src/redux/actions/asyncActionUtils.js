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

    const successAction = projects => {
        return {
            type: actionTypeSuccess,
            payload: projects
        }
    }

    const failureAction = error => {
        return {
            type: actionTypeFailure,
            payload: error
        }
    }

    const asyncAction = dispatch => {
        dispatch( startAction() );
        return asyncFunc()
            .then( projects => dispatch( successAction(projects) ) )
            .catch( error => dispatch( failureAction(error) ) )
    }

    return asyncAction;
}

export default getAsyncAction;