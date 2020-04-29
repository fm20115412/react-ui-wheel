export default function mergeClassName(...arr: (string | undefined)[]): string | undefined {
    return arr.filter(v => v).join(' ')
}