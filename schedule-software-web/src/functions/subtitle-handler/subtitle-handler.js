import { langData } from "../../data/data management/database-management";

export function subtitleHandler(subtitle) {
    const listLength = subtitle.length
    var subtitleData = subtitle

    while (subtitleData.length > 3) {
        subtitleData = subtitleData.slice(0,2)
    }
    var textValue = subtitleData.join(', ')

    if (subtitleData.length != listLength) {
        var other = langData.other.plural;

        if (listLength - subtitleData.length == 1) {
            other = langData.other.singular
        }

        textValue = `${textValue} & ${listLength - subtitleData.length} ${other}`
    } else {
        textValue = textValue.split('')
        textValue[textValue.lastIndexOf(',')] = ' &'
        textValue.join('')
    }

    return textValue
}