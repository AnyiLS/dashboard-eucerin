import useApi from "api";
import useModels from "models";
import React from "react";

const useDashboard = () => {

    const {useActions} = useApi();
    const {dispatch, useDashboardActions} = useActions();
    const {actDashboardInfo} = useDashboardActions();

    const {useSelectors} = useModels();
    const {useSelector, useDashboardSelectors} = useSelectors();
    const {dashboardSelector} = useDashboardSelectors();
    const dashboardInfo = useSelector(dashboardSelector);
    
    React.useEffect(() => {
        dispatch(actDashboardInfo({
            onError: (error) => console.log("error", error),
            onSuccess: () => {}
        }))
    }, [])

    return {
        dashboardInfo
    }
}

export default useDashboard;