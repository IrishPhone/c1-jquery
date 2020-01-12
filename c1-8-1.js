function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

jQuery.prototype.remove = function(){
	this.each(element => element.remove())
  return this;
}

jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
  return this;
}

jQuery.prototype.html = function(html_content){
	if(html_content) this.each(element => element.innerHTML = html_content)
	return this.each(element => element.innerHTML)
}

jQuery.prototype.text = function(text_content){
	if(text_content) this.each(element => element.textContent = text_content)
	return this.each(element => element.textContent)
}

const $ = (e) => new jQuery(e);

$('button').hide().show().click(e => console.log(e)).class('name')
console.log( $('button').html('jjj') );
console.log( $('h1').html() );
console.log( $('h1').html("Privet?") );

console.log( $('p').text() );
console.log( $('p').text("222") );