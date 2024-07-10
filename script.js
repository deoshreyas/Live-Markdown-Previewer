document.getElementById('markdown-text').addEventListener('input', function() {
    var markdown_text = document.getElementById('markdown-text').value;
    var converted = marked.parse(markdown_text, on_error="alert('Error in parsing markdown text')");
    var clean_markdown = DOMPurify.sanitize(converted);
    document.getElementById('markdown-preview').innerHTML = clean_markdown;
});