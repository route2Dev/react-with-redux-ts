// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createPopover(tag) {
  var selector = tag || '[data-toggle="popover"]';
  // eslint-disable-next-line no-undef
  $(selector).popover();
}
