<template>
  <div>

    <div v-if="disabledName" @click="changeName()">
      <button type="button" class="btn btn-secondary">
        <i class="fas fa-pencil-alt"></i>
      </button>
      <input v-model="name" type="text" class="input-name input-name-disabled" disabled>
    </div>
  
    <div v-else="">
      <button type="button" class="btn btn-secondary" @click="saveName()" >
        <i class="far fa-save"></i>
      </button>
      <input v-model="name" v-focus="" type="text" class="input-name" name="name" @blur="saveName()" @keyup.enter.prevent="saveName()">
    </div>
  
    <label class="label" for="email">Email:</label>
    <input id="email" v-model="email" type="email" name="email" autocomplete="off">
    <p :class="[classSub, {red: !validateEmail}]">должен быть валиден и принадлежать @neolant.ru</p>

    <label for="birthday" class="label">Дата рождения:</label>
    <input id="birthday" v-model="birthday" type="date" name="birthday">

    <label for="birthplace" class="label">Место рождения:</label>

    <select id="birthplace" v-model="country">         
      <option v-for="(item, index) in countries" :key="index">{{item.name}}</option>     
    </select>   

    <select v-model="region">         
      <option v-for="(item, index) in regions" :key="index">{{item.name}}</option>
    </select>
    
    <select v-model="town">         
      <option v-for="(item, index) in towns" :key="index">{{item.name}}</option>
    </select>


    <label for="about" class="label">Пара слов о себе:</label>    
    <textarea id="about" v-model="about"></textarea>
    <hr>

    <button class="btn btn-secondary" @click="save">Сохранить</button>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  data: function() {
    return {
      name: 'Vasya',
      disabledName: true,
      email: '',
      classSub: 'sub',
      birthday: '',
      countries: [],
      country: '',
      region: '',
      town: '',
      about: ''
    };
  },
  computed: {
    validateEmail: function() {
      var re = /^([a-zA-Z0-9_.-])+@((neolant)+\.+(ru))+$/;
      return re.test(this.email);
    },
    regions: function() {
      var x = this.countries.find(el => {
        return el.name === this.country;
      });
      if (!x) {
        return [];
      }
      return x.regions;
    },
    towns: function() {
      var x = this.regions.find(el => {
        return el.name === this.region;
      });
      if (!x) {
        return [];
      }
      return x.towns;
    }
  },
  mounted() {
    this.loadCountries();
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.birthday) {
      this.birthday = localStorage.birthday;
    }
    if (localStorage.country) {
      this.country = localStorage.country;
    }
    if (localStorage.region) {
      this.region = localStorage.region;
    }
    if (localStorage.town) {
      this.town = localStorage.town;
    }
    if (localStorage.about) {
      this.about = localStorage.about;
    }
  },
  methods: {
    changeName: function() {
      this.disabledName = false;
    },
    saveName: function() {
      this.disabledName = true;
    },
    loadCountries: function() {
      axios.get('http://localhost:3004/countries').then(responce => {
        this.countries = responce.data;
      });
    },
    save: function() {
      localStorage.name = this.name;
      localStorage.email = this.email;
      localStorage.birthday = this.birthday;
      localStorage.country = this.country;
      localStorage.region = this.region;
      localStorage.town = this.town;
      localStorage.about = this.about;
    }
  }
};
</script>

<style>
.btn-secondary {
  min-width: 50px;
  min-height: 50px;
  padding: 20px;
  margin-bottom: 20px;
}

.input-name {
  margin-left: 20px;
  font-size: 44px;
  font-weight: bold;
  border: none;
}

.input-name-disabled {
  background-color: #fff;
  color: #000;
}

.sub {
  display: block;
  margin-top: 15px;
  color: rgb(165, 161, 161);
  line-height: 0;
}

.red {
  color: red;
}

.label {
  display: block;
  font-size: 20px;
  font-weight: bold;
}
</style>
