import React from "react";
import ResultItem from "./result-item";

const ResultList = ({results, title, remove}) => {
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {results.map(result =>
                <ResultItem remove={remove} result={result} key={result.id}></ResultItem>
            )}
        </div>
    );
};

export default ResultList;