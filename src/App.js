import React, { useState, useEffect  } from 'react';
import './App.css';
import fetcher from "./API";

const App = () =>{
    const [dataReady, setDataReady] = useState(false);
    const [responseData, setResponseData] = useState();
    const getApiData = () => {
        try {
            fetcher("https://www.dnd5eapi.co/api/classes").then((response) => {
                setDataReady(true);
                setResponseData(response.data);
            })
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getApiData();
    },[responseData]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Dungeons & Dragons Professions
                </h1>
            </header>
            <ul>{dataReady ? responseData?.results.map(profession => <li>{profession.name}</li>) : "...LOADING"}</ul>
        </div>
    );
}

export default App;