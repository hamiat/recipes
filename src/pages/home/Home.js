import React from 'react'
import {createUseStyles} from 'react-jss'
import RecipeList from '../../components/RecipeList'
import useFetch from '../../hooks/useFetch.js/useFetch'

const useStyles = createUseStyles({
  "@global": {
    body: {
      overflowX: "hidden"
    }
  },
  home: {
    padding: 128,
  },
  error: {
    textAlign: "center"
  },
  '@media screen and (max-width: 800px)': {
    home: {
      padding: 48
    }
  }
  
})

export default function Home() {
    const classes = useStyles()
    const { data, isPending, error} = useFetch("http://localhost:3000/recipes")
    
  return (
    <div className={classes.home}>
      {error && <p className={classes.error}>{Error}</p>}
      {isPending &&  <p className={classes.error}>Loading...</p>}
      {data && <RecipeList recipes={data} /> }
      </div>
  )
}
