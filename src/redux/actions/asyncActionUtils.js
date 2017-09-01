import { status } from "./_constants"

const asyncActionUtils = prefix => {

    const typeStart = prefix + status.START;
    const typeSuccess = prefix + status.SUCCESS;
    const typeFailure = prefix + status.FAILURE;

    const startAction = () => {
        return {
            type: typeStart
        }
    }

    const successAction = projects => {
        return {
            type: typeSuccess,
            payload: projects
        }
    }

    const failureAction = error => {
        return {
            type: typeFailure,
            payload: error
        }
    }

    const asyncAction = asyncFunc => {
        return dispatch => {
            dispatch( startAction() );
            return asyncFunc()
                .then( projects => dispatch( successAction(projects) ) )
                .catch( error => dispatch( failureAction(error) ) )
        };

    }

    return asyncAction;
}

export default asyncActionUtils;