import React, { useState } from 'react';
import {storage} from '../../config/firebase';
import * as firebase from 'firebase';

import styles from './index.module.css';
import Preview from '../../components/Preview';
import Spinner from '../../components/Spinner';

const PhotoUpload = () => {

    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [status, setStatus] = useState(null)

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
      const imageType = /image.*/;
      if (files && files.length > 0) {
          files = files.filter(f => !images.includes(f.name) && f.type.match(imageType))
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
            setStatus('loading')
          },
          (error) => {
            console.log(error)
            setStatus('error')
          }, 
        () => {
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
            firebase.database().ref('urls').push({
                url : url
            })
            setStatus('success')
          })
        });
      })
    }

    return (
      <>
      <h2 className={styles.title}>Upload your images</h2>
      {
        status === 'loading' &&
        <Spinner/>
      }
      {
        status === 'success' &&
        <h6 className={styles.success}>All images have been uploaded successfully</h6>
      }
      {
        status === 'error' &&
        <h6 className={styles.error}>Something went wrong</h6>
      }
      <form className={`${styles.form} ${isDragging ? styles.upload : ''}`} 
          encType="multipart/form-data"
          onDrop={e => handleDrop(e)}
          onDragOver={e => handleDragging(e, true)}
          onDragEnter={e => handleDragging(e, true)}
          onDragLeave={e => handleDragging(e, false)}
          onSubmit={e => handleSubmit(e)}
      >
          <div className={styles.inputContainer}>
              <input onChange={e => handleInputChange(e)} className={styles.input} type="file" name="files[]" id="file" multiple accept="image/*"/>
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