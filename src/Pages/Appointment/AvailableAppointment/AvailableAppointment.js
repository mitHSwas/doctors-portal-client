import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP');
    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

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
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;