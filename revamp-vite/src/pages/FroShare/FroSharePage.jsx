import React from 'react'
import Elevate from '../../components/FroShare/Elevate'
import Benifits from '../../components/FroShare/Benifits'

import Brands from '../../components/FroShare/Brand'
import ScrollComponent from '../../components/FroShare/ScrollComponent'
import EarnbySharing from '../../components/FroShare/EarnBySharing'
import Faq from '../../components/FroShare/FAQ'
import Unlock from '../../components/FroShare/Unlock'

const FroSharePage = () => {
  return (
    <>
      <Elevate />
      <Benifits />
      <Unlock />
      <Brands />
      <ScrollComponent />
      <EarnbySharing />
      <Faq />
    </>
  )
}

export default FroSharePage