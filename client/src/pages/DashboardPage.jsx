import { useState } from 'react';

import DashboardTable from '@/components/dashboardtable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CirclePlus, SlidersHorizontal } from 'lucide-react'
import Header from '@/components/Header';

const DashboardPage = () => {
  const [eventFilter, setEventFilter] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-6 py-4 flex flex-col gap-4 text-left">
        <div>
          <h2 className="font-bold text-2xl">Events Dashboard</h2>
          <p>Here&apos;s a list of all the events.</p>
        </div>

        <div className="flex justify-between">
          {/* TODO: Handle event creation */}
          <Button>
            <CirclePlus className="mr-2 w-4" /> Create Event
          </Button>

          <div className="flex gap-4">
            <Input
              placeholder="Search event names..."
              onChange={e => setEventFilter(e.target.value)}
            />

            {/* TODO: Is this really necessary? */}
            <Button>
              <SlidersHorizontal className="mr-2 w-4" /> Filter
            </Button>
          </div>
        </div>

        <DashboardTable className="border-2" eventFilter={eventFilter} />
      </main>
    </div>
  )
}

export default DashboardPage
