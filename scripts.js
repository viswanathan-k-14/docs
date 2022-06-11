<link rel="stylesheet" href="https://cdn.helpdocs.io/css/v4/bars.min.css">
<link rel="stylesheet" href="https://cdn.helpdocs.io/css/font-awesome.min.css">

<script type="text/javascript">
  window.hd_util_params = {
    disable_legacy_search_timers: true,
    enable_linking_headings: true,
    enable_zoomable_images: true,
    enable_back_to_top_button: true,
    enable_popups: true,
    enable_pre_languages: 'pre',
    search_article_template: `
      <div class="srHit scaleSmall">
        <a class="srLink" data-article-id="\{\{article_id\}\}" href="\{\{relative_url\}\}">
          <h4 class="srHitTitle">\{\{title\}\}</h4>
          <p class="srHitDescription">\{\{description\}\}</p>
        </a>
      </div>
    `
  };

  function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading') {
          fn();
        }
      });
    }
  }

  function addClass(el, className) {
    if (!el || !className) return;
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  // Toggles menu bar SVG from 3 bars to a cross
  (function() {
    ready(function() {
      var mobileNav = document.querySelector('.hnMobileNavButton');

      mobileNav.addEventListener('click', function() {
        if (mobileNav && mobileNav.classList.contains('active')) {
          removeClass(mobileNav, 'active');
        } else {
          addClass(mobileNav, 'active');
        }
      });
    });
  })();

  // ** Add class when < 3 categories to avoid stretched cards **
  (function() {
    ready(function() {
      var categories = document.getElementById('categories');
      if (!categories) return;
      var cards = categories.querySelectorAll('.card');
      if (cards && cards.length <= 3) addClass(categories, 'fewCategories');
    });
  })();
</script>
