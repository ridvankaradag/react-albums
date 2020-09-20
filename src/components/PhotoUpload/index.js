import React from 'react';

import styles from './index.module.css';

const PhotoUpload = () => {

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        let files = [...e.dataTransfer.files];

        console.log('files', files);
  
        if (files && files.length > 0) {
            const existingFiles = []
            files = files.filter(f => !existingFiles.includes(f.name))
            
            e.dataTransfer.clearData();
        }
      }

      const handleInputChange = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target.files)
      }

    return (
        <form className={styles.form} 
            encType="multipart/form-data"
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
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