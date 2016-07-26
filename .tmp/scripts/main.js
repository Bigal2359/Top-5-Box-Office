function startSwipe() {
  var elem = document.getElementById('mySwipe');
  var mySwipe = Swipe(elem, {
    continuous: false,
    disableScroll: true,
    callback: function (index, element) {
      $('.movie-nav li').removeClass('active');

      var slidePos = mySwipe.getPos() + 1;

      $('.movie-nav li:nth-child(' + slidePos + ')').addClass('active');

      var viewMore = $('.movie-container:nth-child(' + slidePos + ') a').attr('href');

      $('.view-more').attr('href', viewMore);
    }
  });

  $('.movie-nav li').click(function () {
    $('.movie-nav li').removeClass('active');

    var index = $('.movie-nav li').index(this);

    mySwipe.slide(index, 400);
    $(this).addClass('active');
  });
}

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

        setTimeout(function () {
          startSwipe();
        }, 100);
      });
    }

  }
});

setTimeout(function () {
  $('.view-more').attr('href', $('.movie-container:nth-child(1) a').attr('href'));
}, 500);
//# sourceMappingURL=main.js.map
