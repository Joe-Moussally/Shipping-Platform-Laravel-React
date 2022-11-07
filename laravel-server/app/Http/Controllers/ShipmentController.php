<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Shipment;
use App\Models\Waybill;
use App\Models\User;

use Auth;

class ShipmentController extends Controller
{
    //function to create a shipment
    public function createShipment(Request $request) {

        $user_id = Auth::id();

        // create new shipment object
        $shipment = new Shipment;
        $shipment->shipment_name = $request->shipment_name;
        $shipment->customer_name = $request->customer_name;
        $shipment->customer_address = $request->customer_address;
        $shipment->customer_phone_number = $request->customer_phone_number;
        $shipment->waybill = $request->waybill;
        $shipment->user_id = $user_id;
        $shipment->save();

        return response()->json([
            'status'=>'success',
        ], 200);

    }

    //function to get the user's shipment
    public function getUserShipments() {

        $user_id = Auth::id();
        $shipments = User::find($user_id)->shipments;

        return response()->json([
            'status'=>'success',
            'shipments'=>$shipments
        ], 200);
    }

    //function to delete a user's shipment
    public function deleteShipment($shipment_id) {

        $user_id = Auth::id();

        //if the shipment doesn't belong to user -> return
        if($user_id != $shipment->user_id) {
            return response()->json([
                'message'=>'unauthorized',
            ], 401);
        }

        //delete the shipment itself
        Shipment::find($shipment_id)->delete();

        return response()->json([
            'status'=>'success',
        ], 200);
    }

    //function to update a shipment's data
    public function updateShipment(Request $request) {

        $user_id = Auth::id();

        // update shipment object
        // $shipment = Shipment::find($request->shipment_id);

        //if the shipment doesn't belong to user -> return
        // if($user_id != $shipment->user_id) {
        //     return response()->json([
        //         'message'=>'unauthorized',
        //     ], 401);
        // }

        // $shipment->shipment_name = $request->shipment_name;
        // $shipment->customer_name = $request->customer_name;
        // $shipment->customer_address = $request->customer_address;
        // $shipment->customer_phone_number = $request->customer_phone_number;
        // $shipment->save();

        //update the waybill
        // $waybill = $shipment->waybill;
        // $waybill->shipping_cost = $request->shipping_cost;
        // $waybill->tax = $request->tax;
        // $waybill->save();

        return response()->json([
            'status'=>'success',
        ], 200);
    }
}