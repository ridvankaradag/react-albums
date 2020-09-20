import React from 'react';

import styles from './index.module.css';

const PhotoUpload = () => {

      const handleInputChange = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target.files)
      }

    return (
        <form className={styles.form} 
            encType="multipart/form-data"
        >
            <div className={styles.inputContainer}>
                <input onChange={e => handleInputChange(e)} className={styles.input} type="file" name="files[]" id="file" multiple />
                <label htmlFor="file"><strong>Choose a file</strong><span className={styles.dragnDrop}> or drag it here</span>.</label>
                <button className={styles.button} type="submit">Upload</button>
            </div>
        </form>
    )
}

export default PhotoUpload;