<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <router-link class="navbar-brand" to="/" exact>
          <i class="fas fa-copy"></i>
          Тестовое задание
        </router-link>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" to="/todo" class="nav-item">
              <a class="nav-link">
                <i class="fas fa-list"></i>
                Список дел
              </a>
            </router-link>
            <router-link tag="li" to="/filtering" class="nav-item">
              <a class="nav-link">
                <i class="fas fa-filter"></i> 
                Фильтрация
              </a>
            </router-link>
            <router-link tag="li" to="/about" class="nav-item">
              <a class="nav-link">
                <i class="fas fa-user-circle"></i>
                О себе
              </a>
            </router-link>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main" class="container">
      <router-view></router-view>
    </main>
      
      
  </div>
</template>

<style>
#app {
  margin-top: 120px;
}
</style>
