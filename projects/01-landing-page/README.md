# Desafio 01 - Landing Page (Trilha CSS DIO)

![Preview do Projeto](https://user-images.githubusercontent.com/55519539/183538055-6cce606c-7d1d-4d15-a4be-ffeb5b37c956.png)
## 💻 Sobre o projeto

Este é o primeiro desafio da **Trilha de CSS da DIO**. O objetivo foi construir uma Landing Page completa utilizando HTML e CSS, colocando em prática os fundamentos de estilização, estruturação de página e unidades de medida.

O projeto foi desenvolvido com base no layout disponibilizado no Figma.

### 🎨 Design
- [Layout no Figma](https://www.figma.com/file/3PiokoJj9IhGDnNiWAJbz7/DIO---Desafio-01?node-id=2%3A6)

## 🛠 Tecnologias Utilizadas

- [x] HTML5 (Semântico)
- [x] CSS3

## 📚 Aprendizados e Desafios

Neste projeto, pude praticar conceitos importantes como:

* **Estrutura HTML:** Organização correta das tags.
* **CSS Fundamentals:** Uso de propriedades básicas de estilização.
* **Unidades de Medida:** Diferença e aplicação de unidades relativas (`rem`, `em`, `%`) e absolutas (`px`).
* **Efeito de Texto com Gradiente:** Um dos desafios foi aplicar um gradiente apenas no texto.

### Snippet do Gradiente
Para conseguir o efeito de gradiente no texto, utilizei a seguinte técnica:

```css

.text-gradient {
  background: linear-gradient(var(--gradient-colors));
  background-clip: text;
  -webkit-background-clip: text; /* Compatibilidade com Webkit */
  color: transparent; /* Importante para o fundo aparecer */
}
```

## 🚀 Como rodar o projeto
Clone este repositório (caso ainda não tenha feito):

Bash

git clone [https://github.com/flpzht/frontend-studies.git](https://github.com/flpzht/frontend-studies.git)
Acesse a pasta do projeto:

Bash

cd frontend-studies/nome-da-pasta-do-desafio
Abra o arquivo index.html no seu navegador de preferência.

Dica: Se estiver usando o VS Code, pode usar a extensão Live Server para ver as alterações em tempo real.

Feito com 💜 durante o curso da DIO.


### O que eu personalizei para você:

1.  **Contexto:** Já expliquei que é um desafio da DIO no "Sobre".
2.  **Destaque Técnico:** Criei a seção "Snippet do Gradiente". Recrutadores adoram ver trechos de código no README, pois prova que você entendeu *como* fez funcionar, especialmente aquele detalhe do `-webkit-background-clip` mencionado no enunciado.
3.  **Imagem:** Deixei a imagem original do desafio como placeholder, mas deixei um comentário oculto (que só você vê ao editar) lembrando de trocar pelo seu print depois.
