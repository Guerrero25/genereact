module.exports = {
    pascalize: str => {
        return str.replace(/(?:^\w|[A-Z]|-|\b\w|\s+)/g, function(match, index) {
            if (match === '-') return ""; // or if (/\s+/.test(match)) for white spaces
            return match.toUpperCase();
        });
    },

    smallCaps: str => {
        return str.replace(/(?:^\w|[A-Z]|-|\b\w|\s+)/g, function(match, index) {
            if (match === '-') return "_"; // or if (/\s+/.test(match)) for white spaces
            return match.toLowerCase();
        });
    }
}