<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    use HasFactory;

    /**
     * Get the shipment's waybill.
     */
    public function waybill()
    {
        return $this->belongsTo(Waybill::class);
    }
}
