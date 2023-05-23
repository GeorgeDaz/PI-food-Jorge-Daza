import { useState, useEffect } from "react";
// import { Link, Navigate, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../redux/actions";
import Navbar from "./navbar";
import styles from '../styles/create.module.css'

function validate(input) {
    let error = {};
    if (!input.name) {
        error.name = 'Name field is required'
    } else if (!input.summary) {
        error.summary = 'Resume field is required'
    } else if (input.healthyScore < 0 || input.healthyScore > 100) {
        error.healthyScore = 'Healthy Score have to be a number into 0 to 100'
    } else if (!input.healthyScore) {
        error.healthyScore = 'Healthy Score field is required'
    } else if (!input.image.includes('https://')) {
        error.image = 'Link Image field must be a link'
    } else if (!input.image) {
        error.image = 'Link Image field is required'
    }
    return error;

}
export function Create() {
    const dispatch = useDispatch()
    const diets = useSelector((state) => state.diets)
    const [error, setError] = useState({});
    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthyScore: '',
        steps: '',
        image: '',
        dietss: []
    })

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    function handleCheck(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                dietss: [...input.diets, e.target.value]
            })
            console.log(input)
        } else {
            setInput({
                ...input,
                dietss: input.dietss.filter((d) => d !== e.target.value)
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        if (!error.name && !error.summary && !error.healthyScore && !error.image) {
            dispatch(postRecipe(input))
            alert('Recipe created')
            setInput({
                name: '',
                summary: '',
                healthyScore: '',
                steps: '',
                image: '',
                diets: []
            });
        } else {
            return alert('It was not possible to create the recipe')
        }
    }


    return (
        <div>

            <Navbar />

            <div>
                <h1> ¡Lets create a great Recipe!</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div> <label className={styles.label}>Name:</label>
                        <input
                            className={styles.input}
                            type='text'
                            value={input.name}
                            name='name'
                            onChange={handleChange}
                        />
                        {error.name && (
                            <p>{error.name}</p>
                        )}
                    </div>
                    <div><label className={styles.label}>Summary:</label>
                        <input
                            className={styles.input}
                            type='text'
                            value={input.summary}
                            name='summary'
                            onChange={handleChange}
                        />
                        {error.summary && (
                            <p>{error.summary}</p>
                        )}
                    </div>
                    <div><label className={styles.label}>Healthy Score:</label>
                        <input
                            className={styles.input}
                            type='number'
                            value={input.healthyScore}
                            name='healthyScore'
                            onChange={handleChange}
                        />
                        {error.healthyscore && (
                            <p>{error.healthyscore}</p>
                        )}
                    </div>
                    <div><label className={styles.label}>Steps:</label>
                        <input
                            className={styles.input}
                            type='text'
                            value={input.steps}
                            name='steps'
                            onChange={handleChange}
                        />
                    </div>
                    <div><label className={styles.label}>Link Image:</label>
                        <input
                            className={styles.input}
                            type='text'
                            value={input.image}
                            name='image'
                            onChange={handleChange}
                        />
                        {error.image && (
                            <p>{error.image}</p>
                        )}
                    </div>
                    <div><h1>Select diets</h1>
                        {diets.map((diet) => (
                            <div key={diet}>
                                <label className={styles.label}> {diet.name}</label>
                                <input
                                    className={styles.input}
                                    type='checkbox'
                                    name={`${diet.name}`}
                                    value={`${diet.name}`}
                                    onChange={(e) => handleCheck(e)}
                                />
                            </div>

                        ))}
                    </div>
                    <button className={styles.buttonsub} type='submit'>Create</button>
                </form>

            </div>
        </div>
    )
}



// import '../styles/create.module.css'
// import Navbar from './navbar'

// function Create() {
//     return (
//         <div>
//             <Navbar />
//             <p>Esta es la pagina de create</p>
//         </div>
//     )
// }
// export default Create