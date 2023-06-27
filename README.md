- Muita dificuldade em saber as dúvidas dos alunos.
- Eu Tenho que responder os alunos e eu me perco em quais dúvidas já foram despondidas.

______________________

### DDD (Domain-driven Design)

Design dirigido à domínio

## Domínio

- Domain Experts
    É a pessoa que entende do serviço. Ele usa nomeclaturas diferentes da dos Devs.
    - Conversa
- Linguagem ubíqua

- Usuário
    - Cliente
    - Fornecedor
    - Atendente
    - Darmen


- Agregados
- Value Objects
- Eventos de demínio
- Submoninios (Bounced Contexts)
- Entidades
- Casos de uso

______________________

# Conceitos

- Aggregate
    - Quando a gente tem 2 ou mais entidades que são trabalhadas juntas.

- WatchedList
    - Na hora da edição
        - Adicionar um novo anexo (create)
        - Remover o segundo anexo que tinha sido criado (delete)
        - Editar um anexo existente (update)

## Exemplo

- Order -> OrderItem[]
- Order -> Shipping

- Question -> Attachment[]
