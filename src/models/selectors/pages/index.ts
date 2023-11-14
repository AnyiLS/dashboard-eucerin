/** Local Modules */
import useHelpers from "helpers";
/** Interfaces & Types */
import type {States} from "models/interfaces/create-reducer.interfaces";
import type { PageState } from "models/interfaces/pages.interfaces";

const usePagesSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    const pagesSelector = createSelector(
        (state: States) => state.pages,
        (pages: PageState) => pages.pages
    );

    return {
        pagesSelector
    };
}


export default usePagesSelectors;