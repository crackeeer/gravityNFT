import React, { useCallback, useEffect, useState } from "react"
import { AuthClient } from "@dfinity/auth-client"
import styles from './index.module.less'
import logo from '../../assets/logo.png'

export const Header = () => {
  const [signedIn, setSignedIn] = useState(false)
  const [principal, setPrincipal] = useState("")
  const [client, setClient] = useState()

  const initAuth = async () => {
    const client = await AuthClient.create()
    const isAuthenticated = await client.isAuthenticated()

    setClient(client)

    if (isAuthenticated) {
      const identity = client.getIdentity()
      const principal = identity.getPrincipal().toString()
      setSignedIn(true)
      setPrincipal(principal)
    }
  }

  const signIn = async () => {
    const { identity, principal } = await new Promise((resolve, reject) => {
      client.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          const identity = client.getIdentity()
          const principal = identity.getPrincipal().toString()
          resolve({ identity, principal })
        },
        onError: reject,
      })
    })
    setSignedIn(true)
    setPrincipal(principal)
  }

  const signOut = async () => {
    await client.logout()
    setSignedIn(false)
    setPrincipal("")
  }

  useEffect(() => {
    initAuth()
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.auth_section}>

        {!signedIn && client ? (
          <div onClick={signIn} className={styles.auth_button}>链接钱包</div>
        ) : null}

        {signedIn ? (
          <>
            {/* <p>Signed in as: {principal}</p> */}
            <div onClick={signOut} className={styles.auth_button}>{principal}</div>
          </>
        ) : null}

      </div>
    </header>

  )
}
