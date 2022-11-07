import React from 'react'

//packages
import { useFormik } from 'formik';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


// icons import 
import { IoIosCloseCircle } from 'react-icons/io'

//component imports
import InputField from './InputField';

function AddShipmentForm({
    isHidden,
    setIsHidden
}) {

    //formik hook
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:{
            shipmentName: "",
            customerName: "",
            customerAddress: "",
            customerPhoneNumber: "",
            waybill: "",
        },
    })

  return (
    // container window
    <div
        className={`${isHidden?'hidden':''} absolute bg-black w-[100%] bg-opacity-40 h-[100vh] transition-opacity duration-500`}
        // onClick={() => setIsHidden(true)}
    >

        {/* form container */}
        <div
            className='bg-[#5c6478] min-w-[440px] w-[60%] max-w-[760px] mx-auto mt-[130px] rounded-md p-2 flex flex-col items-center'
            onClick={(e) => {e.stopPropagation()}}    
        >
            {/* close form button */}
            <IoIosCloseCircle
                className='hover:cursor-pointer hover:opacity-70 transition-all scale-[1.2] ml-auto'
                color='white'
                onClick={() => setIsHidden(true)}
            />

            {/* form title */}
            <span className='text-white font-semibold text-2xl m-5'>Add Shipment</span>

            <form autoComplete='off'>

                {/* Shipment Name */}
                <InputField
                    id='shipmentName'
                    label='Shipment Name'
                    type='text'
                    value={values.shipmentName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                        touched.shipmentName && errors.shipmentName ?
                        errors.shipmentName:''
                    }
                />

                {/* Customer Name */}
                <InputField
                    id='customerName'
                    label='Customer Name'
                    type='text'
                    value={values.customerName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                        touched.customerName && errors.customerName ?
                        errors.customerName:''
                    }
                />

                {/* Customer Phone */}
                <InputField
                    id='customerPhoneNumber'
                    label='Customer Phone Number'
                    type='phone'
                    value={values.customerPhoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                        touched.customerPhoneNumber && errors.customerPhoneNumber ?
                        errors.customerPhoneNumber:''
                    }
                />

            </form>
        </div>

    </div>
  )
}

export default AddShipmentForm