import React from 'react'
import TermsOfService from '@/app/components/tos'
function page() {
  return (
    <TermsOfService
      companyName='Kalra Software Solutions'
      contactEmail='hello@kaltq.com'
      jurisdiction='India'
      arbitrationAssociation="Indian Council of Arbitration"
      lastUpdatedDate="May 25, 2024" />
  )
}

export default page