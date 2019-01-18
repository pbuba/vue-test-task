<template>
  <div>
    <div class="form-group row">
      <button class="btn btn-primary" type="button" :disabled="isFilter" @click="chooseFilterType">
        <i class="fas fa-filter"></i>
      </button>

      <button class="btn btn-primary" type="button" :disabled="isHighlight" @click="chooseHighlightType">
        <i class="far fa-lightbulb"></i>
      </button>

      <input v-model="query" type="text" placeholder="Search">
    </div>

    <ul v-if="isFilter" class="list-group">
      <li v-for="(item, index) in filterList" :key="index" class="list-group-item">
        {{ item }}
      </li>
    </ul>

    <ul v-if="isHighlight" class="list-group">
      <li v-for="(item, index) in list" :key="index" class="list-group-item" v-html="highlight(item)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      query: '',
      type: 'filter',
      list: [
        '100 Continue («продолжай»)',
        '101 Switching Protocols («переключение протоколов»)',
        '102 Processing («идёт обработка»)',
        '200 OK («хорошо»)',
        '201 Created («создано»)',
        '202 Accepted («принято»)',
        '203 Non-Authoritative Information («информация не авторитетна»)',
        '204 No Content («нет содержимого»)',
        '205 Reset Content («сбросить содержимое»)',
        '206 Partial Content («частичное содержимое»)',
        '207 Multi-Status («многостатусный»)',
        '226 IM Used («использовано IM»)',
        '300 Multiple Choices («множество выборов»)',
        '301 Moved Permanently («перемещено навсегда»)',
        '302 Moved Temporarily («перемещено временно»)',
        '302 Found («найдено»)',
        '303 See Other (смотреть другое)',
        '304 Not Modified (не изменялось)',
        '305 Use Proxy («использовать прокси»)',
        '306 — зарезервировано (код использовался только в ранних спецификациях)',
        '307 Temporary Redirect («временное перенаправление»)',
        '400 Bad Request («плохой, неверный запрос»)',
        '401 Unauthorized («не авторизован»)',
        '402 Payment Required («необходима оплата»)',
        '403 Forbidden («запрещено»)',
        '404 Not Found («не найдено»)',
        '405 Method Not Allowed («метод не поддерживается»)',
        '406 Not Acceptable («неприемлемо»)',
        '407 Proxy Authentication Required («необходима аутентификация прокси»)',
        '408 Request Timeout («истекло время ожидания»)',
        '409 Conflict («конфликт»)',
        '410 Gone («удалён»)',
        '411 Length Required («необходима длина»)',
        '412 Precondition Failed («условие ложно»)',
        '413 Request Entity Too Large («размер запроса слишком велик»)',
        '414 Request-URI Too Large («запрашиваемый URI слишком длинный»)',
        '415 Unsupported Media Type («неподдерживаемый тип данных»)',
        '416 Requested Range Not Satisfiable («запрашиваемый диапазон не достижим»)',
        '417 Expectation Failed («ожидаемое неприемлемо»)',
        '422 Unprocessable Entity («необрабатываемый экземпляр»)',
        '423 Locked («заблокировано»)',
        '424 Failed Dependency («невыполненная зависимость»)',
        '425 Unordered Collection («неупорядоченный набор»)',
        '426 Upgrade Required («необходимо обновление»)',
        '428 Precondition Required («необходимо предусловие»)',
        '429 Too Many Requests («слишком много запросов»)',
        '431 Request Header Fields Too Large («поля заголовка запроса слишком большие»)',
        '434 Requested host unavailable. («Запрашиваемый адрес недоступен»)',
        '444 Закрывает соединение без передачи заголовка ответа. Нестандартный код ',
        '449 Retry With («повторить с»)',
        '451 Unavailable For Legal Reasons («недоступно по юридическим причинам»)',
        '500 Internal Server Error («внутренняя ошибка сервера»)',
        '501 Not Implemented («не реализовано»)',
        '502 Bad Gateway («плохой, ошибочный шлюз»)',
        '503 Service Unavailable («сервис недоступен»)',
        '504 Gateway Timeout («шлюз не отвечает»)',
        '505 HTTP Version Not Supported («версия HTTP не поддерживается»)',
        '506 Variant Also Negotiates («вариант тоже проводит согласование»)',
        '507 Insufficient Storage («переполнение хранилища»)',
        '508 Loop Detected («обнаружена петля»)',
        '509 Bandwidth Limit Exceeded («исчерпана пропускная ширина канала»)',
        '510 Not Extended («не расширено»)',
        '511 Network Authentication Required («требуется сетевая аутентификация»)'
      ]
    };
  },
  computed: {
    isFilter: function() {
      return this.type === 'filter';
    },
    isHighlight: function() {
      return this.type === 'highlight';
    },
    filterList: function() {
      return this.filterArr(this.query);
    }
  },
  methods: {
    filterArr: function(query) {
      return this.list.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    },
    highlight: function(element) {
      if (this.query !== '') {
        return element.replace(
          new RegExp(this.query, 'gi'),
          '<span class="highlightText">' + this.query + '</span>'
        );
      } else {
        return element;
      }
    },
    chooseFilterType: function() {
      this.type = 'filter';
    },
    chooseHighlightType: function() {
      this.type = 'highlight';
    }
  }
};
</script>

<style>
.highlightText {
  background-color: yellow;
}
</style>
