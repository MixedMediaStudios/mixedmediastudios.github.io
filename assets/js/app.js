---
  #CAREFUL
---
console.log("ZZOOOOOOO88O888888888888OZ8ZZO$O77$I$II$\nZZZZOOOOOOO8OO888888888O8Z8ZZO$O77$I$II$\nZZZOOOOOOOO88O88O88888Z8OZ8ZZO$Z77$I$II$\nZO........88888OO88888ZOOZ8$ZZ7Z77$7Z77Z\nOOOZO?. . .OO8888888Z8ZOOZ8$.........77Z\nOOOOOO......O888888OZ8ZOOZOI.Z7Z..$7Z77Z\nOOOOOO.    .8O888Z8OZ8ZOOZO.ZZ7Z.7Z7Z7$O\nOOOOOO..8. ..O8O8Z8OZ8ZOO$.+..7Z.7Z7Z77Z\nO8OOOO. OO....8Z8Z8OZ8ZOO.....$O.7Z7O$$Z\nOOOOOO..88.....:8Z8ZZ8ZOO...+.$O.$Z$$$ZZ\nOOOOOO..8OO..8Z.8Z8OZ8ZO.Z.Z+.$O.$OZZZZZ\nOOOOOO. 8888.8ZZ.Z8ZZ8Z.,.8Z?.$O.$ZZZZZZ\nOOOOOO..8OO8~.ZZ..8ZZ8....8Z?.Z8.ZZZZZZZ\nOOOOO8. OOZ8Z..Z8 IOZ8.?.Z8Z?.Z8ZZZZZZZZ\nOOOOOO..=.Z8Z8.Z8Z.OZ.Z.OZ8Z?.ZOOOOOOZZZ\nOOOOOO.. .Z8Z8O.8Z$....ZOZ8Z?.OOOOOOOOOO\nOOO888O. .OOZ8Z. Z8....8OZ8ZIOOOOOOOOOOO\nO8OOOOO...OOZ8ZO..8O$.Z8OZ8ZOOOOOOOOOOOO\nOOOOZO7.,.OOZ8ZO8.8O.8Z8OZOOOOOOOOOOOOOO\nOO8....Z8 ...8Z88Z..?8Z8OOOOOOOOOOOOOOOO\nOOZ$I7$I$I7$I8ZO8Z$7Z8Z8OOOOOOOOOOOOOOOO\nOOZ8ZOOZ8ZZ8Z8ZZ8Z8OZ8ZOOOOOOOOOOOOOOOOO\nOOZ8ZOOZ8ZZ8Z8ZZ8Z8OZ8OOOOOOOOOOOOOOOOOO\n\nYou probably are here because you want to know how we made the site:\n\n- Generator: Jekyll (http://jekyllrb.com/)\n- Template: Thinny (https://github.com/camporez/Thinny)\n- Our files and mods (http://git.io/j8Z6)");
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
