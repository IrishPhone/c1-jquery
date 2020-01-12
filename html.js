jQuery.prototype.html = function(html_content){
	if(html_content) this.each(element => element.innerHTML = html_content)
	return this.each(element => element.innerHTML)
}
