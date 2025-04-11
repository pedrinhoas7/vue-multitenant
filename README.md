

```markdown
# 🏠 Vue Multi-Tenant App

Este projeto é um exemplo de aplicação **multi-tenant** utilizando **Vue 3**, **Vite**, **Tailwind CSS** e **Axios**. Ele demonstra como criar uma estrutura escalável para múltiplos clientes, cada um com sua própria identidade visual e configuração.

## 🚀 Tecnologias utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Pinia](https://pinia.vuejs.org/) (gerenciamento de estado)

## 🧠 Funcionalidades principais

- 🔑 Suporte a múltiplos tenants
- 🎨 Estilo dinâmico por tenant (cor primária, logo, nome)
- 💬 Listagem de imóveis com imagem, preço, descrição e botão de favorito
- 📱 Totalmente responsivo para diferentes tamanhos de tela
- ⚙️ Configurações de tenants carregadas via API
- ❤️ Componente de "favoritar" com ícone de coração
- 🔍 Filtros de busca personalizados

## 🏗️ Estrutura dos componentes

- `Card.vue` – Exibe um imóvel com imagem, descrição e botão de favorito
- `CardList.vue` – Lista de imóveis simulando uma base de dados
- `Header.vue` – Cabeçalho com identidade do tenant (logo + cor)
- `Filter.vue` – Componente para filtros (em desenvolvimento)
- `TenantStore.ts` – Armazena e fornece os dados do tenant atual
- `axios.ts` – Configuração global do Axios com suporte a headers de tenant

## 📦 Instalação

```
git clone https://github.com/pedrinhoas7/vue-multitenant-app.git
cd vue-multitenant-app
npm install
npm run dev
```

## 🏁 Como funciona

1. O tenant é detectado com base no **subdomínio ou caminho da URL**.
2. Os dados são buscados de uma **API de tenants** (mock ou real).
3. A configuração do tenant é salva via `Pinia` e usada globalmente (cor, logo, etc).
4. Os componentes reagem dinamicamente conforme o tenant atual.

## 🧪 Mock de tenants

Para testes locais, você pode utilizar um arquivo JSON ou um mock server (`json-server`, por exemplo) com a seguinte estrutura:

```json
{
  "cliente1": {
    "name": "Imóveis Verde",
    "primaryColor": "#04986D",
    "logo": "/logos/verde.svg"
  },
  "cliente2": {
    "name": "Casa Azul",
    "primaryColor": "#0077FF",
    "logo": "/logos/azul.svg"
  }
}
```

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com 💚 por [Pedro Moraes](https://github.com/pedrinhoas7)

