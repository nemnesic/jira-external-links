jQuery(document).ready(function () {
    jQuery('a[data-renderer-mark="true"]').each(function (i, obj) {
        var link = obj.innerText;
        jQuery(this).append(' | <a class="my-opener" style="color:#FF0000;" target="_blank" href="' + link + '">Open in new tab</a>');
    });
});