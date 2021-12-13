import React from 'react'
import styles from './index.module.less'

export const Intro = () => {
  return (
    <section className={styles.intro_content}>
      <div className={styles.intro_text}>通过万有引力NFT您仅需要通过简单页面交互就能搭 建出项目的官网和智能合约的部署，助力您的NFT项目快速、低成本上线</div>
      <div className={styles.create_btn}>创建项目</div>
    </section>
  )
}
