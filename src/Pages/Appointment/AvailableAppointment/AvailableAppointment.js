import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const { data: appointmentOption = [] } = useQuery({
        queryKey: ["appointmentOptions"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/appointmentOptions");
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-16'>
            <p className='text-secondary font-bold text-center'>Available Appointments on {format(selectedDate, "PP")}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
                {
                    treatment &&
                    <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;