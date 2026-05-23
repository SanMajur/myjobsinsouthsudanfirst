const MS_PER_DAY = 1000 * 60 * 60 * 24;

    export function getDaysAgo(postedAt: Date): number {
    const now = Date.now();
    return Math.floor((now - postedAt.getTime()) / MS_PER_DAY);
}