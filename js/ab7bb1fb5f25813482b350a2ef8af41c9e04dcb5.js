;(function(){$(document).off('click','.nelidgen_rotate').on('click','.nelidgen_rotate',function(e){e.preventDefault();var elem=$(this),link,attribute;if(elem.data('rotate-id')){$('#nelidgen-'+elem.data('rotate-id')).modal("show");}else if(link=elem.attr('data-rotate-link')){attribute='data-rotate-link';}else if(link=elem.attr('href')){attribute='href';}
if(link){var isMobile=window.isMobileVersion
if(typeof helper_tracking!=='undefined'){link=helper_tracking.addUUIDToUrl(elem,attribute)
link=link.replace(/\\/g,'')}
if(isMobile){location.href=link;}else{window.open(link);}}});})();;