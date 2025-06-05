<?php
function mostrarMenu() {
    echo "\nEscolha uma opção:\n";
    echo "1 - Adicionar item\n";
    echo "2 - Remover item\n";
    echo "3 - Listar itens\n";
    echo "4 - Consultar quantidade\n";
    echo "5 - Sair\n";
}

$listaCompras = [];

while (true) {
    mostrarMenu();
    $opcao = readline("Digite sua opção: ");

    case 1:
        $item = readline("Digite o nome do item: ");
        array_push($listaCompras, $item);
        echo "$item adicionado à lista.\n";

    case 2:
        $item = readline("Digite o nome do item a ser removido: ");
        $indice = array_search($item, $listaCompras);
        if ($indice !== false) {
            array_splice($listaCompras, $indice, 1);
            echo "$item removido da lista.\n";
        } else {
            echo "$item não encontrado na lista.\n";
        }

    case 3:
        echo "\nItens na lista:\n";
        foreach ($listaCompras as $item) {
            echo "- $item\n";
        }

    case 4:
        echo "\nQuantidade total de itens na lista: " . count($listaCompras) . "\n";

    case 5:
        echo "Saindo do programa. Até mais!\n";
        break;
}
?>
