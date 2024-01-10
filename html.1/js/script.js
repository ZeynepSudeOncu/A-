const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});



menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});



function search() {
  // Kullanıcının girdiği arama terimini al
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();

  // Sayfadaki tüm metinleri al
  var paragraphs = document.querySelectorAll('#content p');

  // Her bir paragrafı kontrol et
  paragraphs.forEach(function(paragraph) {
      // Paragraf içinde arama terimini ara
      var content = paragraph.textContent.toLowerCase();
      if (content.includes(searchTerm)) {
          // Eğer bulunursa, bulunan kısmı vurgula
          var highlightedContent = content.replace(new RegExp(searchTerm, 'gi'), '<mark>$&</mark>');
          paragraph.innerHTML = highlightedContent;
      }
  });
}
