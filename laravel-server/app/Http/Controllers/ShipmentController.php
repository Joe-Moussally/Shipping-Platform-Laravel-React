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

        //create the waybill
        $waybill = new Waybill;
        $waybill->shipping_cost = $request->shipping_cost;
        $waybill->tax = $request->tax;
        $waybill->save();

        // create new shipment object
        $shipment = new Shipment;
        $shipment->shipment_name = $request->shipment_name;
        $shipment->customer_name = $request->customer_name;
        $shipment->customer_address = $request->customer_address;
        $shipment->customer_phone_number = $request->customer_phone_number;
        $shipment->waybill_id = $waybill->id;
        $shipment->user_id = $user_id;
        $shipment->save();

        return response()->json([
            'status'=>'success',
            'user_id'=>$user_id,
            'shipment'=>$shipment,
            'waybill' => $waybill
        ], 200);

    }

    //function to get the user's shipment
    public function getUserShipments() {

        $user_id = Auth::id();
        $shipments = User::find($user_id)->shipments;

        //getting the waybill of each shipment
        foreach ($shipments as $shipment) {
            $shipment['waybill'] = Waybill::find($shipment->waybill_id);
        }

        return response()->json([
            'status'=>'success',
            'shipments'=>$shipments
        ], 200);
    }

    //function to delete a user's shipment
    public function deleteShipment($shipment_id) {

        $user_id = Auth::id();
        $shipment = Shipment::find($shipment_id);

        if($user_id != $shipment->user_id) {
            return response()->json([
                'message'=>'unauthorized',
            ], 401);
        }

        // delete the shipment waybill
        $shipment->waybill->delete();

        //delete the shipment itself
        $shipment->delete();

        return response()->json([
            'status'=>'success',
        ], 200);

    }
}
