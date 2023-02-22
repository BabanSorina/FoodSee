export function removeHTMLTags(string) {
    if (typeof string === 'string') {
        const regex = /(<([^>]+)>)/ig;
        return string.replace(regex, '');
    }

    return '';
}