import React from "react";
import SearchButton from "./UI/button/search-button";

const ResultItem = (props) => {
    return(
        <div>
            <div className="result">
                <div className="result_content">
                    <div>
                        <p>Id: {props.result.id}</p>
                        <p>Country: {props.result.country}</p>
                        <p>City: {props.result.city}</p>
                        <p>Timezone: {props.result.timezone}</p>
                        <p>Org: {props.result.org}</p>
                    </div>
                </div>
                <div className="result__btns">
                    <SearchButton onClick={() => props.remove(props.result)}>
                        Удалить
                    </SearchButton>
                </div>  
            </div>
        </div>
    )
}

export default ResultItem;