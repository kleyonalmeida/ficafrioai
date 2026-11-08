# FicaFrioAí — V1 e evolução do produto

**Nome provisório:** FicaFrioAí  
**Data:** 6 de novembro de 2026  
**Tipo de produto:** sistema de gestão por assinatura para empresas de instalação e manutenção de ar-condicionado.  
**Status:** proposta de produto para orientar validação comercial, design e desenvolvimento; funcionalidades ainda não implementadas.

## 1. Visão do produto

O FicaFrioAí ajuda empresas de climatização a organizar o atendimento completo: cadastrar o cliente e seus aparelhos, preparar orçamento, agendar a equipe, executar o serviço pelo celular e acompanhar o recebimento.

**Proposta de valor:** “Do orçamento à manutenção, sua empresa organizada e cada aparelho com seu histórico.”

O comprador é o dono ou gestor da prestadora de serviços. Seus clientes finais são pessoas, lojas, condomínios e outras organizações atendidas por ela. O sistema será vendido à prestadora, por assinatura.

### Público inicial proposto

- Técnicos autônomos que querem profissionalizar a operação.
- Empresas com aproximadamente 2 a 10 técnicos.
- Prestadores que fazem instalação, limpeza, manutenção preventiva e corretiva.
- Negócios que hoje organizam o trabalho com WhatsApp, papel e planilhas.

O foco inicial é atender operações pequenas com rapidez. Redes, franquias e operações industriais complexas entram depois.

## 2. Referências e decisões de produto

As páginas abaixo foram consultadas em 06/11/2026. As observações descrevem o que os fornecedores anunciam publicamente; não houve teste dos sistemas nem contratação dos serviços.

### ProTakip

A página destaca histórico por equipamento, atendimento no celular, orçamento convertido em OS, manutenção recorrente e acompanhamento de recebimentos. Também anuncia uso offline e organização da equipe.

**Inspiração para esta proposta:** priorizar uma rotina simples de atendimento e preservar a memória de cada aparelho.

Fonte: [ProTakip — software para ar-condicionado](https://protakip.com/pt-br/software-ar-condicionado/).

### Conectar

A página apresenta uma plataforma com ordens de serviço, agenda, propostas, financeiro e PMOC. Anuncia também aplicativos, QR Code, estoque, personalização e gestão de múltiplas empresas.

**Inspiração para esta proposta:** estruturar o produto para crescer em módulos, começando pelo atendimento e expandindo conforme a demanda dos assinantes.

Fonte: [Conectar — plataforma de gestão](https://conectarplay.com/).

### Direção escolhida para o FicaFrioAí

As seções seguintes são recomendações próprias de escopo, regras e evolução. Não representam funcionalidades verificadas dos concorrentes. A proposta usa as referências para entender o mercado e prevê identidade, textos e interface próprios.

O diferencial inicial será combinar cadastro rápido, histórico acessível, execução simples pelo celular e acompanhamento claro dos valores a receber.

## 3. Objetivo e limites da V1

Entregar uma versão que uma empresa consiga usar diariamente e pela qual aceite pagar, cobrindo este ciclo:

1. Cadastrar cliente, endereço e equipamento.
2. Criar e compartilhar orçamento.
3. Registrar aprovação e gerar ordem de serviço.
4. Agendar e atribuir um técnico.
5. Executar com checklist, fotos e registro de conclusão.
6. Entregar relatório em PDF.
7. Registrar recebimento e programar a próxima manutenção.

**Formato:** aplicação web responsiva, com experiência adequada no celular e possibilidade de instalação como PWA. A V1 exige conexão para consultar e salvar dados; instalar a PWA não significa funcionamento offline.

**Regra de escopo:** uma empresa contratante por assinatura, podendo atender vários clientes e locais. A plataforma recebe várias empresas assinantes, com dados separados. A gestão de vários CNPJs pelo mesmo assinante ficará para uma atualização.

## 4. Perfis de acesso

### Proprietário / administrador da empresa

Gerencia usuários, configurações, clientes, agenda, serviços, preços, relatórios e financeiro. Acompanha a assinatura do FicaFrioAí.

### Atendente / gestor operacional

Cadastra clientes e equipamentos, prepara orçamentos, agenda serviços e acompanha a execução. O acesso financeiro depende de autorização do administrador.

### Técnico

Visualiza os atendimentos atribuídos a ele e os dados necessários para executá-los. Consulta o histórico dos aparelhos envolvidos, preenche checklist, anexa fotos e registra conclusão. Não acessa o financeiro geral nem a lista completa de clientes.

### Administrador da plataforma

Gerencia empresas assinantes, planos, limites e situação de cobrança. Acesso a dados operacionais para suporte deve ser excepcional, autorizado e registrado.

## 5. Funcionalidades obrigatórias da V1

### 5.1. Conta, empresa e primeiros passos

- Cadastro da empresa e do administrador, login e recuperação de senha.
- Perfil com nome, documento, contato, endereço e logotipo.
- Convite de colaboradores com perfil de acesso e possibilidade de desativação.
- Assistente inicial: configurar empresa, cadastrar primeiro cliente e criar primeira OS.
- Dados de demonstração separados dos dados reais, sem entrar nos indicadores.

### 5.2. Clientes e locais de atendimento

- Cadastro de pessoa física ou jurídica com nome, contato e documento opcional.
- Vários endereços por cliente, com complemento, referência e observações de acesso.
- Busca por nome, telefone e documento.
- Histórico de orçamentos, atendimentos, equipamentos e valores em aberto.
- Importação por CSV com modelo, prévia, validação e identificação de possíveis duplicados.
- Arquivamento de cadastros sem apagar documentos históricos.

### 5.3. Equipamentos

Cada aparelho terá um identificador interno e vínculo com cliente e local.

Campos: tipo, marca, modelo, capacidade em BTU/h, número de série, ambiente, data de instalação quando conhecida, fotos e observações de acesso. Dados técnicos adicionais serão opcionais para evitar travar o primeiro cadastro.

O histórico reunirá serviços executados, técnico responsável, peças e materiais informados, fotos, relatos de defeito e previsão da próxima manutenção. A indicação de próxima visita é operacional, sem substituir a avaliação técnica.

### 5.4. Catálogo e orçamentos

- Catálogo de instalação, limpeza, diagnóstico, manutenção e serviços adicionais.
- Itens de mão de obra e materiais, com descrição, unidade, quantidade e preço.
- Desconto, validade, condições de pagamento e observações.
- Estados: rascunho, enviado, aprovado, recusado e expirado.
- PDF com marca da empresa e compartilhamento pelo usuário.
- Registro manual da aprovação com data, responsável e evidência opcional.
- Conversão em OS preservando os itens e valores aprovados.

A V1 não terá aprovação automática por portal. O orçamento aprovado fica preservado; alterações posteriores devem gerar revisão identificada.

### 5.5. Agenda e distribuição

- Agenda diária e semanal com filtros por técnico e situação.
- Agendamento com início, duração estimada, endereço e responsável.
- Alerta de sobreposição de horários; gestor pode confirmar a exceção com justificativa.
- Reagendamento com registro da alteração.
- Lista de compromissos do dia para o técnico.
- Botão para abrir o endereço no aplicativo de mapas do usuário.

O deslocamento não será calculado automaticamente na V1.

### 5.6. Ordens de serviço

Campos: número, cliente, local, equipamentos envolvidos, tipo de serviço, descrição, prioridade, técnico, agendamento, itens e observações.

**Situações operacionais:** aberta → agendada → em execução → concluída. Também existirão aguardando peça, aguardando cliente e cancelada. As situações de espera mantêm a OS visível como pendência.

- Criação direta ou a partir de orçamento.
- Mais de um equipamento na mesma visita, com checklist e histórico separados por aparelho.
- Fotos de antes e depois, diagnóstico e descrição do trabalho realizado.
- Materiais e quantidades utilizados, sem baixa de estoque nesta versão.
- Registro de início e fim para calcular duração.
- Checklist padrão por tipo de serviço, configurável pelo administrador.
- Aceite do cliente por assinatura desenhada na tela, com nome e data.
- Possibilidade de registrar cliente ausente ou recusa de assinatura com justificativa.
- PDF da OS com itens, registros e evidências selecionadas.
- Retorno ou garantia como nova OS vinculada à anterior, preservando os registros.

A assinatura desenhada registra o aceite no atendimento; não será apresentada como assinatura certificada. Após a conclusão, correções exigem reabertura autorizada e histórico de alterações.

### 5.7. Preventivas e recorrência simples

- Cadastro de plano recorrente com cliente, local, equipamentos, serviços, frequência e próxima data.
- Frequências mensais, trimestrais, semestrais, anuais ou intervalo personalizado em meses.
- Geração de próxima OS em uma janela configurável, sem duplicar a mesma ocorrência.
- Visão de próximas visitas e visitas vencidas.
- Pausa ou encerramento do plano sem apagar visitas anteriores.

As datas seguem o calendário do plano; atrasos na execução não deslocam todas as próximas visitas automaticamente. O gestor poderá revisar a programação. Uma visita gerada ainda precisa ser atribuída e confirmada na agenda.

Este módulo organiza manutenção recorrente. Não será vendido como módulo de PMOC completo.

### 5.8. Financeiro básico

- Contas a receber vinculadas à OS ou lançadas manualmente.
- Vencimento, forma de pagamento e registro manual de recebimentos.
- Recebimentos parciais e cálculo do saldo restante.
- Despesas simples por categoria, com data e valor.
- Visão de recebido, a receber, vencido e despesas no período.
- Exportação CSV e recibo simples em PDF.

Situação financeira e situação operacional são independentes: concluir a OS não significa receber. Uma OS pode ter várias parcelas e recebimentos; o saldo deve considerar todos eles. Cancelamentos com valores recebidos exigem tratamento explícito, preservando os registros e eventuais estornos.

Na V1, informar pagamento por Pix significa registrar um recebimento manual. Não haverá confirmação bancária automática, emissão fiscal nem contabilidade completa.

### 5.9. Painel e indicadores

- Serviços agendados para hoje.
- Ordens abertas, em espera e concluídas no período.
- Preventivas próximas e vencidas.
- Valores efetivamente recebidos e saldo em aberto.
- Orçamentos aprovados e taxa de aprovação.
- Quantidade de atendimentos concluídos por técnico.

Os indicadores devem explicitar o período e a regra utilizada. Valor orçado, valor aprovado e dinheiro recebido aparecem separadamente.

### 5.10. Comunicação

- Modelos de mensagem para orçamento, confirmação de visita, conclusão e próxima manutenção.
- Botão que abre o WhatsApp com o texto preenchido para o usuário revisar e enviar.
- Download dos PDFs para anexação manual.
- Avisos dentro do sistema sobre agenda, pendências e vencimentos.

Não haverá disparos automáticos de WhatsApp nem anexação automática de PDFs nesta etapa. O envio de e-mails transacionais de conta e convite faz parte da V1.

## 6. Estrutura de telas

### Área administrativa da empresa

1. Login e recuperação de senha.
2. Configuração inicial.
3. Painel geral.
4. Clientes e detalhes do cliente.
5. Locais e equipamentos.
6. Catálogo de serviços e materiais.
7. Orçamentos e editor de orçamento.
8. Agenda.
9. Ordens de serviço e detalhes da OS.
10. Planos de manutenção recorrente.
11. Financeiro básico.
12. Relatórios e exportação.
13. Equipe e permissões.
14. Empresa, assinatura e configurações.

### Experiência do técnico no celular

1. Minha agenda.
2. Detalhes do atendimento e acesso ao endereço.
3. Equipamentos e histórico relevante.
4. Execução: checklist, fotos e observações.
5. Revisão, aceite e conclusão.

Priorizar botões fáceis de tocar, formulários curtos, contraste adequado e indicação clara de salvamento. Falhas de conexão precisam aparecer de forma explícita, sem informar sucesso antes de o servidor confirmar.

## 7. Estrutura mínima dos dados

Entidades propostas para orientar a implementação:

- **Empresa assinante:** configurações, plano e situação da assinatura.
- **Usuário e vínculo com empresa:** identidade, perfil e permissões.
- **Cliente e local:** contratante do serviço e endereço atendido.
- **Equipamento:** aparelho instalado em um local.
- **Item de catálogo:** serviço ou material oferecido.
- **Orçamento, revisão e itens:** proposta comercial e valores preservados.
- **Ordem de serviço e itens:** execução e cobrança prevista.
- **Equipamento da OS:** relaciona cada aparelho aos registros daquela visita.
- **Agendamento:** horário, técnico e duração prevista.
- **Checklist e respostas:** modelo versionado e resultado da execução.
- **Anexo e aceite:** evidências com autor, data e vínculo ao atendimento.
- **Plano recorrente e ocorrência:** programação das futuras visitas.
- **Conta a receber, recebimento e despesa:** registros financeiros da prestadora.
- **Assinatura e evento de cobrança:** cobrança do próprio FicaFrioAí.
- **Evento de auditoria:** alterações relevantes e acessos administrativos.

Todos os registros de negócio devem pertencer a uma empresa assinante. A separação precisa ser aplicada no servidor e nos arquivos, além da interface.

## 8. Requisitos para vender por assinatura

### Modelo comercial inicial

Começar com um plano principal e cobrança adicional por técnico ativo, evitando muitos pacotes antes de entender o uso real. Definir limites de usuários, armazenamento e anexos de forma transparente.

**Hipótese para validar em entrevistas e pilotos:** mensalidade de R$ 99 a R$ 199 por empresa pequena, com uma quantidade inicial de usuários incluída. Esses valores são sugestões próprias, não pesquisa de preço nem estimativa garantida de rentabilidade.

Antes de fixar o preço, calcular hospedagem, arquivos, geração de PDFs, e-mails, taxas de pagamento, impostos, suporte e tempo de implantação. Prever contas separadas para usuários administrativos e técnicos quando fizer sentido comercial.

### Cobrança da plataforma

- Página comercial com proposta de valor, demonstração, preço e contato.
- Teste de 14 dias como hipótese comercial inicial.
- Contratação e gestão da assinatura por checkout hospedado de um provedor de pagamentos.
- Recebimento seguro dos eventos de cobrança, com validação e processamento sem duplicidade.
- Estados: teste, ativa, em atraso, suspensa e cancelada.
- Política publicada de carência, cancelamento, retenção e exportação de dados.
- Ao suspender: impedir novas operações, mantendo um período definido para consulta e exportação.
- Painel interno para acompanhar assinantes e corrigir exceções com registro.

A cobrança da assinatura do FicaFrioAí é separada dos pagamentos que as prestadoras recebem de seus próprios clientes. O checkout da plataforma entra na V1; cobrança bancária integrada para as OS fica para depois.

## 9. Qualidade, segurança e operação

- Português do Brasil, moeda em reais e datas no padrão brasileiro.
- Horários armazenados com referência de fuso e apresentados no fuso da empresa.
- Permissões validadas no servidor, inclusive em downloads e exportações.
- Senhas protegidas ou autenticação por serviço gerenciado.
- Links temporários para anexos privados; arquivos com tipo e tamanho limitados.
- Histórico de alterações em orçamento aprovado, OS concluída e registros financeiros.
- Backups automáticos, política de retenção definida e teste de restauração antes da venda.
- Monitoramento de erros, disponibilidade e falhas de cobrança.
- Exportação dos dados da empresa e procedimento de encerramento da conta.
- Aviso de privacidade, termos e tratamento de solicitações sobre dados pessoais.
- Dados reais separados entre desenvolvimento, demonstração e produção.

As decisões sobre privacidade, retenção, contratos e documentos técnicos devem passar por revisão especializada antes do lançamento. Este documento propõe requisitos de produto; não certifica adequação jurídica ou técnica.

## 10. O que fica fora da V1

- PMOC completo, emissão de ART e promessa de conformidade automática.
- Aplicativos nativos e funcionamento offline com sincronização.
- Portal ou aplicativo do cliente final.
- Envio automático pela API do WhatsApp.
- Estoque, compras e controle de cilindros.
- NFS-e, boletos e conciliação bancária da prestadora.
- GPS em tempo real e otimização de rotas.
- Comissão automática, folha e contabilidade.
- Gestão de vários CNPJs na mesma assinatura.
- Inteligência artificial, sensores e manutenção preditiva.
- Impressão térmica, identificador de chamadas e chat interno.

## 11. Critérios de aceite para lançar

- Uma empresa consegue completar o fluxo de cliente até recebimento sem auxílio do desenvolvedor.
- Um técnico conclui uma OS pelo celular, com checklist, fotos e aceite ou justificativa de ausência.
- O PDF apresenta corretamente empresa, cliente, equipamentos, serviços e evidências selecionadas.
- Concluir a OS atualiza o histórico de todos os aparelhos atendidos.
- Converter orçamento, gerar recorrência e receber eventos de cobrança não duplica registros.
- Uma empresa não consegue consultar ou alterar dados de outra, mesmo modificando endereços e identificadores de requisições.
- Técnicos não acessam o financeiro nem atendimentos não autorizados.
- Recebimentos parciais, vencimentos e estornos produzem saldos corretos.
- O fluxo de teste, pagamento, atraso e cancelamento da assinatura funciona de ponta a ponta.
- Exportação e recuperação de backup são verificadas.
- Os fluxos principais são testados em celular e computador, inclusive com falha de conexão durante o salvamento.
- Pelo menos três empresas piloto utilizam serviços reais e não encontram bloqueios críticos no fluxo principal.

## 12. Sequência sugerida de entrega

### Etapa 1 — Validar a compra

Entrevistar de 5 a 10 prestadores, entender como atendem hoje e testar um protótipo do fluxo principal. Confirmar se pagariam pelo conjunto proposto e qual problema os faria trocar de ferramenta.

**Saída:** escopo validado, pilotos interessados e hipótese de preço revisada.

### Etapa 2 — Construir o núcleo

Implementar conta, separação entre empresas, permissões, clientes, equipamentos, orçamento, agenda e OS.

**Saída:** atendimento completo demonstrável em ambiente de teste.

### Etapa 3 — Preparar uso e venda

Adicionar PDF, fotos, aceite, recorrência, financeiro básico, importação, exportação, assinatura, monitoramento e recuperação de dados.

**Saída:** candidato à V1 pronto para pilotos reais.

### Etapa 4 — Operar os pilotos e lançar

Acompanhar uso, corrigir bloqueios, melhorar configuração inicial, documentar suporte e verificar os critérios de aceite.

**Saída:** V1 comercial. O prazo depende da equipe e das decisões de implementação; as etapas não representam compromisso de calendário.

## 13. Possíveis atualizações futuras

As versões abaixo indicam ordem sugerida, não promessa comercial. Priorizar com base em uso, perda de vendas, custo de suporte e disposição dos clientes a pagar.

### V1.1 — Reduzir tarefas manuais

- Aprovação de orçamento por link seguro, com versão e registro do aceite.
- Lembretes automáticos por e-mail e, após integração oficial, WhatsApp.
- Etiquetas QR Code para abrir a ficha autenticada do equipamento.
- Mais modelos de checklist, importação de equipamentos e ações em lote.
- Busca por aparelho, cliente, telefone e número da OS.

**Gatilho:** usuários ativos repetem tarefas manuais e pedem agilidade. Depende de permissões para links, regras de comunicação e orçamento para integrações.

### V1.2 — Contratos e documentação técnica

- Contratos com vigência, cobertura, reajuste e regras comerciais.
- Planejamento de manutenção por ambiente e equipamento.
- Módulo de PMOC com responsável técnico, documentos vinculados e histórico de revisões.
- Relatórios técnicos e modelos de certificados submetidos à validação profissional.
- Alertas de vencimento de contratos e documentação.

**Gatilho:** oportunidades corporativas justificam o investimento. Depende de especificação e revisão por profissional habilitado; o sistema não deve prometer conformidade apenas por gerar um PDF.

### V1.3 — Materiais e resultado por serviço

- Estoque de peças e insumos, entradas, saídas e alertas de mínimo.
- Reserva de material por OS e baixa confirmada na execução.
- Estoque por técnico ou veículo.
- Controle de gases por unidade de medida, cilindros e movimentações.
- Custos de materiais, mão de obra e deslocamento por atendimento.
- Indicadores de margem e regras de comissão.

**Gatilho:** perdas de material ou falta de visibilidade de custos se tornam recorrentes. Depende de unidades de medida, inventário confiável e tratamento de devoluções.

### V2.0 — Operação de campo e experiência do cliente

- Aplicativos nativos caso a PWA limite a operação.
- Atendimento offline com dados locais protegidos, fila de envio e resolução de conflitos.
- Portal do cliente para chamados, propostas, relatórios e histórico autorizado.
- Acompanhamento da visita e notificações.
- Check-in e check-out por localização, com política de uso e privacidade.
- Sugestão de rotas com duração e deslocamento.

**Gatilho:** falta de sinal e volume de atendimentos afetam a produtividade. O modo offline exige projeto próprio de sincronização, inclusive para anexos e edições simultâneas.

### V2.1 — Financeiro e integrações

- Cobrança das OS com Pix e boleto por provedor integrado.
- Confirmação de pagamento, conciliação e tratamento de estornos.
- NFS-e por integração compatível com os municípios atendidos.
- Fluxo de caixa projetado e relatórios financeiros ampliados.
- API, webhooks e integração com ferramentas contábeis.

**Gatilho:** digitação financeira repetida e demanda comprovada por integração. Depende de custos por transação, cobertura dos provedores e validação fiscal aplicável.

### V3.0 — Empresas maiores e inteligência

- Gestão de vários CNPJs, filiais e equipes com permissões específicas.
- Acordos de prazo de atendimento, escalas e contratos mais complexos.
- Personalização de documentos e marca por empresa.
- Indicadores de retrabalho, renovação e rentabilidade por cliente.
- Assistente de IA para sugerir descrições e resumir históricos, com revisão humana.
- Integração com sensores e estudos de manutenção preditiva, quando houver dados suficientes.

**Gatilho:** clientes maiores ou expansão da base sustentam a complexidade e o custo. IA não deve emitir diagnóstico ou documento técnico como verdade verificada sem validação responsável.

## 14. Como medir se o produto está funcionando

- **Ativação:** percentual de empresas que cadastram um cliente e concluem a primeira OS nos primeiros sete dias.
- **Uso:** empresas que concluem ao menos uma OS por semana, segmentadas pelo perfil e sazonalidade.
- **Eficiência:** tempo para criar orçamento e concluir o registro de atendimento.
- **Conversão:** empresas que assinam após o teste dividido pelas que encerraram o teste no período.
- **Retenção:** empresas que continuam pagando após 30, 60 e 90 dias.
- **Cancelamento:** motivos e proporção de assinantes perdidos por mês.
- **Economia:** receita recorrente, custo por empresa ativa e horas de suporte por assinante.

As metas numéricas devem ser definidas após os primeiros pilotos. Antes de expandir o escopo, verificar se as empresas conseguem começar sozinhas, usar semanalmente e perceber valor suficiente para renovar.

## 15. Decisões pendentes antes do desenvolvimento

1. Qual público será atendido primeiro: autônomos ou pequenas equipes?
2. Quantos usuários e quanto armazenamento entram na mensalidade?
3. Qual provedor cuidará da assinatura da plataforma?
4. Quais checklists serão validados com os técnicos pilotos?
5. Qual política valerá para suporte, atraso, exportação e retenção?
6. Qual identidade visual e domínio serão adotados após verificar disponibilidade do nome?

Esses pontos não impedem o uso deste documento como base inicial. O escopo proposto assume pequenas equipes, uma empresa por assinatura, aplicação online e financeiro operacional básico.
