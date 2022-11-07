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
            'shipment'=>$shipment
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
        $shipment = Shipment::find($shipment_id);

        // if the shipment doesn't belong to user -> return
        if($user_id != $shipment->user_id) {
            return response()->json([
                'message'=>'unauthorized',
            ], 401);
        }

        // delete the shipment itself
        $shipment->delete();

        return response()->json([
            'status'=>'success',
        ], 200);
    }

    //function to update a shipment's data
    public function updateShipment(Request $request) {

        $user_id = Auth::id();

        // create new shipment object
        $shipment = Shipment::find($request->shipment_id);

        // DB::table('shipments')->updateOrInsert(
        //     ['id' => $request->shipment_id],
        //     [
        //         'shipment_name' => $request->shipment_name,
        //         'customer_name' => $request->customer_name,
        //         'customer_address' => $request->customer_address,
        //         'customer_phone_number' => $request->customer_phone_number,
        //         'waybill' => $request->waybill,
        //     ]
        // );

        // // if the shipment doesn't belong to user -> return
        if($user_id != $shipment->user_id) {
            return response()->json([
                'message'=>'unauthorized',
            ], 401);
        }

        $shipment->shipment_name = $request->shipment_name;
        $shipment->customer_name = $request->customer_name;
        $shipment->customer_address = $request->customer_address;
        $shipment->customer_phone_number = $request->customer_phone_number;
        $shipment->waybill = $request->waybill;
        $shipment->save();

        return response()->json([
            'status'=>'success',
            'shipment'=>$shipment
        ], 200);
    }
}