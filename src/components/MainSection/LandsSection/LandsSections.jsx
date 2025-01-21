import React from 'react'
import Carousel from '../../customElements/Carousel'

import styles from './LandsSection.module.css'
const LandsSections = ({ landData, isLoading }) => {
  return (
    <>
      <div className={styles.infiniteContainer}>
        {landData.map((item, index) => (
          <div key={index} className={styles.infiniteItem}>
            {/* <p>{item.id}</p> */}
            <Carousel images={item.land_media} visibleCount={1} />
          </div>
        ))}
      </div>
      {isLoading && (
        <div class="loader_align">
          <p class="loader"></p>
        </div>
      )}
    </>
  );
}

export default LandsSections