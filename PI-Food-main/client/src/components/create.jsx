import { useState } from 'react';
import styles from '../styles/create.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe } from "../redux/actions";
import { Link, } from 'react-router-dom';

export default function Create() {
    const listDiets = useSelector((state) => state.diets)
    const lis = listDiets.map((e) => e.name);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: '',
        healthScore: '1',
        summary: '',
        image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
        dietss: [],
        steps: ''
    });
    const [validName, setValidName] = useState(true);
    const [validSummary, setValidSummary] = useState(true);
    const [validSteps, setValidSteps] = useState(true);

    const myRegex = {
        name: /^\s/g
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name) {
            alert('Please enter a name');
        } else {
            dispatch(
                postRecipe({
                    ...input,
                    steps: [{ number: '', step: input.steps }]
                })
            );
        }
        alert('Recipe created');
        setInput({
            name: '',
            healthScore: '1',
            summary: '',
            image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
            dietss: [],
            steps: ''
        });

    };

    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    function handleDietChange(e) {
        if (e.target.checked) {
            setInput({ ...input, dietss: [...input.dietss, e.target.value] });
        }
        if (!e.target.checked) {
            setInput({
                ...input,
                dietss: input.dietss.filter((diet) => diet !== e.target.value)
            });
        }
    }

    function validate() {
        if (myRegex.name.test(input.name) || input.name === '') setValidName(false);
        else setValidName(true);
        if (input.summary.length < 5) setValidSummary(false);
        else setValidSummary(true);
        if (input.steps.length < 5) setValidSteps(false);
        else setValidSteps(true);
    }
    return (
        <div className={styles.mainCreate}>
            <Link to='/home'> <li className={styles.backHome}> Back </li> </Link>
            <h1>Lets create a great recipe !</h1>
            <form autoComplete="off" className={styles.formCreate} onSubmit={(e) => handleSubmit(e)}>
                <label className={styles.label}>Title:</label>
                <input
                    className={styles.input}
                    name="name"
                    value={input.title}
                    type="text"
                    placeholder="Title of recipe"
                    onChange={(e) => handleChange(e)}
                    onKeyUp={() => validate(input)}
                    onBlur={() => validate(input)}
                />
                <span>{!validName && "DON'T LEAVE EMPTY SPACES"}</span>
                <label className={styles.label}>Health Score: {input.healthScore}</label>
                <input
                    className={styles.input}
                    name="healthScore"
                    value={input.healthScore}
                    type="range"
                    min={1}
                    max={100}
                    onChange={(e) => handleChange(e)}
                />
                <label className={styles.label}>Summary:</label>
                <input
                    className={styles.input}
                    name="summary"
                    value={input.summary}
                    type="text"
                    placeholder="Summary of recipe - 5 character or longer"
                    onChange={(e) => handleChange(e)}
                    onKeyUp={() => validate(input)}
                    onBlur={() => validate(input)}
                />
                <span>{!validSummary && 'REQUIRED'}</span>
                <label className={styles.label}>Image:</label>
                <input
                    className={styles.input}
                    name="image"
                    value={input.image}
                    type="text"
                    placeholder="URL of image"
                    onChange={(e) => handleChange(e)}
                />
                <img src={input.image} alt="recipe" />
                <label className={styles.label}>Diets:</label>
                <div className="" onChange={(e) => handleDietChange(e)}>
                    {lis.map((e) => (
                        <div key={e}>
                            <input type="checkbox" name="diets" value={e} />
                            <label>{e.toUpperCase()}</label>
                        </div>
                    ))}
                </div>
                <label className={styles.label}>Steps:</label>
                <input
                    className={styles.input}
                    name="steps"
                    value={input.steps}
                    type="text"
                    placeholder="Steps of recipe - 5 character or longer"
                    onChange={(e) => handleChange(e)}
                    onKeyUp={() => validate(input)}
                // onBlur={() => validate(input)}
                />
                <span>{!validSteps && 'REQUIRED'}</span>

                {!input.name || !validSteps || !validName || !validSummary ? (
                    <button disabled>
                        Submit
                    </button>
                ) : (
                    <button className={styles.buttonsub}>Create</button>
                )}
            </form>
        </div>
    );
}
