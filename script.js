document.getElementById('markdown-text').addEventListener('input', function() {
    var markdown_text = document.getElementById('markdown-text').value;
    var converted = marked.parse(markdown_text, on_error="alert('Error in parsing markdown text')");
    var clean_markdown = DOMPurify.sanitize(converted);
    document.getElementById('markdown-preview').innerHTML = clean_markdown;
});

function readFileContents() {
    document.getElementById('markdownFile').click();
}

document.getElementById('markdownFile').addEventListener("change", function() {
    var mdFile = this.files[0];
    var reader = new FileReader();
    reader.readAsText(mdFile);
    reader.onload = function() {
        document.getElementById('markdown-text').value = reader.result;
        // manually trigger the change event so the markdown text is rendered
        document.getElementById('markdown-text').dispatchEvent(new Event('input'));
    };
});

function saveFileContents() {
    var textToSave = document.getElementById('markdown-text').value;
    var blobFile = new Blob([textToSave], {type: "text/plain"});
    var url = URL.createObjectURL(blobFile);
    var a = document.createElement('a');
    a.href = url;
    a.download = "markdown.md";
    a.click();
    URL.revokeObjectURL(url);
}