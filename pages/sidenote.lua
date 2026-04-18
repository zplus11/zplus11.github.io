function Note(el)
	local content = pandoc.utils.blocks_to_inlines(el.content)
	return pandoc.Span(content, {class = "sidenote"})
end