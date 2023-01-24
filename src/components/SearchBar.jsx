import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate(); // we use navigate to navigate us to that specific url

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the default behavior of browser of reloading every time 

        if(searchTerm){
            navigate(`/search/${searchTerm}`);

            setSearchTerm(''); // reset the search to empty string

        }

    }

  return (
    <Paper
        component = "form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 5,
            boxShadow: 'none',
            mr : {sm : 5}
        }}
    >
        <input 
            className = "search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type = "submit" sx={{ p:'10px', color: '#37474f' }}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar