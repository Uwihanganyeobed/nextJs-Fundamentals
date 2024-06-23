import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href='/complex-dashboard'>Default</Link>
    </Card>
  )
}

export default ArchivedNotifications