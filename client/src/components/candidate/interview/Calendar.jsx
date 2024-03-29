import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';



const localizer = momentLocalizer(moment);

function AppointmentCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counselorName, setCounselorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentFee, setAppointmentFee] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [requestStatusMessage, setRequestStatusMessage] = useState('');


  useEffect(() => {
    fetchAppointments();
    fetchBooked();
  }, []);

  const fetchAppointments = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const appCounsellorId = localStorage.getItem('appcounsellorId');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        const response = await axios.get(
          `http://localhost:8080/api/client/appointment/get-appointments/counsellors/${appCounsellorId}`,
          config
        );

        if (response.status === 200) {
          const appointments = response.data.map((appointment) => {
            const startTime = moment(appointment.date + 'T' + appointment.timeSlot).format('hh:mma');
            const endTime = moment(appointment.date + 'T' + appointment.timeSlot)
              .add(1, 'hour')
              .format('hh:mma');
            const title = `${startTime}-${endTime} Appointment `;
            return {
              id: appointment.id,
              title: title,
              start: new Date(appointment.date + 'T' + appointment.timeSlot),
              end: new Date(appointment.date + 'T' + appointment.timeSlot),
            };
          });
          setEvents(appointments);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  

  const handleSlotSelect = (slotInfo) => {
    const selectedDate = moment(slotInfo.start);
    const currentDate = moment();
    setSelectedSlot(slotInfo);

    if (selectedDate.isSameOrAfter(currentDate, 'minute')) {
      setSelectedSlot(slotInfo);
      // Extract the selected date and time from the slotInfo
      const selectedDate = slotInfo.start.toISOString();
      const selectedTime = moment(slotInfo.start).format('HH:mm'); // Format time as 'HH:mm'

      const counselorName = localStorage.getItem('appcounsellorName');

      // Extract only the date portion (YYYY-MM-DD)
      const dateOnly = selectedDate.substring(0, 10);

      setCounselorName(counselorName);
      setAppointmentDate(dateOnly);
      setAppointmentTime(selectedTime);
      setAppointmentFee('Rs.2000'); // Replace with the actual appointment fee

      setIsModalOpen(true);

      // Store the selected date and time in localStorage
      localStorage.setItem('appointmentDate', dateOnly);
      localStorage.setItem('appointmentTime', selectedTime);

      setIsModalOpen(true);
    } else {
      // Handle the case where the selected date is in the past
      setErrorMessage('Please select a valid time slot.');
      setErrorVisible(true);
    }
  };


  const handleModalCancel = () => {
    setSelectedSlot(null);
    setIsModalOpen(false);
  };



  const addRequestToBackend = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken, id } = JSON.parse(authData);
        const appCounsellorId = localStorage.getItem('appcounsellorId');
        const appointmentDate = localStorage.getItem('appointmentDate');
        const appointmentTime = localStorage.getItem('appointmentTime');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };

        const requestData = {
          userId: id,
          counsellorId: appCounsellorId,
          date: appointmentDate, // Correct format
          timeSlot: appointmentTime,
          requested: 1,
          accepted: 0, // Correct format
        };

        const response = await axios.post(
          'http://localhost:8080/api/client/appointment-requests/create-request',
          requestData,
          config
        );

        if (response.status === 200) {
          console.log('Request created successfully');
          setRequestStatusMessage('Request sent to the counselor. Please wait for acceptance.');
          handleModalCancel();
        } else {
          console.error('Error creating request');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const fetchBooked = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const appCounsellorId = localStorage.getItem('appcounsellorId');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        const response = await axios.get(
          `http://localhost:8080/api/v1/external-booked/get-booked-slots/${appCounsellorId}`,
          config
        );
  
        if (response.status === 200) {
          const bookedSlots = response.data;
  
          // Convert the booked slots data into events
          const bookedEvents = bookedSlots.map((slot) => {
            const start = moment(slot.date + 'T' + slot.startTime);
            const end = moment(slot.date + 'T' + slot.endTime);
            return {
              id: slot.bookedId,
              title: 'Not Available', // You can customize the title
              start: start.toDate(),
              end: end.toDate(),
            };
          });
  
          // Merge the booked events with existing events
          const allEvents = [...events, ...bookedEvents];
  
          setEvents(allEvents);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  
  

  return (
    <div className="h-full">
      <div className="h-full mt-4">
        <Calendar
          localizer={localizer}
          defaultView={Views.WEEK}
          events={events}
          min={new Date(0, 0, 0, 9, 0, 0)}
          max={new Date(0, 0, 0, 18, 0, 0)}
          onSelectSlot={handleSlotSelect}
          startAccessor="start"
          endAccessor="end"
          selectable
          step={30}
        />
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-4 bg-white rounded">
              <h2 className="mb-2 text-lg font-bold">Schedule Appointment</h2>
              <p>Counselor Name: {counselorName}</p>
              <p>Appointment Date: {appointmentDate} </p>
              <p>
                Appointment Time: {moment(appointmentTime, 'HH:mm').format('hh:mm A')} -{' '}
                {moment(appointmentTime, 'HH:mm')
                  .add(60, 'minutes')
                  .format('hh:mm A')}
              </p>
              <p>Appointment Fee: {appointmentFee}</p>
              <br />
              <p>Do you want to schedule the appointment?</p>
              <br />
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="px-3 py-1 mr-2 bg-gray-300 rounded"
                  onClick={handleModalCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-white bg-blue-500 rounded"
                  onClick={addRequestToBackend}
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Error Modal */}
        {errorVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-4 bg-white rounded">
              <h2 className="mb-2 text-lg font-bold">Error</h2>
              <p>{errorMessage}</p>
              <button
                type="button"
                className="px-3 py-1 mt-2 bg-gray-300 rounded"
                onClick={() => setErrorVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {requestStatusMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-4 bg-white rounded">
              <h2 className="mb-2 text-lg font-bold">Request Status</h2>
              <p>{requestStatusMessage}</p>
              <button
                type="button"
                className="px-3 py-1 mt-2 bg-gray-300 rounded"
                onClick={() => {
                  setRequestStatusMessage('');
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );

}

export default AppointmentCalendar;
