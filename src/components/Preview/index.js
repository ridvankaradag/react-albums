import React from 'react';
import styles from './index.module.css';

const Preview = ({images}) => (
    <div className={styles.uploaded}>
        {
            images.map((image, index) => (
                <div key={index} className={styles.preview}>
                    <img src={URL.createObjectURL(image)} className={styles.image} alt={image.name}/>
                </div>
            ))
        }
    </div> 
)

export default Preview;