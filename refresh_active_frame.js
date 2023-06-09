
(function(win, doc) {
	var ae = doc.activeElement;
	if (ae)
	{
		var tn = ae.tagName.toLowerCase();
		if (tn == 'frame' || tn == 'iframe')
		{
			win = ae.contentWindow;
		}
	}
      console.log('Avinash3423qre')
	win.location.reload();
})(window, document);