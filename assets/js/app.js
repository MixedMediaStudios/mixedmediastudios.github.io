---
  #CAREFUL
---
var width = $(window).width()
if ( width > 899 )
$( function(){
  $.stellar({
    responsive: true,
  verticalScrolling: true,
  horizontalOffset: 0,
  verticalOffset: 0,
  positionProperty: 'transform',
  hideDistantElements: false
  });
})
{% for author_entry in site.data.authors %}{% assign author = author_entry[1] %}
$('.{{ author.id }}').hovercard({
  detailsHTML: "<img src=\"{{ author.picture }}\" width=\"200px\" alt=\"Picture of {{ author.name }}\"><br />{{ author.name }} is the {{ author.role }} at {{ site.title }}. {% if author.github %}<br/> Github profile: <a href=\"{{ author.github }}\">{{ author.github }}</a>{% endif %}"
})
{% endfor %}
$('.mms').hovercard({
  detailsHTML: "<img src=\"{{ site.icon }}\" width=\"200px\" alt=\"Picture of {{ site.title }}\"><br /> The official blog profile for {{ site.title }}."
})
