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

        create new shipment object
        $shipment = new Shipment;
        $shipment->shipment_name = $request->shipment_name;
        $shipment->customer_name = $request->customer_name;
        $shipment->customer_address = $request->customer_address;
        $shipment->customer_phone_number = $request->customer_phone_number;
        $shipment->waybill_id = 1;
        $shipment->user_id = $user_id;
        $shipment->save();
        $shipment = User::find($user_id)->shipments;

        return response()->json([
            'status'=>'success',
            'user_id'=>$user_id,
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
}
