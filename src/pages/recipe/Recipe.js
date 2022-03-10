import { useParams } from 'react-router-dom'
import {createUseStyles} from 'react-jss'
import useFetch from '../../hooks/useFetch.js/useFetch'

const useStyles = createUseStyles({
  "@global": {
    h3: {
      fontSize: 20,
      color: "darkorange"
    }
  },
  recipeSection: {
    width: "50%",
    margin: "0 auto",
    padding: 100
  }, 
  recipeTitle: { 
  paddingBottom: 25,
 
},
 
})

export default function Recipe() {
    const classes = useStyles()

    //id in this case or whatever you call the endpoint, eg recipes/:abc then const { abc } = useParams
    const { id } = useParams()
    const url = ("http://localhost:3000/recipes/" + id)



    //renaming data to recipe
    const { error, isPending, data: recipe } = useFetch(url)
    
  return (
    <div>
     {error && <p className={classes.error}>{Error}</p>}
      {isPending &&  <p className={classes.error}>Loading...</p>}
      {recipe && 
      <section className={classes.recipeSection}> 
      <h2 className={classes.recipeTitle}>{recipe.title}</h2> 
      <h3>{recipe.cookingTime} to cook.</h3>
      <ul>
        {recipe.ingredients.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <p>{recipe.method}</p>
      </section>}
    </div>
  )
}
