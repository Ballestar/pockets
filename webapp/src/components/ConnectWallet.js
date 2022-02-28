import React from 'react'
import { useEthers } from '@usedapp/core'

const ConnectWallet = () => {
    const { activateBrowserWallet, deactivate, account } = useEthers()
    return (
      <div>
        {!account && <button onClick={activateBrowserWallet}> Connect </button>}
        {account && <button onClick={deactivate}> Disconnect </button>}
      </div>
    )
}

export default ConnectWallet