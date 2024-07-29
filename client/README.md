# Ágora

## 📜 Descrição

Ágora é uma aplicação FullStack projetada para oferecer uma plataforma completa de aprendizado online. A plataforma proporciona uma experiência fluida tanto para alunos quanto para instrutores, permitindo a criação, gerenciamento e acesso a cursos de maneira eficiente.

**Nota:** [Visualização Ao Vivo](https://agora-client-azure.vercel.app/) disponível para visualização.

## 📹 Vídeo do Projeto

[![Vídeo do Projeto](https://img.youtube.com/vi/86aa513f-f2fc-4299-b116-d7f78ddd01a6/0.jpg)](https://github.com/user-attachments/assets/28245e41-b42c-47bc-9e44-4c3b8edf9c19)

## 🔨 Funcionalidades Principais

1. **Autenticação e Usuário** 🔐

   - Login seguro usando NextAuth.
   - Gerenciamento de perfil com upload de avatar via Cloudinary.

2. **Página Home** 🏠

   - Pesquisa de cursos com opções de filtro por categoria.
   - Exibição de cursos em destaque e feedback de alunos.
   - Área de Perguntas Frequentes (FAQ) para esclarecer dúvidas comuns.

3. **Compra e Acesso a Cursos** 🛒

   - Compra de cursos utilizando Stripe, com acesso completo a conteúdo, materiais e áreas de interação após a compra.

4. **Dashboard Administrativo** 📊

   - Painel para administradores gerenciarem cursos, usuários e categorias, com acesso a analytics e customização.

5. **Notificações em Tempo Real** 🔔
   - Notificações imediatas para usuários usando Socket.io.

## 👩‍💻 Tecnologias Utilizadas

### Frontend

- [Next.js](https://nextjs.org/) - Framework React para renderização do lado do servidor.
- [Typescript](https://www.typescriptlang.org/) - Linguagem de programação que adiciona tipagem estática ao JavaScript.
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Ferramenta para consulta de dados eficiente.
- [Socket.io](https://socket.io/) - Biblioteca para aplicações web em tempo real.
- [Redux](https://redux.js.org/) - Ferramenta de gerenciamento de estado.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS para estilização.
- [Material UI](https://mui.com/) - Componentes React para desenvolvimento web rápido e fácil.
- [Formik](https://formik.org/) - Biblioteca para construção de formulários em React.
- [Yup](https://github.com/jquense/yup) - Biblioteca JavaScript para validação e análise de valores.
- [Toast](https://react-hot-toast.com/) - Biblioteca de notificações para React.
- [NextAuth](https://next-auth.js.org/) - Autenticação para aplicações Next.js.
- [React Pro Sidebar](https://github.com/azouaoui-med/react-pro-sidebar) - Componente React para navegação lateral.
- [VdoCipher](https://www.vdocipher.com/) - Hospedagem e streaming de vídeos seguros.

### Backend

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL.
- [Mongoose](https://mongoosejs.com/) - ODM para MongoDB.
- [Redis](https://redis.io/) - Armazenamento de estrutura de dados em memória.
- [Cloudinary](https://cloudinary.com/) - Serviço de armazenamento de mídia na nuvem.
- [Stripe](https://stripe.com/) - Plataforma de processamento de pagamentos online.

## 📁 Executando Localmente

### Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/oMiguelwnl/server.git
   cd server
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` e adicione suas variáveis de ambiente:
   ```env
   PORT=8000
   ORIGIN=http://localhost:3000,
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

### Frontend

1. Clone o repositório:
   ```bash
   git clone https://github.com/oMiguelwnl/agora-client.git
   cd agora-frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env.local` e adicione suas variáveis de ambiente:
   ```env
   NEXT_PUBLIC_SERVER_URL=http://localhost:8000/api/v1/
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request para quaisquer alterações.

## 👩‍💻 Desenvolvedor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/134077780?v=4" width="100px;" alt="Foto do Desenvolvedor"/>

<div align="left">
  <a href="https://www.linkedin.com/in/miguel-rafael-almeida/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
  </a>
</div>
