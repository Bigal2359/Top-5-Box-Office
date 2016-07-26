// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
  continuous: false,
  disableScroll: true,
  callback: function (index, element) {
    $('.movie-nav li').removeClass('active');

    var slidePos = mySwipe.getPos() + 1;

    $('.movie-nav li:nth-child(' + slidePos + ')').addClass('active');
  }
});

$('.movie-nav li').click(function () {
  $('.movie-nav li').removeClass('active');

  var index = $('.movie-nav li').index(this);

  mySwipe.slide(index, 400);
  $(this).addClass('active');
});

var apiURL = 'data.json';

new Vue({

  el: '#app',

  data: {
    currentBranch: 'dev',
    items: null
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
      var self = this;
      $.get(apiURL, function (data) {
        var top5 = data.slice(0, 5);
        self.items = top5;
        console.log(top5);
      });
    }

  }
});
//# sourceMappingURL=main.js.map
