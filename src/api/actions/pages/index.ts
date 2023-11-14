/** Local Modules */
import useApi from "api";
import useTypes from "types";
/** Interfaces & Types */
import type {Request} from "models/interfaces/create-reducer.interfaces";
import type {Dispatch} from "redux";
import type {CreatePageRequest, EditPageRequest, ChangeStatusPageRequest} from "models/interfaces/pages.interfaces";

const usePagesActions = () => {
    /** Providers */
    const {useProviders} = useApi();
    const {usePagesProviders} = useProviders();
    const {createPages, editPages, changeStatusPage, getPages} = usePagesProviders();

    /** Types */
    const {usePagesTypes} = useTypes();
    const {GET_PAGES} = usePagesTypes();

    const actGetPages = (request: Request) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError} = request;

        try {
            const res = await getPages();
            const {data} = res.data;

            dispatch({
                type: GET_PAGES,
                payload: data
            });

            const redux = JSON.parse(localStorage.getItem("persist:root")!);
            redux.pages = JSON.stringify({pages: data});
            localStorage.setItem("persist:root", JSON.stringify(redux));
        } catch (e) {
            onError && onError(e);
        }
    }

    const actCreatePages = (request: CreatePageRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, onSuccess , data} = request;

        try {
            const res = await createPages(data);

            onSuccess && onSuccess(res.data.message);
        } catch (e) {
            onError && onError(e);
        }
    }

    const actEditPages = (request: EditPageRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, onSuccess , data} = request;

        try {
            const res = await editPages(data);

            onSuccess && onSuccess(res.data.message);
        } catch (e) {
            onError && onError(e);
        }
    }

    const actChangeStatusPages = (request: ChangeStatusPageRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, onSuccess, id} = request;

        try {
            const res = await changeStatusPage(id);

            onSuccess && onSuccess(res.data.message);
        } catch (e) {
            onError && onError(e);
        }
    }

    return {
        actGetPages,
        actCreatePages,
        actEditPages,
        actChangeStatusPages
    };
}


export default usePagesActions;