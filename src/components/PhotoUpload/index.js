import React, { useState } from 'react';

import styles from './index.module.css';

const PhotoUpload = () => {

    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true)
      };
      const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false)
      };
      const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true)
      };
      const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false)
        let files = [...e.dataTransfer.files];
        addImages(files)
      }

      const handleInputChange = e => {
        e.preventDefault();
        e.stopPropagation();
        let files = [...e.target.files];
        addImages(files)
      }

      const addImages = files => {
          console.log(files)
        if (files && files.length > 0) {
            files = files.filter(f => !images.includes(f.name))
            setImages(files)
        }
        console.log('images', images)
      } 

    return (
        <>
        <form className={`${styles.form} ${isDragging ? styles.upload : ''}`} 
            encType="multipart/form-data"
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
        >
            <div className={styles.inputContainer}>
                <input onChange={e => handleInputChange(e)} className={styles.input} type="file" name="files[]" id="file" multiple />
                <label htmlFor="file" className={styles.label}><strong>Choose a file</strong></label>
                <span> or drag it here.</span>
                <button className={styles.button} type="submit">Upload</button>
            </div>
        </form>
        <div className={styles.uploaded}>
                {
                    images.map(image => (
                        <div className={styles.preview}>
                            <img src={URL.createObjectURL(image)} className={styles.image} alt={image.name}/>
                        </div>
                    ))
                }
                </div>
        </>
    )
}

export default PhotoUpload;