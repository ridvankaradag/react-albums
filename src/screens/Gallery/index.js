import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {Link} from "react-router-dom";
import Spinner from '../../components/Spinner';

import styles from './index.module.css'

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)

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
            setLoading(false)   
        })
        
    }
    return (
        <>
        <h2 className={styles.title}>Gallery</h2>
        {
            loading && <Spinner/>
        }
        <div className={styles.gallery}>
            {
                images.map(image => (
                    <a className={styles.item} key={image.id} href={image.url} target="_blank" rel="noopener noreferrer">
                        <img src={image.url} loading="lazy" alt={`Gallery Item ${image.id}`} className={styles.image}/>
                    </a>
                ))
            }
            {
                !loading && images.length < 1 && (
                    <p>You haven't uploaded any images. <Link to="/">Upload now</Link></p> 
                )
            }
        </div>
        </>
    )
}

export default Gallery;