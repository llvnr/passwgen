<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'passwgen'
], function ($router) {

    Route::post('/generator', function() {

        $longueur = request('longueur');
        $inclure_symboles = request('symboles');
        $inclure_chiffres = request('chiffres');
        $inclure_minuscules = request('minuscules');
        $inclure_majuscules = request('majuscules');
        $inclure_caracteres_ambigus = request('ambigu');
        $clientIP = request()->ip();

        if($longueur < 16 || $longueur > 50){

            return response()->json([
                "status" => false,
                "message" => "La longueur du mot de passe doit être compris entre 16 et 50 caractères."
            ]);

        } else {

            $caracteres = '';
            $mot_de_passe = '';
            
            // Ajouter les caractères possibles en fonction des paramètres
            if ($inclure_symboles) {
                $caracteres .= '@#$%';
            }
            if ($inclure_chiffres) {
                $caracteres .= '0123456789';
            }
            if ($inclure_minuscules) {
                $caracteres .= 'abcdefghijklmnopqrstuvwxyz';
            }
            if ($inclure_majuscules) {
                $caracteres .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if ($inclure_caracteres_ambigus) {
                $caracteres .= '{}[]()/\'"~,;:.<>`';
            }
            
            if(strlen($caracteres) == 0){
                $caracteres .= 'abcdefghijklmnopqrstuvwxyz';
            }

            // Générer le mot de passe
            for ($i = 0; $i < $longueur; $i++) {
                $mot_de_passe .= $caracteres[mt_rand(0, strlen($caracteres)-1)];
            }

            Log::info("[PassWGen] - Le service a été solliciter pour générer un mot de passe d\'une longueur de '.$longueur.' caractères.");
    
            return response()->json([
                "status" => true,
                "password" => $mot_de_passe
            ]);

        }

    });

});