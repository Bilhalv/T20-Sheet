export default function Normalize(i: string) {
    const replacements: { [key: string]: string } = {
        "ç": "c",
        "ã": "a",
        "á": "a",
        "í": "i",
        "é": "e"
    };

    return i.replace(/[çãáíé]/g, match => replacements[match]);
}
