import { Hdr } from "./localization"

export const Color = {
    gold: '#E6B31E',
    dark: '#343434',
    whiteish: '#FCFAF1',
    gray: '#CACACA',
}
export class C {
    static getTitle(path, isEng) {
        if(path==='/') { return Hdr.menuItems(isEng).at(0)}
        let cleanPath = path.slice(1)
        let finder = Hdr.menuItems(true).find(el => el.toLowerCase()===cleanPath)

        if (finder){
            let index = Hdr.menuItems(true).indexOf(finder)
            return Hdr.menuItems(isEng).at(index)
        }
        return 'Norman doors'
    }
}