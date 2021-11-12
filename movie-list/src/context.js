import React,{useContext,useReducer,useState} from 'react'
import { movieList } from './data';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const AppContext = React.createContext()

const initialState = {
    data:[...movieList]
}

const reducer = (state,action) => {

    if(action.type === 'HANDLE_SUBMIT'){
        return {...state, data:[...state.data, action.payload]}
    }

    if(action.type === 'DELETE_MOVIE'){
        return {...state, data: state.data.filter((item)=>{
            return(
                item.id !== action.payload
            )
        })}
    }

    return state
}

const AppProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const [mode, setMode] = useState('light');

    const toggleColorMode = () => {
        console.log('clicked')
        setMode((prevMode)=>(prevMode === 'light' ? 'dark' : 'light'))
    }

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
            mode,
            },
        }),
        [mode],
    );

    const handleSubmit = (e,singleMovie, setSingleMovie) => {
        e.preventDefault()
        const newMovieDetails = {id: new Date().getTime().toString(),...singleMovie}
        dispatch({type:'HANDLE_SUBMIT',payload:newMovieDetails})
        setSingleMovie({name:'', rating:'', url:'', description:'', trailer:''})
    }

    const deleteMovie = (id) => {
        dispatch({type:'DELETE_MOVIE',payload:id})
    }

    

    return(
        <AppContext.Provider value={{...state,handleSubmit,deleteMovie,toggleColorMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}