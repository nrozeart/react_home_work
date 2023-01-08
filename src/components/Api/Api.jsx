import { useEffect } from 'react';
import './Api.css';

export const Api = () => {


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            if (true) {
                resolve('Done');
            } else {
                reject('Error')
            }
        })

        // console.log('promise', promise)

        const data = fetch('https://api.spaceflightnewsapi.net/v3/articles')
        console.log('data', data)

    }, [])

    return (
        <>
            <h2>Api page</h2>
        </>
    );
};
