![image](https://github.com/user-attachments/assets/40415fea-6e10-4571-b8db-86935ee8edf3)
### 📘 Projeto: Vue Multi-Tenant App

**Descrição técnica:**  
Aplicação frontend desenvolvida com **Vue 3** e **Vite**, com arquitetura voltada para múltiplos clientes (multi-tenant), permitindo customização dinâmica de identidade visual (tema, logo, nome) e comportamento da interface com base no tenant ativo. A infraestrutura utiliza **Firebase Remote Config** para parametrização de UI em tempo real, **CI/CD com GitHub Actions** e **Firebase Hosting** para entrega contínua.

---

## 🧰 Stack e Tecnologias Utilizadas

| Tecnologia                 | Descrição                                                                 |
|---------------------------|---------------------------------------------------------------------------|
| **Vue 3 + Vite**          | Framework moderno para UI reativa, com renderização otimizada via Vite.  |
| **TypeScript**            | Tipagem estática para maior escalabilidade e confiabilidade.              |
| **Tailwind CSS**          | Framework utilitário para estilização responsiva e desacoplada.          |
| **Vue Router**            | Gerenciamento de rotas client-side entre os tenants e suas views.         |
| **Pinia**                 | Biblioteca de gerenciamento de estado para Vue, usada para armazenar os dados dinâmicos dos tenants. |
| **Firebase Remote Config**| Sistema de parametrização remota usado para alterar cores, logos, e comportamentos da UI em tempo real. |
| **Firebase Hosting + CI/CD** | Automação de build e deploy com GitHub Actions, incluindo builds separados por tenant. |
| **Firebase Experiments** (Remote Config) | Configuração baseada em porcentagem para validação A/B de recursos e temas. |

---

## ⚙️ Recursos Técnicos Implementados

### 🧩 Multi-tenancy

- Detecção dinâmica de tenant via domínio.
- Customização de identidade visual por tenant (cor primária, nome, logo, cor do background).
- Configuração via `Remote Config`.
- Armazenamento do estado do tenant com **Pinia** para acesso global.

### 🎨 Estilo remoto via Firebase Remote Config

- Parâmetros remotos para:
  - Cor do botão "Saiba mais"
  - Background da interface
  - Nome do tenant exibido no cabeçalho
  - Logo utilizada na aplicação
- Permite atualização instantânea da UI sem rebuild/deploy.

### 🧪 Rollout gradual (experimentos com Remote Config)

- Teste controlado de variações de tema e comportamento com distribuição por **porcentagem de usuários**.
- Ideal para:
  - A/B Testing
  - Feature Toggles
  - Liberação progressiva de funcionalidades

### 🛠️ Componentes principais

| Componente       | Descrição                                                                 |
|------------------|---------------------------------------------------------------------------|
| `Header.vue`     | Cabeçalho dinâmico com nome e logo do tenant.                             |
| `Card.vue`       | Componente de imóvel com imagem, descrição, botão de favorito e valor.    |
| `CardList.vue`   | Grid responsivo com os imóveis disponíveis para o tenant ativo.           |
| `Filter.vue`     | Componente reutilizável para filtros de cidade, tipo, valor e ordenação.  |
| `TenantStore.ts` | Store global contendo os dados carregados do tenant atual.                |

---

## 🚀 Deploy e Entrega Contínua

- Configuração de **CI/CD com GitHub Actions**, integrando:
  - Build com Vite
  - Deploy automático para o Firebase Hosting
- Separação por ambiente e possibilidade de deploys específicos por tenant
- Suporte a ambientes temporários para testes A/B ou staging

---

## 🌐 Ambientes publicados

| Tenant        | Link                                                                                 |
|---------------|----------------------------------------------------------------------------------------|
| Tenant 1      | [https://vue-multitenant-app.firebaseapp.com/](https://vue-multitenant-app.firebaseapp.com/) |
| Tenant 2      | [https://vue-multitenant-app-2.firebaseapp.com/](https://vue-multitenant-app-2.firebaseapp.com/) |

---

## 💡 Motivação arquitetural

O projeto foi construído com foco em:

- **Escalabilidade de frontend multicliente** com mínima duplicação de código
- **Manutenção facilitada** via parametrização (sem hardcode)
- **Customização instantânea** com Firebase Remote Config (sem rebuilds)
- **CI/CD robusto** com deploy automatizado
- **Abordagem orientada a experimentação**, com rollout segmentado para validação de mudanças
