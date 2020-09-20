import React, { useState } from 'react';
import {storage} from '../../config/firebase';
import * as firebase from 'firebase';

import styles from './index.module.css';
import Preview from '../../components/Preview';

const PhotoUpload = () => {

    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragging = (e, setValue) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(setValue)
    }

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
      if (files && files.length > 0) {
          files = files.filter(f => !images.includes(f.name))
          setImages(files)
      }
      console.log('images', images)
    }
      
    const handleSubmit = e => {
      e.preventDefault();
      e.stopPropagation();
      console.log('images', images)

      images.map(image => {
          const uploadTask = storage.ref(`images/${image.name}`).put(image);
          uploadTask.on('state_changed', 
          (snapshot) => {
            // progrss function ....
            
          }, 
          (error) => {
                // error function ....
            console.log(error);
          }, 
        () => {
            // complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url); 
              firebase.database().ref('urls').push({
                  url : url
              })
            })
        });
      })
    }

    return (
      <>
      <form className={`${styles.form} ${isDragging ? styles.upload : ''}`} 
          encType="multipart/form-data"
          onDrop={e => handleDrop(e)}
          onDragOver={e => handleDragging(e, true)}
          onDragEnter={e => handleDragging(e, true)}
          onDragLeave={e => handleDragging(e, false)}
          onSubmit={e => handleSubmit(e)}
      >
          <div className={styles.inputContainer}>
              <input onChange={e => handleInputChange(e)} className={styles.input} type="file" name="files[]" id="file" multiple />
              <label htmlFor="file" className={styles.label}><strong>Choose a file</strong></label>
              <span> or drag it here.</span>
              <button className={styles.button} type="submit" disabled={images.length < 1}>Upload</button>
          </div>
      </form>
      <Preview images={images}/>
      </>
    )
}

export default PhotoUpload;