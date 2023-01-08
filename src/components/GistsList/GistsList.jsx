import { useCallback, useEffect, useState } from 'react';

export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";

const gists = [];

export const GistsList = () => {
    const [gists, setGists] = useState([]);

    useEffect(() => {
        fetch(API_URL_PUBLIC)
            .then((response) => response.json())
            .then((result) => setGists(result));
    }, []);

    const renderGist = useCallback(
        // gist.description может быть пустой строкой
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    );

    return <ul>{gists.map(renderGist)}</ul>;
};
