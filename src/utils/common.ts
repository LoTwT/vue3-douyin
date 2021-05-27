import { apikey } from "../axios"

// 获取视频或图片
export function getResource(videoName: string) {
    return `${videoName}?apikey=${apikey}`
}

// 评论数转字符串
export function numberToString(num: number): string {
    if (num > 10000) {
        return (num / 10000).toFixed(1) + "w";
    } else {
        return num.toString();
    }
}

// 时间戳转字符串
export function timestampsToString(timestamps: number): string {
    // 时间间隔
    const deltaTime: number = Math.floor(Date.now() / 1000) - timestamps

    if (deltaTime < 60) {
        return "刚刚"
    } else if (deltaTime < 3600) {
        return `${Math.floor(deltaTime / 60)}分钟前`
    } else if (deltaTime < 86400) {
        return `${Math.floor(deltaTime / 3600)}小时前`
    } else if (deltaTime < (86400 * 365)) {
        return `${Math.floor(deltaTime / 86400)}天前`
    } else {
        return `${Math.floor(deltaTime / (86400 * 365))}年前`
    }
}