// przełączanie podstron bez przeładowywania strony
const page = {
  initPages: function() {
    const thisPage = this;
    thisPage.pages = document.querySelector('#pages').children;
    thisPage.navLinks = document.querySelectorAll('.menu-link');
    console.log(thisPage.pages);
    console.log( thisPage.navLinks);

    const idFromHash = window.location.hash.replace('#/', '');
    console.log(idFromHash);

    let pageMatchingHash = thisPage.pages[0].id;

    for(let page of thisPage.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisPage.activatePage(pageMatchingHash);

    for(let link of thisPage.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        console.log(this);

        // get page id from href attribute
        const id = clickedElement.getAttribute('href').replace('#', '');

        // run thisApp.activatePage with that id
        thisPage.activatePage(id);

        // change URL hash (czyli końcówka URL po #)
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId) {
    const thisPage = this;

    // add class active to matching page, remove from non-matching
    for(let page of thisPage.pages){
      page.classList.toggle('active', page.id == pageId);
    }

    // add class active to matching links, remove from non-matching
    for(let link of thisPage.navLinks){
      link.classList.toggle('active', link.getAttribute('href') == '#' + pageId);
    }
    console.log(thisPage.navLinks);
  },

  init: function() {
    const thisPage = this;
    thisPage.initPages();
  }
};

page.init();
