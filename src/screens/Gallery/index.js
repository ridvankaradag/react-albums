import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import styles from './index.module.css'

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        handleFirebase()
    }, []);

    const handleFirebase = () => {
        firebase.database().ref('urls').once('value').then((snapshot) => {
            const galleryObj = snapshot.val();
            const gallery = Object.keys(galleryObj).filter(key => !images.includes(key)).map(key => ({
                ...galleryObj[key],
                id: key,
              }));
            console.log(gallery)
            setImages(gallery)   
        })
        
    }
    return (
        <>
        <h2 className={styles.title}>Gallery</h2>
        <div className={styles.gallery}>
            {
                images.map(image => (
                    <a className={styles.item} key={image.id} href={image.url} target="_blank" rel="noopener noreferrer">
                        <img src={image.url} alt={`Gallery Item ${image.id}`} className={styles.image}/>
                    </a>
                ))
            }
        </div>
        </>
    )
}

export default Gallery;