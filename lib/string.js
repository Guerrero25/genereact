module.exports = {
    pascalize: str => {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return match.toUpperCase();
        });
    },

    smallCaps: str => {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return "_"; // or if (/\s+/.test(match)) for white spaces
            return match.toLowerCase();
        });
    }
}