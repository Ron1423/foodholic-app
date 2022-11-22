function force_scroll_bottom() {
  const el = document.getElementById("content-chat-feed");
  if (el) {
    el.scrollTop = el.scrollHeight;
  }
}
// run scroll botton
force_scroll_bottom();
