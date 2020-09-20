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
        <div className={styles.gallery}>
            {
                images.map(image => (
                    <div className={styles.item} key={image.id}>
                        <img src={image.url} alt={`Gallery Item ${image.id}`} className={styles.image}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery;