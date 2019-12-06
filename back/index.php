<?php


use \Firebase\JWT\JWT;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;



require 'vendor/autoload.php';
$app = new \Slim\App;

$app->get('/hello','toto');
$app->get('/products', 'getProducts');
$app->post('/inscription', 'inscription');
$app->post('/login', 'login');



header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');


function toto($request,$response,$args){
    return $response->write("toto");
}


function getProducts(Request $request, Response $response, array $args)  
{
    $path = 'products.json'; 
    $produits = file_get_contents("$path");
    $response->getBody()->write("$produits");
    return $response;             
}

function inscription(Request $request, Response $response, array $args)  
{
    $body = $request->getParsedBody(); // Parse le body
    $user = array('nom' => $body['nom'], 
          'prenom' => $body['prenom'],
          'adresse' => $body['adresse'],
          'codePostal' => $body['codePostal'],
          'ville' => $body['ville'],
          'telephone' => $body['telephone'],
          'email' => $body['email'],
          'civilite' => $body['civilite'],
          'login' => $body['login']
    );

    return json_encode($user);
              
}

const SECRET = "makey1234567";
$token = new \Slim\Middleware\JwtAuthentication([
    "path" => "/api/secure",
    "secure" => false,
    "passthrough" => ["/login"],
    "secret" => SECRET,
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'AUTO');
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
]);


$app->add($token);

function login($request, $response, $args) {
    $body = $request->getParsedBody();
    $userid = $body['login'] ;
    $email = $body['mdp'];
    $issuedAt = time();
    $expirationTime = $issuedAt + 60; // jwt valid for 60 seconds from the issued time
    $payload = array(
        'userid' => $userid,
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($payload,SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}")->withHeader("Content-Type", "application/json");
    $data = array('name' => 'Emma', 'age' => 48,'token' => $token_jwt);
    return $response->withHeader("Content-Type", "application/json")->withJson($data);
}





$app->run();

?>