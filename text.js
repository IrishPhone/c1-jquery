jQuery.prototype.text = function(text_content){
	if(text_content) this.each(element => element.textContent = text_content)
	return this.each(element => element.textContent)
}
