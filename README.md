# Corporate UI Kit

Corporate UI Kit é uma biblioteca reutilizável de componentes React para aplicações corporativas, acompanhada da **Corporate Dashboard Demo** e de um catálogo no Storybook.

O projeto foi propositalmente limitado ao escopo de um portfólio de frontend: componentes consistentes, interações acessíveis, tipagem forte em TypeScript, CSS Modules, design tokens, testes automatizados e documentação clara.

## Objetivo

- Demonstrar design de componentes React reutilizáveis para fluxos corporativos
- Mostrar implementação acessível desde a primeira versão
- Fornecer uma tela demonstrativa realista para dashboards, formulários, tabelas e fluxos administrativos
- Servir como projeto de portfólio com decisões técnicas explícitas

## Stack

- React 19
- TypeScript 5
- Vite 6
- Storybook 10
- CSS Modules
- Vitest 3
- React Testing Library
- ESLint 9
- Prettier 3

## Princípios

- KISS
- DRY
- YAGNI
- acessibilidade em primeiro lugar
- APIs simples e previsíveis
- tipagem forte
- baixo acoplamento
- composição em vez de abstrações genéricas
- reutilização apenas quando houver valor concreto
- documentação suficiente para manutenção e uso

## Componentes

Componentes públicos da v1:

- `Button`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `FormField`
- `Alert`
- `Badge`
- `Card`
- `Modal`
- `Table`
- `Pagination`
- `Loading`
- `EmptyState`

## Estrutura

```text
src/
├── components/
├── demo/
├── styles/
├── types/
├── utils/
├── index.ts
└── main.tsx
.storybook/
tests/
specs/001-corporate-ui-kit-v1/
```

O repositório usa um workspace Vite único na raiz. O ponto de entrada da biblioteca é `src/index.ts`.

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

Inicia a aplicação demo localmente.

```bash
npm run preview
```

Previsualiza a saída da demo compilada em `dist/demo`.

## Storybook

```bash
npm run storybook
```

Executa o catálogo interativo de componentes.

```bash
npm run build-storybook
```

Gera a saída estática do Storybook.

O Storybook carrega os tokens globais e os estilos base de `src/styles/index.css` e inclui documentação de acessibilidade com o addon `@storybook/addon-a11y`.

## Testes

```bash
npm run test
```

Executa a suíte Vitest.

```bash
npm run test:watch
```

Executa os testes em modo observação.

## Build

```bash
npm run build
```

Valida TypeScript e gera:

- `dist/library` para o bundle e as declarações da biblioteca
- `dist/demo` para a aplicação demo do Vite

## Importações

A API pública é exposta pelo ponto de entrada do pacote:

```tsx
import { Button, Modal, Table } from 'corporate-ui-kit';
```

Importar o pacote também carrega os tokens de design e os estilos globais compartilhados pela biblioteca.

Os tipos públicos também ficam disponíveis no mesmo ponto de entrada quando necessário:

```tsx
import type { TableColumn, TableSortState } from 'corporate-ui-kit';
```

## Estilos

O estilo global é dividido em:

- `src/styles/tokens.css` para tokens de design
- `src/styles/reset.css` para o reset mínimo
- `src/styles/global.css` para estilos globais compartilhados
- CSS Modules para cada componente
- `src/demo/App.module.css` para os estilos exclusivos da demo

Breakpoints documentados:

- `--breakpoint-sm: 36rem`
- `--breakpoint-md: 48rem`
- `--breakpoint-lg: 64rem`
- `--breakpoint-xl: 80rem`

## Decisões Técnicas

- Workspace Vite único em vez de monorepo
- CSS Modules para isolamento de componentes
- Tokens globais via variáveis CSS
- Sem biblioteca visual pronta ou Tailwind
- Suporte a componentes controlados e não controlados usando props nativas
- Ordenação da tabela controlada externamente
- Modal implementado sem dependências externas de overlay
- Dados da demo exclusivamente locais

## Acessibilidade

A acessibilidade é requisito obrigatório, não um bônus.

Padrões já aplicados:

- HTML semântico
- labels, ajuda e mensagens de erro corretamente associados
- foco visível
- navegação por teclado quando aplicável
- `aria-busy` e mensagens de status para carregamento
- `role="dialog"` e `aria-modal="true"` no modal
- focus trap, fechamento por Escape e retorno de foco no modal
- legendas e labels acessíveis para tabela e paginação

## Limitações

- Sem backend
- Sem autenticação
- Sem API real
- Sem banco de dados
- Sem virtualização
- Sem edição inline na tabela
- Sem sistema de múltiplos temas
- Sem biblioteca global de estado
- Sem internacionalização
- Sem biblioteca externa de modal
- Sem componentes além do escopo da primeira versão

## Melhorias Futuras

- Adicionar novos componentes apenas quando houver necessidade concreta
- Expandir a tabela com cuidado se surgir um caso real de uso
- Adotar regressão visual se a superfície de design crescer
- Automatizar publicação só se o repositório deixar de ser apenas portfólio

## Sugestões de Capturas

- Demo completa do Corporate Dashboard em desktop
- Layout responsivo em tablet com rolagem horizontal da tabela
- Layout mobile com cartões empilhados e filtros
- Stories de Button, Input, Select, Checkbox e Alert
- Modal aberto com foco visível
- Stories de tabela em loading e empty state
