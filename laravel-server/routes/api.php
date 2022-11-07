<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ShipmentController;


Route::group(['prefix' => 'v1'], function(){

    //JWT apis
    Route::group(['middleware' => 'api'], function($router) {
        Route::post('/register', [JWTController::class, 'register']);
        Route::post('/login', [JWTController::class, 'login']);
        Route::post('/logout', [JWTController::class, 'logout']);
        Route::post('/refresh', [JWTController::class, 'refresh']);
        Route::post('/profile', [JWTController::class, 'profile']);
    });

    //shipment apis
    Route::group(['prefix' => 'shipment'], function(){
        Route::get('/',[ShipmentController::class, 'getUserShipments']);
        Route::post('/',[ShipmentController::class, 'createShipment']);
        Route::delete('/{shipment_id?}',[ShipmentController::class, 'deleteShipment']);
        Route::post('/update',[ShipmentController::class, 'updateShipment']);
    });
});