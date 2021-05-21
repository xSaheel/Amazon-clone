import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { uiActions } from "../store/uiSlice";

const SearchResults = () => {

    const params = useParams();

    const result = params.keywords;

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.ui.isLoading);

    useEffect(() => {
        dispatch(uiActions.setIsLoading(true));

        setTimeout(() => {
            dispatch(uiActions.setIsLoading(false));
        },1000);
    },[])

    return (
        <div>
            {isLoading && <div className="spinner"></div>}
            {!isLoading && <h1>{result}</h1>}
        </div>
    )
}

export default SearchResults;