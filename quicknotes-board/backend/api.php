<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

/* GET ALL NOTES */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $stmt = $pdo->query("SELECT * FROM notes ORDER BY id DESC");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

/* CREATE NOTE */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);

    $stmt = $pdo->prepare(
        "INSERT INTO notes (title, content, color)
         VALUES (?, ?, ?)"
    );

    $stmt->execute([
        $data['title'],
        $data['content'],
        $data['color']
    ]);

    echo json_encode(["message" => "Note Added Successfully"]);
}

/* DELETE NOTE */
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $data = json_decode(file_get_contents("php://input"), true);

    $stmt = $pdo->prepare("DELETE FROM notes WHERE id = ?");
    $stmt->execute([$data['id']]);

    echo json_encode(["message" => "Note Deleted"]);
}

/* UPDATE NOTE */
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

    $data = json_decode(file_get_contents("php://input"), true);

    $stmt = $pdo->prepare(
        "UPDATE notes SET title = ?, content = ?, color = ? WHERE id = ?"
    );

    $stmt->execute([
        $data['title'],
        $data['content'],
        $data['color'],
        $data['id']
    ]);

    echo json_encode(["message" => "Note Updated"]);
}