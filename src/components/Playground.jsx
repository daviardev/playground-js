import { useState } from 'react'

import styles from 'styles/Playground.module.css'

const Playground = () => {
    const [code, setCode] = useState('') // Get value of the code
    const [output, setOutput] = useState('') // Get value of the result

    const handleChange = e => {
        setCode(e.target.value) // Set value

        try {
            setOutput(eval(e.target.value)) // Get value of the code
        } catch (err) {
            setOutput(err.message) // Set error message
        }
    }
    // Tag textarea, get and set value of the code
    // Tag pre print result of the code or error
    return <>
        <div className={styles.wrapepr}>
            <textarea value={code} onChange={handleChange} />
            <pre>{output}</pre>
        </div>
    </>
}

export default Playground