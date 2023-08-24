import React, { useState } from "react";
import Searching from "./UI/input/search-engine"
import SearchButton from "./UI/button/search-button";

const NewResult = (data) =>{
    const newResult = {
        id: Date.now(),
        country: data.country,
        city: data.city,
        timezone: data.timezone,
        org: data.org
    }

    return newResult;
} 

const SearchingForm = ({create, fetch}) => {
    
    const [ip, setIp] = useState('')

    const eventSearching = (e) => {
        e.preventDefault()
        fetch(ip).then((getResponse) => {
            console.log("GET Response")
            console.log(getResponse.data)
            create(NewResult(getResponse.data))
          });
        
        
        setIp('')
    }
  
    return (
        <form>
            <Searching 
            value={ip}
            onChange={e => setIp(e.target.value)}
            type="text" >Введите ip адрес</Searching>
            <SearchButton onClick={eventSearching}>Найти</SearchButton>
      </form>
    )
}

export default SearchingForm;