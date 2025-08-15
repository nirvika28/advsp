"use client"

import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { RequestMeetingForm } from "@/components/request-meeting-form" // Assuming this is the correct import path

const RequestAppointmentModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          onClick={handleOpenModal}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
        >
          Get Consultation
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request an Appointment</DialogTitle>
          <DialogDescription>
            Fill out the form below to request a meeting. We will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <RequestMeetingForm />
      </DialogContent>
    </Dialog>
  )
}

export default RequestAppointmentModal
