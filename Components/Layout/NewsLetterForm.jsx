import { useState } from 'react';
// import { sanitize } from '../../../utils/miscellaneous';
// import Loading from '../../loading';
import styles from '../../styles/Layout.module.css'


const NewsLetterForm = ({ status, message, onValidated }) => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    /**
     * Handle form submit.
     *
     * @return {{value}|*|boolean|null}
     */
    const handleFormSubmit = () => { 
        setError(null);

        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = (event) => { 
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    }

    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return sanitize(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? sanitize(formattedMessage) : null;
    }

    return (
        <>
            <div className={`flex`}>
                <div className={`light-font ${styles.newsletter}`}>
                    <input type="text" placeholder='sds' name='newsletter' id='newsletter' onChange={(event) => setEmail(event?.target?.value ?? '')} onKeyUp={(event) => handleInputKeyEvent(event)} />
                    <label htmlFor="newsletter">Subscribe to Newsletter</label>
                </div>
                <button className='w-32 border shadow-md border-white rounded text-white medium-font ' onClick={handleFormSubmit}>
                    Submit
                </button>

            </div> 
        </>
    )
}

export default NewsLetterForm
