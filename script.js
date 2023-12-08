let codeMirrorEditor;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize CodeMirror Editor
    codeMirrorEditor = CodeMirror(document.getElementById('code-editor'), {
        mode: "htmlmixed",
        lineNumbers: true,
        theme: "default"
    });

    // Function to run code in iframe
    function runCode() {
        let code = codeMirrorEditor.getValue();
        let iframe = document.getElementById('code-output');
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(code);
        iframe.contentWindow.document.close();
    }

    document.getElementById('run-code').addEventListener('click', runCode);

    // Scroll behavior for the header
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && currentScroll > 50) {
            header.classList.add('header-bounce');
            setTimeout(() => header.classList.remove('header-bounce'), 300);
        }

        if (currentScroll > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});


