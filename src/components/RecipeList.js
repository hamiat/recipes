import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  "@global": {},
  recipeList: {
    display: "flex",
    gap: 24, 
   
  },
  recipeTitle: {
    padding: "24px 0",
  },
  recipeDiv: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    background: "#F1F9F9",
    border: "1px solid #313131",
    transition: "all 0.3s ease",
    '&:hover': {
     transform: "rotate(3deg)"
    
    }
  },
  recipeBtn: {
    margin: "0 auto",
    textDecoration: "none",
    padding: 10, 
    background: "white",
    color: "#313131",
    boxShadow: "2px 2px grey",
    '&:hover': {
      background: "#313131",
    color: "#fff",
     
     }
  },
  '@media screen and (max-width: 800px)': {
    recipeTitle: {
      padding: "10px 0",
      fontSize: 24
    },
    recipeDiv: {
      fontSize: 18
    },
  }
});

export default function RecipeList({ recipes }) {
  const classes = useStyles();
  return (
    <section className={classes.recipeList}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={classes.recipeDiv}>
          <h2 className={classes.recipeTitle}>{recipe.title}</h2>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
         <Link className={classes.recipeBtn} to={`/recipe/${recipe.id}`}>  Cook this!</Link>
        </div>
      ))}
    </section>
  );
}
