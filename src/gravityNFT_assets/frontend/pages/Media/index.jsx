import React from 'react'
import styles from './index.module.less'
import twitter from '../../assets/twitter.png'
import telegram from '../../assets/twitter.png'
import instagram from '../../assets/twitter.png'

const mediaArr = [
  {
    src: twitter,
    url: 'https://twitter.com/home',
    alt: 'twitter'
  },
  {
    src: telegram,
    url: 'https://twitter.com/home',
    alt: 'telegram'
  },
  {
    src: instagram,
    url: 'https://twitter.com/home',
    alt: 'instagram'
  },
]

export const Media = () => {
  return (
    <div className={styles.media_box}>
      {
        mediaArr.map((item, index) => (
          <div className={styles.media} key={index}>
            <img src={item.src} alt={item.alt} onClick={() => { window.open(item.url) }} />
          </div>

        ))
      }
    </div>
  )
}
