document.getElementById(&#39;messageButton&#39;).addEventListener(&#39;click&#39;, function() {
var messageParagraph = document.getElementById(&#39;message&#39;);
if (messageParagraph.classList.contains(&#39;hidden&#39;)) {
messageParagraph.classList.remove(&#39;hidden&#39;);
} else {
messageParagraph.classList.add(&#39;hidden&#39;);
}
});
