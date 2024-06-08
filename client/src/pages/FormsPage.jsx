import React from 'react'
import { useState } from 'react';
import Header from '@/components/Header';
import FormsTable from '@/components/FormsTable';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input'

const FormsPage = () => {
  const [eventFilter, setEventFilter] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-6 py-4 flex flex-col gap-4 text-left">
        <div>
          <h2 className="font-bold text-2xl">Forms for: Borther Richie’s secret finance forms and transactions</h2>
          <p>Created: July 5, 2003 | Last Modified: July 5, 2003</p>
        </div>

        <div className="flex justify-between">
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

        <FormsTable className="border-2" eventFilter={eventFilter} />
      </main>
    </div>
  )
}

export default FormsPage
