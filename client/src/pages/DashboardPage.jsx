import { useState } from "react";

import DashboardTable from "@/components/dashboardtable";
import EventSelectModal from "@/components/EventSelectModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import CreateEventModal from "@/components/CreateEventModal";

const DashboardPage = () => {
  const [eventFilter, setEventFilter] = useState("");

  const [showCreateEventDialog, setShowCreateEventDialog] = useState(false);
  const [showEventSelectModal, setShowEventSelectModal] = useState(false);

  // TODO: Pass needed args
  function handleEventSelect() {
    setShowEventSelectModal(true);
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="px-6 py-4 flex flex-col gap-4 text-left">
          <div>
            <h2 className="font-bold text-2xl">Events Dashboard</h2>
            <p>Here's a list of all the events.</p>
          </div>

          <div className="flex justify-between">
            <Button onClick={() => setShowCreateEventDialog(true)}>
              <CirclePlus className="mr-2 w-4" /> Create Event
            </Button>

            <div className="flex gap-4">
              <Input
                placeholder="Search event names..."
                onChange={(e) => setEventFilter(e.target.value)}
              />

              {/* TODO: Is this really necessary? */}
              <Button>
                <SlidersHorizontal className="mr-2 w-4" /> Filter
              </Button>
            </div>
          </div>

          <DashboardTable
            className="border-2"
            eventFilter={eventFilter}
            onEventSelect={handleEventSelect}
          />
        </main>
      </div>

      <EventSelectModal
        open={showEventSelectModal}
        onOpenChange={setShowEventSelectModal}
        onExit={() => setShowEventSelectModal(false)}
      />

      {/* TODO: Proper handling of event creation */}
      <CreateEventModal
        open={showCreateEventDialog}
        onOpenChange={setShowCreateEventDialog}
        onEventCreate={() => setShowCreateEventDialog(false)}
      />
    </>
  );
};

export default DashboardPage;
