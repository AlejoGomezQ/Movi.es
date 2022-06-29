<template>
  <header class="shadow-sm">
    <nav class="container navbar justify-content-between">
      <a class="navbar-brand"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-film"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
          />
        </svg>
        Movi.es</a
      >
      <div class="search">
        <input class="mr-sm-2" type="text" placeholder="Buscar pelicula" />
        <a href="#" class="btn">Buscar</a>
      </div>
      <div class="user">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          {{ name[1] }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Perfil</a>
          <a class="dropdown-item" href="#">Favoritos</a>
          <a class="dropdown-item" href="#">Cerrar sesión</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MoviHeader",

  props: {
    name: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  padding: 10px;
  position: relative;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #ff535b;
}

svg {
  vertical-align: baseline;
}

a {
  color: #777777;
}

a:hover {
  color: #ff535b;
}

input {
  border: none;
  padding-right: 200px;
  border-bottom: 1px solid #ff535b;
}

input:hover,
input:focus {
  outline: none;
  background: #dddddd;
  border-radius: 3px;
}

input:hover::placeholder {
  color: #ff535b;
}

.btn {
  padding: 2px 10px;
  border: 1px solid #ff535b;
  color: #ff535b;
}

.btn:hover {
  background: #ff535b;
  color: #ffffff;
}
</style>
