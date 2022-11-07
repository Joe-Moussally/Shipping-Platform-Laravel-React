import React, { useState } from 'react'

//packages
import { useFormik } from 'formik';

// icons import 
import { IoIosCloseCircle, IoIosAdd } from 'react-icons/io'

//component imports
import InputField from './InputField';
import Button from './Button';

//formik schema
import { addShipmentSchema } from '../schemas';

//api imports
import { addShipment, updateShipment } from '../api/fetchFunctions';

//redux imports
import { useDispatch } from 'react-redux';
import { AddToShipmentsArray, updateSpecificShipment } from '../redux/slices/shipmentsSlice';


function EditShipmentForm({
    isHidden,
    setIsHidden,
    shipmentId,
    shipmentNameValue,
    customerNameValue,
    customerPhoneNumberValue,
    customerAddressValue,
    waybillValue
}) {

    const dispatch = useDispatch()

    const [errorMessage,setErrorMessage] = useState('')


    //function that is called on submit
    const onSubmit = (values) => {

        //call add shipment api
        updateShipment(shipmentId,values).then((response) => {
            console.log(response.data.shipment)
            //on success -> update the new shipment to the glogal array of shipment state
            dispatch(updateSpecificShipment(response.data.shipment))
            //clear form
            resetForm()

            // //hide form
            setIsHidden(true)  
        })
    }

    //formik hook
    const { resetForm ,values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:{
            shipmentName: shipmentNameValue,
            customerName: customerNameValue,
            customerAddress: customerAddressValue,
            customerPhoneNumber: customerPhoneNumberValue,
            waybill: waybillValue,
        },
        onSubmit,
        validationSchema:addShipmentSchema
    })
    
  return (
    // container window
    <div
        className={`${isHidden?'hidden':''} fixed bg-black w-[100%] bg-opacity-40 h-[100vh] transition-opacity duration-500 top-0 left-0 z-10 overflow-y-auto`}
        // onClick={() => setIsHidden(true)}
    >

        {/* form container */}
        <div
            className='bg-[#454c61] min-w-[440px] w-[60%] max-w-[760px] mx-auto mt-[10px] rounded-md p-2 flex flex-col items-center z-10'
            onClick={(e) => {e.stopPropagation()}}    
        >
            {/* close form button */}
            <IoIosCloseCircle
                className='hover:cursor-pointer hover:opacity-70 transition-all scale-[1.2] ml-auto'
                color='white'
                onClick={() => {
                    resetForm()
                    setIsHidden(true)
                }}
            />

            {/* form title */}
            <span className='text-white font-semibold text-2xl m-5'>Edit Shipment</span>

            <form autoComplete='off' onSubmit={handleSubmit}>

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

                {/* Customer Address */}
                <InputField
                    id='customerAddress'
                    label='Customer Address'
                    type='text'
                    value={values.customerAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                        touched.customerAddress && errors.customerAddress ?
                        errors.customerAddress:''
                    }
                />

                {/* Waybill */}
                <InputField
                    id='waybill'
                    label='Waybill'
                    type='text'
                    value={values.waybill}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                        touched.waybill && errors.waybill ?
                        errors.waybill:''
                    }
                />

                {/* error message container */}
                <div className='flex justify-center m-4'>
                    <span className='text-red-400 font-semibold text-sm text-center'>{errorMessage}</span>
                </div>

                {/* Create Shipment Button */}
                <Button
                    text="Confirm"
                    onClick={handleSubmit}
                    style={{margin:'auto',backgroundColor:'#16244a'}}
                />

            </form>
        </div>

    </div>
  )
}

export default EditShipmentForm