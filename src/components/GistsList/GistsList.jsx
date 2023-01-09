import { CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const API_URL_PUBLIC = 'https://api.github.com/gists/public';
export const API_URL_GIST = 'https://api.github.com/gists/';

/* const gists = [];
 */
export const GistsList = () => {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const requestGists = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL_PUBLIC);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      setGists(result);
    } catch (err) {
      setError(true);
      console.warn(err);
    } finally {
      setLoading(false);
    }
    if (loading) {
      return <CircularProgress />;
    }
  };

  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description}</li>,
    []
  );

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }
  return <ul>{gists.map(renderGist)}</ul>;
};

/* 
Вариант с мидлваром. Не работает. Почему-то не определяет gists

export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST,
});
export const getGistsSuccess = (data) => ({
    type: GET_GISTS_SUCCESS,
    payload: data,
});
export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err,
}); 

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
};
export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                request: STATUSES.SUCCESS,
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };
        default:
            return state;
    }
};
export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());
    try {
        const res = await fetch(API_URL_PUBLIC);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message));
    }
};

export const selectGists = (state) => state.state.gists;
export const selectGistsError = (state) => state.state.error;
export const selectGistsLoading = (state) => state.state.loading;

export const GistsList = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);
    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );
    if (loading) {
        return <CircularProgress />;
    }
    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        );
    }
    return <ul>{gists.map(renderGist)}</ul>;
};
 */
