import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/usersUtils.js";

const headerElement = document.querySelector('#wrapper > header');

const template = (isAuthenticated) => html`
<!-- Navigation -->
      <a id="logo" href="/"><img id="logo" src="./images/logo2.png" alt="img" /></a>
      <nav>
        <div>
          <a href="/dashboard">Marketplace</a>
        </div>
        ${isAuthenticated
          ? html`
          <div class="user">
          <a href="/create">Sell</a>
          <a href="/logout">Logout</a>
        </div>
          `
          : html`
          <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
          `
        }
        </nav>
`;

export default async function navigationView(ctx) {
  const userData = getUserData();
  const isAuthenticated = !!userData.accessToken;

  baseRender(template(isAuthenticated), headerElement);
}


