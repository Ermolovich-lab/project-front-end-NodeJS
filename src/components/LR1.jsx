import React, {useState} from "react";
import ResultList from "./result-list";
import SearchingForm from "./searching-form";
import axios from "axios";

const LR1 = () => {

    const [results, setResult] = useState([])

    const createResult = (newResult) => {
        setResult([...results, newResult]);
    }
    
    const removeResult = (result) => {
        setResult(results.filter(p => p.id !== result.id))
    }
    
    async function fetchResults(ip){
        return await axios.get('http://ip-api.com/json/' + ip)
    }

    return(
        <div>
            <SearchingForm create={createResult} fetch={fetchResults}/>
            {results.length !== 0
            ? 
            <ResultList remove={removeResult} results={results} title="Результаты поисков:"/>
            : 
            <h1 style={{textAlign: 'center'}}>
                Нет результатов!
            </h1>
            }
        </div>
    )
}

export default LR1;