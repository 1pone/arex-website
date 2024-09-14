export async function copyToClipboard(text: string) {
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Copy successful');
        } catch (err) {
            console.error('Copy failed', err);
        }
    } else {
        // Fallback method
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // Prevent scrolling to the bottom of the page
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            console.log('Copy successful');
        } else {
            console.error('Copy failed');
        }
    } catch (err) {
        console.error('Copy failed', err);
    }

    document.body.removeChild(textarea);
}

