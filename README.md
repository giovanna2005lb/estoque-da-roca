# Estoque da Roça — CitizenTech

Giovanna Laturague Bueno RM 556242

Aplicativo mobile da disciplina **Mobile Application Development**, desenvolvido a partir da solução CitizenTech escolhida na Global Solution.

## Descrição da solução

### Problema
Para o pequeno produtor, organizar os insumos do armazém é uma dificuldade do dia a dia.

Essa falta de organização atrapalha o planejamento das compras. Sem conferir o estoque, o produtor pode comprar o que já tem, deixando dinheiro parado em
excesso, ou perceber só na hora do plantio que falta algo, o que pode causar atrasos e deslocamentos extras até o comércio. Para quem vive longe da cidade
ou tem pouca margem financeira, cada viagem e cada compra desnecessária pesam.

O problema é contínuo: a cada novo cultivo, o produtor repete o mesmo ciclo de conferir o armazém, estimar o que precisa e decidir o que comprar, quase
sempre sem um registro simples e confiável.

### Solução
O **Estoque da Roça** ajuda o pequeno produtor a organizar o armazém e preparar as compras do próximo cultivo. Para cada item, ele registra:

- nome do item (por exemplo, sementes de feijão);
- unidade de medida (kg, L ou un.);
- quantidade em estoque;
- quantidade planejada para o próximo cultivo;
- local no armazém (opcional).

O app compara o estoque com o que o produtor planeja usar e mostra o que falta comprar. Exemplo: com 3 kg de sementes guardados e 5 kg planejados, aparece **"Comprar 2 kg"**. Se o estoque cobre o planejado, aparece **"Estoque suficiente"**.

O app **não recomenda dosagens, insumos ou práticas de cultivo**. A quantidade planejada é sempre informada pelo produtor.

### Benefício
O Benefício vem de uma precisão na hora da compra, tendo menos atrasos para a compra das Sementes por não saber o que é necessário, e menos problema com quantidades compradas em excesso.

## Funcionalidades

- Login com usuário de teste.
- Lista dos itens do armazém, com indicação do que falta comprar.
- Formulário de cadastro com validação dos campos.
- Tela de detalhe de cada item.
- Navegação entre as telas.
- Persistência local: os itens cadastrados continuam salvos ao recarregar o app.

## Stack

- React Native com Expo
- React Navigation (native stack)
- AsyncStorage (`@react-native-async-storage/async-storage`)
- JavaScript

## Usuário de teste

| Campo | Valor |
|---|---|
| Usuário | `produtor` |
| Senha | `123456` |

